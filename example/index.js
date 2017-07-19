'use strict'

const {
  PerspectiveCamera,
  FlatMaterial,
  Command,
  Context,
  Frame,
  Mesh,
} = require('axis3d')

const {
  CylinderGeometry,
  TriangleGeometry,
  CapsuleGeometry,
  SphereGeometry,
  PlaneGeometry,
  TorusGeometry,
  BoxGeometry,
} = require('../')

const quat = require('gl-quat')

const ctx = new Context()
const material = new FlatMaterial(ctx)
const camera = new PerspectiveCamera(ctx)
const frame = new Frame(ctx)

const cylinder = new Mesh(ctx, {geometry: new CylinderGeometry()})
const triangle = new Mesh(ctx, {geometry: new TriangleGeometry()})
const capsule = new Mesh(ctx, {geometry: new CapsuleGeometry()})
const sphere = new Mesh(ctx, {geometry: new SphereGeometry()})
const torus = new Mesh(ctx, {geometry: new TorusGeometry()})
const plane = new Mesh(ctx, {geometry: new PlaneGeometry()})
const box = new Mesh(ctx, {geometry: new BoxGeometry()})

const position = [8, 8, 8]
const rotation = quat.identity([])
const offset = 2

frame(rotate)
frame(scene)

function rotate({time}) {
  const angle = quat.setAxisAngle([], [0, 1, 0], time*Math.PI/180)
  quat.slerp(rotation, rotation, angle, 0.7)
}

function scene() {
  camera({position, rotation}, () => {
    material({}, () => {
      box({wireframe: true})
      torus({position: [0, offset, offset], wireframe: true})
      plane({position: [0, -offset,- offset], wireframe: true})
      sphere({position: [-offset, 0, 0], wireframe: true})
      capsule({position: [offset, 0, offset], wireframe: true})
      cylinder({position: [0, -offset, offset], wireframe: true})
      triangle({position: [-offset, -offset, 0], wireframe: false})
    })
  })
}
