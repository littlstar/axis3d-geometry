'use strict'

const PrimitiveCapsule = require('primitive-capsule')
const { Geometry } = require('axis3d')

module.exports = CapsuleGeometry
function CapsuleGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let { radius, height, segments, resolution } = opts

  // defaults
  if (null == radius) { radius = 0.5 }
  if (null == height) { height = 1 }
  if (null == segments) { segments = 12 }
  if (null == resolution) { resolution = 24 }

  for (const k in opts) {
    if (opts.hasOwnProperty(k) && 'number' != typeof opts[k]) {
      throw new TypeError(
        `Expecting '${k}' to be a number. Got ${typeof opts[k]}.`)
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
