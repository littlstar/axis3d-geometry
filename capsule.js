'use strict'

/**
 * Module dependencies.
 */
const PrimitiveCapsule = require('primitive-capsule')
const { Geometry } = require('axis3d')

module.exports = CapsuleGeometry
function CapsuleGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let { radius,
        height,
        segments,
        resolution
      } = opts

  // defaults
  if (null == radius) { radius = 1 }
  if (null == height) { height = 0.5 }
  if (null == segments) { segments = 12 }
  if (null == resolution) { resolution = 24 }

  for (const o in opts) {
    if ( opts.hasOwnProperty(o) && 'number' != typeof opts[o] ) {
      throw new TypeError(`Expecting '${o}' to be a number. Got ${typeof opts[o]}.`)
    }
  }

  const capsule = new Geometry({
    complex: PrimitiveCapsule(radius, height, resolution, segments)
  })

  capsule.radius = radius
  capsule.height = height
  capsule.segments = segments
  capsule.resolution = resolution

  return capsule
}
