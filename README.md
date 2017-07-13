# axis3d-geometry

Geometry module for use with Axis3D.

## Usage
#### `geometry = new BoxGeometry({segments: 4})`

## Installation

Download or clone this repo and run:

```
npm install
budo example -p 3000 --live --verbose
```

## Example
```javascript
const { PerspectiveCamera,
        FlatMaterial,
        Command,
        Context,
        Frame,
        Mesh
      } = require('axis3d')
const { BoxGeometry } = require('axis3d-geometry')

const box = new Mesh(ctx, {geometry: new BoxGeometry()})

frame(({time}) => {
  camera({position: [0, 0, 10]}, () => {
    material({}, () => {
      box({wireframe: true})
    })
  })
})
```

## API

### BoxGeometry
#### Parameters:
`segments` - segments, defaults to 1<br>
`x` - height, defaults to 1<br>
`y` - width, defaults to 1<br>
`z` - depth, defaults to 1<br>
#### Returns:
```
{
  cells: Array
  complex: Object
  normals: Array
  positions: Array
  segments: Object
  size: Object
  uvs: Array
}
```
### TriangleGeometry
#### Returns:
```
{
  complex: Object
  normals: Array
  positions: Array
  uvs: Array
}
```
### CylinderGeometry
#### Parameters:
`height` - height, defaults to 5<br>
`radiusTop` - radiusTop, defaults to 1<br>
`radiusBottom` - radiusBottom, defaults to 1<br>
`radialSegments` - radialSegments, defaults to 50<br>
`heightSegments` - heightSegments, defaults to 50<br>
#### Returns:
```
{
  cells: Array
  complex: Object
  normals: Array
  positions: Array
  segments: Object
  size: Object
  height: Number
  heightSegments: Number
  normals: Array
  positions: Array
  radialSegments: Number
  radiusBottom: Number
  radiusTop: Number
  uvs: Array
}
```
### SphereGeometry
#### Parameters:
`segments` - segments, defaults to 32<br>
`radius` - radius, defaults to 1<br>
#### Returns:
```
{
  cells: Array
  complex: Object
  normals: Array
  positions: Array
  radius: Number
  segments: Number
  uvs: Array
}
```
### PlaneGeometry
#### Parameters:
`segments` - segments, defaults to {x: 5, y: 5}<br>
`size` - size, defaults to {x: 1, y: 1}<br>
`quads` - quads, defaults to false<br>
#### Returns:
```
{
  cells: Array
  complex: Object
  normals: Array
  positions: Array
  size: Number
  quads: Boolean
  segments: Number
  uvs: Array
}
```
### TorusGeometry
#### Parameters:
`majorSegments` - majorSegements, defaults to 32<br>
`minorSegments` - minorSegments, defaults to 64<br>
`majorRadius` - majorRadius, defaults to 1<br>
`minorRadius` - minorRadius, defaults to 0.5<br>
`arc` - arc, defaults to 2*Math.PI<br>
#### Returns:
```
{
  cells: Array
  complex: Object
  normals: Array
  positions: Array
  majorSegments: Number
  minorSegments: Number
  majorRadius: Number
  minorRadius: Number
  arc: Number
  uvs: Array
}
```
### CapsuleGeometry
#### Parameters:
`radius` - radius, defaults to 1<br>
`height` - height, defaults to 0.5<br>
`segments` - segments, defaults to 12<br>
#### Returns:
```
{
  cells: Array
  complex: Object
  normals: Array
  positions: Array
  radius: Number
  height: Number
  segments: Number
  resolution: Number
  uvs: Array
}
```