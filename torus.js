'use strict'

/**
 * Module dependencies.
 */
const PrimitiveTorus = require('primitive-torus')
const { Geometry } = require('axis3d')


const instanceOf = (instance, Parent) => {
  if (null == instance || null == Parent) {
    return false
  } else if (Array.isArray(instance[$types])) {
      return (
         instance[$types].includes(Parent.name.toLowerCase())
      || instance[$types].includes(Parent.name)
      )
  } else {
    return instance instanceof Parent
  }
}

module.exports = TorusGeometry
function TorusGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let {
    majorSegments,
    minorSegments,
    majorRadius,
    minorRadius,
    arc,
  } = opts

  // defaults
  if (null == majorSegments ) { majorSegments = 32 }
  if (null == minorSegments ) { minorSegments = 64 }
  if (null == majorRadius ) { majorRadius = 1 }
  if (null == minorRadius ) { minorRadius = 0.5 }
  if (null == arc ) { arc = 2*Math.PI }

  for (const o in opts) {
    if (opts.hasOwnProperty(o) && 'number' != typeof opts[o]) {
      throw new TypeError(
        `Expecting '${o}' to a be a number. Got ${typeof opts[o]}.`
      )
    }
  }

  const torus = new Geometry({
    complex: PrimitiveTorus({
      majorSegments, minorSegments,
      majorRadius, minorSegments,
      arc,
    }),
  })

  torus.majorSegments = majorSegments
  torus.minorSegments = minorSegments
  torus.majorRadius = majorRadius
  torus.minorRadius = minorRadius
  torus.arc = arc

  return torus
}
