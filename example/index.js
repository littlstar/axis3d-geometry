'use strict'

const {
  PerspectiveCamera,
  FlatMaterial,
  Quaternion,
  Command,
  Context,
  Vector3,
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
const cap = new Mesh(ctx, {geometry: new CapsuleGeometry()})
const tor = new Mesh(ctx, {geometry: new TorusGeometry()})
const pla= new Mesh(ctx, {geometry: new PlaneGeometry()})
const sph= new Mesh(ctx, {geometry: new SphereGeometry()})
const cyl= new Mesh(ctx, {geometry: new CylinderGeometry()})
const tri= new Mesh(ctx, {geometry: new TriangleGeometry()})

const rotation = new Quaternion()
const position = new Vector3(0, 0, 5)
const angle = new Quaternion()

frame(({time}) => {
  quat.setAxisAngle(angle, [0, 1, 0], 0.5*time)
  quat.slerp(rotation, rotation, angle, 0.5)
  camera({rotation, position}, () => {
    material({}, () => {
      box({wireframe: true})
      cap({position: [1,0,1],wireframe: true})
      tor({position: [0,1,1],wireframe: true})
      pla({position: [0,-1,-1],wireframe: true})
      sph({position: [-1,0,0],wireframe: true})
      cyl({position: [0,-1,1],wireframe: true})
      tri({position: [-1,-1,0],wireframe: true})
    })
  })
})
