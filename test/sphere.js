'use strict'

/**
 * Module dependencies.
 */
const test = require('tape')
const { Geometry } = require('axis3d')
const SphereGeometry = require('../sphere')

const noop = () => void 0
const createSphereGeometry = (o) => {
  return new SphereGeometry(o)
}

test('new SphereGeometry(opts) -> Function', ({
  deepEqual,
  throws,
  assert,
  equal,
  plan,
  end
}) => {
  plan(8)

  assert('function' == typeof SphereGeometry)

  const defaultSphere = { flatten: false,
                          radius: 1,
                          segments: 32 }

  const nullSphere = createSphereGeometry(null)
  deepEqual(defaultSphere, nullSphere,
            'creates default Sphere if null is passed in as argument.')

  const noopSphere = createSphereGeometry(noop)
  deepEqual(defaultSphere, noopSphere,
            'creates default Sphere if noop is passed in as argument.')

  throws(() => createSphereGeometry({radius: 'foo'}),
    TypeError,
    'throws TypeError when `radius` is not a number.')

  throws(() => createSphereGeometry({segments: 'foo'}),
    TypeError,
    'throws TypeError when `segments` is not a number.')

  const sphereArgs = {radius: 4, segments: 18}
  const aSphere = createSphereGeometry(sphereArgs)

  assert('object' == typeof aSphere.complex)

  equal(4, aSphere.radius, 'assigns radius.')
  equal(18, aSphere.segments, 'assigns segments.')

  end()
})