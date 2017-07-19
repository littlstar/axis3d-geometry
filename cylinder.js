'use strict'

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

  for (const k in opts) {
    if (opts.hasOwnProperty(k) && 'number' != typeof opts[k]) {
      throw new TypeError(
        `Expecting '${k}' to be a number. Got ${typeof opts[k]}.`)
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

  return Object.assign(cylinder, {
    height,
    radiusTop,
    radiusBottom,
    radialSegments,
    heightSegments,
  })
}
