'use strict'

/**
 * Module dependencies.
 */
const { Geometry } = require('axis3d')

module.exports = TriangleGeometry
function TriangleGeometry() {
  let triangle = {}

  const geo = new Geometry({
    complex: {
      positions: [
        [-1.0, -0.5*Math.sqrt(3), +0.0],
        [+1.0, -0.5*Math.sqrt(3), +0.0],
        [+0.0, +0.5*Math.sqrt(3), +0.0],
      ],

      normals: [
        [-1.0, -1.0, +0.0],
        [+1.0, -1.0, +0.0],
        [+0.0, +1.0, +0.0],
      ],

      uvs: [
        [-1.0, -0.5*Math.sqrt(3)],
        [+1.0, -0.5*Math.sqrt(3)],
        [+0.0, +0.5*Math.sqrt(3)],
      ],
    }
  })

  triangle._complex = geo._complex
  triangle.complex = geo.complex
  triangle.positions = geo.complex.positions
  triangle.normals = geo.complex.normals
  triangle.uvs = geo.complex.uvs
  triangle.cells = geo.complex.cells

  return triangle
}
