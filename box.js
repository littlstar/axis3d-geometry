'use strict'

/**
 * Module dependencies.
 */
const { Geometry } = require('axis3d')
const PrimitiveCube = require('primitive-cube')

module.exports = BoxGeometry
function BoxGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let { segments, x, y, z } = opts

  // defaults
  if (null == segments) { segments = 1 }
  if (null == x) { x = 1 }
  if (null == y) { y = 1 }
  if (null == z) { z = 1 }

  if ('number' != typeof x) {
    throw new TypeError(`Expecting '.x' to a be a number. Got ${typeof x}.`)
  }

  if ('number' != typeof y) {
    throw new TypeError(`Expecting '.y' to a be a number. Got ${typeof y}.`)
  }

  if ('number' != typeof z) {
    throw new TypeError(`Expecting '.z' to a be a number. Got ${typeof z}.`)
  }

  if ('number' != typeof segments && 'object' != typeof segments) {
    throw new TypeError(
      `Expecting '.segments' to be an object or 'number'. ` +
      `Got ${typeof segments}`
    )
  }

  if ('number' == typeof segments) {
    segments = {x: segments, y: segments, z: segments}
  } else if ('object' == typeof segments) {
    if ('number' != typeof segments.x) {
      throw new TypeError(
        `Expecting '.segments.x' to a be a number. Got ${typeof segments.x}.`
      )
    } else if ('number' != typeof segments.y) {
      throw new TypeError(
        `Expecting '.segments.y' to a be a number. Got ${typeof segments.y}.`
      )
    } else if ('number' != typeof segments.z) {
      throw new TypeError(
        `Expecting '.segments.z' to a be a number. Got ${typeof segments.z}.`
      )
    }
  }

  const box = new Geometry({
    complex: PrimitiveCube(x, y, z, segments.x, segments.y, segments.z)
  })

  box.size = {x, y, z}
  box.segments = segments

  return box
}
