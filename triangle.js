'use strict'

const { Geometry } = require('axis3d')

module.exports = TriangleGeometry
function TriangleGeometry() {
  const triangle = new Geometry({
    complex: {
      positions: [
        [-1.0, -0.5*Math.sqrt(3), +0.0],
        [+1.0, -0.5*Math.sqrt(3), +0.0],
        [+0.0, +0.5*Math.sqrt(3), +0.0],
        [-1.0, -0.5*Math.sqrt(3), +0.0],
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

  return triangle
}
