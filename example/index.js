'use strict'

const {
  PerspectiveCamera,
  FlatMaterial,
  Command,
  Context,
  Frame,
  Mesh,
} = require('axis3d')

const { BoxGeometry,
        CapsuleGeometry,
        TorusGeometry,
        PlaneGeometry,
        SphereGeometry,
        CylinderGeometry,
        TriangleGeometry,
       } = require('../')

const quat = require('gl-quat')

const ctx = new Context()
const material = new FlatMaterial(ctx)
const camera = new PerspectiveCamera(ctx)
const frame = new Frame(ctx)
const box = new Mesh(ctx, {geometry: new BoxGeometry()})
const capsule = new Mesh(ctx, {geometry: new CapsuleGeometry()})
const torus = new Mesh(ctx, {geometry: new TorusGeometry()})
const plane = new Mesh(ctx, {geometry: new PlaneGeometry()})
const sphere = new Mesh(ctx, {geometry: new SphereGeometry()})
const cylinder = new Mesh(ctx, {geometry: new CylinderGeometry()})
const triangle = new Mesh(ctx, {geometry: new TriangleGeometry()})

frame(({time}) => {
  camera({position: [0, 0, 10]}, () => {
    material({}, () => {
      box({wireframe: true})
      capsule({position: [1,0,1],wireframe: true})
      torus({position: [0,1,1],wireframe: true})
      plane({position: [0,-1,-1],wireframe: true})
      sphere({position: [-1,0,0],wireframe: true})
      cylinder({position: [0,-1,1],wireframe: true})
      triangle({position: [-1,-1,0],wireframe: true})
    })
  })
})
