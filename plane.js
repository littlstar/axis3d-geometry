'use strict'

/**
 * Module dependencies.
 */
const PrimitivePlane = require('primitive-plane')
const { Geometry } = require('axis3d')

module.exports = PlaneGeometry
function PlaneGeometry(opts) {
  // ensure object
  if (null == opts || 'object' != typeof opts) {
    opts = {}
  }

  let plane = {}
  let { size,
        segments,
        quads } = opts

  // defaults
  if (null == size) { size = {x: 1, y: 1} }
  if (null == segments) { segments = {x: 5, y: 5} }
  if (null == quads) { quads = false }

  if ('number' == typeof segments) {
    segments = {x: segments, y: segments}
  } else if ('object' == typeof segments) {
    if ('number' != typeof segments.x) {
      throw new TypeError(
        `Expecting '.segments.x' to a be a number. Got ${typeof segments.x}.`
      )
    } else if ('number' != typeof segments.y) {
      throw new TypeError(
        `Expecting '.segments.y' to a be a number. Got ${typeof segments.y}.`
      )
    }
  }

  if ('number' == typeof size) {
    size = {x: size, y: size}
  } else if ('object' == typeof size) {
    if ('number' != typeof size.x) {
      throw new TypeError(
        `Expecting '.size.x' to a be a number. Got ${typeof size.x}.`
      )
    } else if ('number' != typeof size.y) {
      throw new TypeError(
        `Expecting '.size.y' to a be a number. Got ${typeof size.y}.`
      )
    }
  }

  const geo = new Geometry({
    complex: PrimitivePlane(
      size.x, size.y,
      segments.x, segments.y,
      {quads}
    )
  })

  plane._complex = geo._complex
  plane.complex = geo.complex
  plane.positions = geo.complex.positions
  plane.normals = geo.complex.normals
  plane.uvs = geo.complex.uvs
  plane.cells = geo.complex.cells
  plane.size = geo.size
  plane.quads = geo.quads
  plane.segments = geo.segments

  return plane
}
