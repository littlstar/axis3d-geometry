'use strict'

const TriangleGeometry = require('../triangle')
const { Geometry } = require('axis3d')
const test = require('tape')

test('new TriangleGeometry()', ({
  deepEqual,
  assert,
  plan,
  end
}) => {
  plan(5)

  assert('function' == typeof TriangleGeometry)

  const triangle = new TriangleGeometry()

  assert('object' == typeof triangle.complex)

  const positions = [
          [-1.0, -0.5*Math.sqrt(3), +0.0],
          [+1.0, -0.5*Math.sqrt(3), +0.0],
          [+0.0, +0.5*Math.sqrt(3), +0.0],
        ]
  const normals = [
          [-1.0, -1.0, +0.0],
          [+1.0, -1.0, +0.0],
          [+0.0, +1.0, +0.0],
        ]
  const uvs = [
          [-1.0, -0.5*Math.sqrt(3)],
          [+1.0, -0.5*Math.sqrt(3)],
          [+0.0, +0.5*Math.sqrt(3)],
        ]

  deepEqual(triangle.complex.positions, positions, 'assigns default positions.')
  deepEqual(triangle.complex.normals, normals, 'assigns default normals.')
  deepEqual(triangle.complex.uvs, uvs, 'assigns default uvs.')

  end()
})
