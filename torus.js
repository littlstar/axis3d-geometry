'use strict'

const PrimitiveTorus = require('primitive-torus')
const { Geometry } = require('axis3d')

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
    arc
  } = opts

  // defaults
  if (null == majorSegments ) { majorSegments = 32 }
  if (null == minorSegments ) { minorSegments = 64 }
  if (null == majorRadius ) { majorRadius = 1 }
  if (null == minorRadius ) { minorRadius = 0.5 }
  if (null == arc ) { arc = 2*Math.PI }

  for (const k in opts) {
    if (opts.hasOwnProperty(k) && 'number' != typeof opts[k]) {
      throw new TypeError(
        `Expecting '${k}' to be a number. Got ${typeof opts[k]}.`)
    }
  }

  const torus = new Geometry({
    complex: PrimitiveTorus({
      majorSegments,
      minorSegments,
      majorRadius,
      minorRadius,
      arc
    })
  })

  return Object.assign(torus, {
    majorSegments,
    minorSegments,
    majorRadius,
    minorRadius,
    arc
  })
}
