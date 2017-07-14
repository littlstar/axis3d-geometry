'use strict'

/**
 * Module dependencies.
 */
const PrimitiveSphere = require('primitive-sphere')
const { Geometry } = require('axis3d')

module.exports = SphereGeometry
function SphereGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let { radius,
        segments
      } = opts

  // defaults
  if (null == radius) { radius = 1 }
  if (null == segments) { segments = 32 }

  if ('number' != typeof radius) {
    throw new TypeError(
      `Expecting 'radius' to a be a number. Got ${typeof radius}.`
    )
  }

  if ('number' != typeof segments) {
    throw new TypeError(
      `Expecting 'segments' to a be a number. Got ${typeof segments}.`
    )
  }

  const sphere = new Geometry({
    complex: PrimitiveSphere(radius, {segments})
  })

  sphere.radius = radius
  sphere.segments = segments

  return sphere
}
