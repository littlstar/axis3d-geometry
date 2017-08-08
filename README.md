axis3d-geometry
===============

Common geometry for [Axis3D](https://github.com/littlstar/axis3d). All
the geometry in this module extends the `Geometry` class exposing
`positions`, `normals`, `uvs`, and `cells` as properties on the
instance effectively creating a
[simplicial-complex](https://github.com/mikolalysenko/simplicial-complex).

## Installation

```sh
$ npm install axis3d-geometry
```

**Ensure *axis3d* is already installed as a peer dependency.**

## Example

```javascript
const {
  PerspectiveCamera,
  Material,
  Context,
  Frame,
  Mesh
} = require('axis3d')
const { BoxGeometry } = require('axis3d-geometry')

const ctx = new Context()
const material = new Material(ctx)
const geometry = new BoxGeometry()
const camera = new PerspectiveCamera(ctx)
const frame = new Frame(ctx)
const box = new Mesh(ctx, {geometry})

frame(({time}) => {
  camera({position: [0, 0, 10]}, () => {
    material({}, () => {
      box({wireframe: true})
    })
  })
})
```

## API

### BoxGeometry(opts)

```js
const box = new BoxGeometry(opts)
```

where `opts` contains:

* `segments` - defaults to
* `x` - Size along the x-axis. (default: `1`)
* `y` - Size along the y-axis. (default: `1`)
* `z` - Size along the z-axis. (default: `1`)

and are passed directly to
[primitive-cube](https://github.com/vorg/primitive-cube).

### TriangleGeometry

```js
const triangle = new TriangleGeometry()
```

### CylinderGeometry

```js
const cylinder = new CylinderGeometry(opts)
```

where `opts` contains:

* `height` - Size along the y-axis. (default: `5`)
* `radiusTop` - Radius of the top cross-section, or circle. (default: `1`)
* `radiusBottom` - Radius of the bottom cross-section, or circle. (default: `1`)
* `radialSegments` - Number of radial segments in the complex. (default: `50`)
* `heightSegments` - Number of height segments in the complex. (default: `50`)

and are passed directly to
[primitive-cylinder](https://github.com/ataber/primitive-cylinder).

### SphereGeometry

```js
const sphere = new SphereGeometry(opts)
```

where `opts` contains:

* `segments` - Number of segments in the complex. (default: `32`)
* `radius` - Spherical radius. (default: `1`)

and are passed directly to
[primitive-sphere](https://github.com/glo-js/primitive-sphere).

### PlaneGeometry

```js
const plane = new PlaneGeometry(opts)
```

where `opts` contains:

* `segments` - Number of segments along the xy-axis. (default: `{x: 5, y: 5}`)
  * `segments.x` - Number of segments along the x-axis. (default: `5`)
  * `segments.y` - Number of segments along the y-axis. (default: `5`)
* `size` - Size of complex along the xy-axis. (default: `{x: 1, y: 1}`)
  * `size.x` - Size of complex along the x-axis. (default: `1`)
  * `size.y` - Size of complex along the y-axis. (default: `1`)
* `quads` - Indication to generate quads instead of triangles. (default: `false`)

and are passed directly to
[primitive-plane](https://github.com/vorg/primitive-plane).

### TorusGeometry

```js
const torus = new TorusGeometry(opts)
```

where `opts` contains:

* `majorSegments` - The number of segments for the major ring. (default: `32`)
* `minorSegments` - The number of segments for the minor rigg. (default: `64`)
* `majorRadius` - The radius of the major ring. (default: `1`)
* `minorRadius` - The radius of the minor ring. (default: `0.5`)
* `arc` - The torus arc path. (default: `2*Math.PI`)

and are passed directly to
[primitive-torus](https://github.com/glo-js/primitive-torus).

### CapsuleGeometry

```js
const capsule = new CapsuleGeometry(opts)
```

where `opts` contains:

* `radius` - The radius of the inner circle cross-section. (default: `0.5`)
* `height` - The size along the y-axix. (default: `1`)
* `segments` - The number of segments in complex. (default: `12`)

and are passed directly to
[primitive-capsule](https://github.com/vorg/primitive-capsule).

## License

MIT
