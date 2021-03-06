'use strict'

const CapsuleGeometry = require('../capsule')
const { Geometry } = require('axis3d')
const test = require('tape')

const noop = () => void 0
const createCapsuleGeometry = (o) => {
  return new CapsuleGeometry(o)
}

test('new CapsuleGeometry(opts)', ({
  deepEqual,
  assert,
  throws,
  plan,
  pass,
  end
}) => {
  plan(12)

  if ('function' == typeof CapsuleGeometry) {
    pass('is function.')
  }

  const defaultCapsule = { flatten: false,
                           radius: 0.5,
                           height: 1,
                           segments: 12,
                           resolution: 24 }

  const nullCapsule = createCapsuleGeometry(null)
  deepEqual(defaultCapsule,
            nullCapsule,
            'creates default Capsule if null is passed in as argument.')

  const noopCapsule = createCapsuleGeometry(noop)
  deepEqual(defaultCapsule,
            noopCapsule,
            'creates default Capsule if function is passed in as argument.')

  throws(() => { createCapsuleGeometry({radius: 'foo'}) },
    TypeError,
    'throws TypeError when `radius` is not a number.')

  throws(() => { createCapsuleGeometry({height: '1'}) },
        TypeError,
        'throws TypeError when `height` is not a number.')

  throws(() => { createCapsuleGeometry({segments: 'foo'}) },
    TypeError,
    'throws TypeError when `segments` is not a number.')

  throws(() => { createCapsuleGeometry({resolution: '24'}) },
        TypeError,
        'throws TypeError when `resolution` is not a number.')

  const anotherCapsule = createCapsuleGeometry({ radius: 3,
                                                 height: 13,
                                                 segments: 23,
                                                 resolution: 34 })

  assert('object' == typeof anotherCapsule.complex)

  deepEqual(3, anotherCapsule.radius, 'assigns radius.')
  deepEqual(13, anotherCapsule.height, 'assigns height.')
  deepEqual(23, anotherCapsule.segments, 'assigns segments.')
  deepEqual(34, anotherCapsule.resolution, 'assigns resolution.')

  end()
})
