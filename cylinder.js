'use strict'

/**
 * Module dependencies.
 */
const PrimitiveCylinder = require('primitive-cylinder')
const { Geometry } = require('axis3d')

module.exports = CylinderGeometry
function CylinderGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let { height,
        radiusTop,
        radiusBottom,
        radialSegments,
        heightSegments
      } = opts

  // defaults
  if (null == height) { height = 5 }
  if (null == radiusTop) { radiusTop = 1 }
  if (null == radiusBottom) { radiusBottom = 1 }
  if (null == radialSegments) { radialSegments = 50 }
  if (null == heightSegments) { heightSegments = 50 }

  for (const o in opts) {
    if ( opts.hasOwnProperty(o) && 'number' != typeof opts[o] ) {
      throw new TypeError(`Expecting '${o}' to be a number. Got ${typeof opts[o]}.`)
    }
  }

  const cylinder = new Geometry({
    complex: PrimitiveCylinder(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments),
  })

  cylinder.height = height
  cylinder.radiusTop = radiusTop
  cylinder.radiusBottom = radiusBottom
  cylinder.radialSegments = radialSegments
  cylinder.heightSegments = heightSegments

  return cylinder
}
