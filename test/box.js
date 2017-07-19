'use strict'

const { Geometry } = require('axis3d')
const BoxGeometry = require('../box')
const test = require('tape')

let boxCount = 0
const noop = () => void 0
const createBoxGeometry = (o) => {
  const bx = new BoxGeometry(o)
  ++boxCount
  return bx
}

test('new BoxGeometry(opts)', ({
  deepEqual,
  assert,
  throws,
  plan,
  pass,
  end
}) => {
  plan(14)

  if ('function' == typeof BoxGeometry) {
    pass('is function.')
  }

  throws(() => { createBoxGeometry({x: 'foo'}) },
        TypeError,
        'throws TypeError when `x` is not a number.')

  throws(() => { createBoxGeometry({y: 'foo'}) },
        TypeError,
        'throws TypeError when `y` is not a number.')

  throws(() => { createBoxGeometry({z: {}}) },
        TypeError,
        'throws TypeError when `z` is not a number.')


  throws(() => { createBoxGeometry({segments: 'foo'}) },
        TypeError,
        'throws TypeError when segments is not a number.')


  throws(() => { createBoxGeometry({segments: {x:'x'}}) },
        TypeError,
        'throws TypeError when segments.x is not a number.')

  throws(() => { createBoxGeometry({segments: {x: 4, y:'y'}}) },
        TypeError,
        'throws TypeError when segments.y is not a number.')

  throws(() => { createBoxGeometry({segments: {z:'z'}}) },
        TypeError,
        'throws TypeError when segments.z is not a number.')

  const nullBox = createBoxGeometry(null)
  deepEqual({
          flatten: false,
          size: { x: 1, y: 1, z: 1 },
          segments: { x: 1, y: 1, z: 1 }
        }, nullBox, 'creates default Box if null is passed in as argument.')

  const anotherBox = createBoxGeometry({x: 3})
  deepEqual({
          flatten: false,
          size: { x: 3, y: 1, z: 1 },
          segments: { x: 1, y: 1, z: 1 }
        }, anotherBox, 'creates default Box if incomplete opts object is passed in as argument.')

  const superBox = createBoxGeometry({x: 3})
  assert('object' == typeof superBox.complex)
  assert(null != superBox.complex)

  const sizeBox = createBoxGeometry({x: 3})
  deepEqual({ x: 3, y: 1, z: 1 }, sizeBox.size, 'assigns size to {x,y,z} object.')

  const segBox = createBoxGeometry({x: 3})
  deepEqual({ x: 1, y: 1, z: 1 }, segBox.segments, 'assigns segments object.')

  end()
})
