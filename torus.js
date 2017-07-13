'use strict'

/**
 * Module dependencies.
 */
const PrimitiveTorus = require('primitive-torus')
const { Geometry } = require('axis3d')

module.exports = TorusGeometry
function TorusGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let torus = {}
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

  const geo = new Geometry({
    complex: PrimitiveTorus({
      majorSegments, minorSegments,
      majorRadius, minorSegments,
      arc,
    }),
  })

  torus._complex = geo._complex
  torus.complex = geo.complex
  torus.positions = geo.complex.positions
  torus.normals = geo.complex.normals
  torus.uvs = geo.complex.uvs
  torus.cells = geo.complex.cells
  torus.majorSegments = geo.majorSegments
  torus.minorSegments = geo.minorSegments
  torus.majorRadius = geo.majorRadius
  torus.minorRadius = geo.minorRadius
  torus.arc = geo.arc

  return torus
}
