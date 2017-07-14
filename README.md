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
  complex: Object
    cells: Array
    normals: Array
    positions: Array
    uvs: Array
  segments: Object
    x, y, z
  size: Object
    x, y, z
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
  complex: Object
    cells: Array
    normals: Array
    positions: Array
    uvs: Array
  height: Number
  heightSegments: Number
  radialSegments: Number
  radiusBottom: Number
  radiusTop: Number
}
```
### SphereGeometry
#### Parameters:
`segments` - segments, defaults to 32<br>
`radius` - radius, defaults to 1<br>
#### Returns:
```
{
  complex: Object
    cells: Array
    normals: Array
    positions: Array
    uvs: Array
  radius: Number
  segments: Number
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
  complex: Object
    cells: Array
    normals: Array
    positions: Array
    uvs: Array
  size: Object
    x, y
  segments: Object
    x, y
  quads: Boolean
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
  complex: Object
    cells: Array
    normals: Array
    positions: Array
    uvs: Array
  majorSegments: Number
  minorSegments: Number
  majorRadius: Number
  minorRadius: Number
  arc: Number
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
  complex: Object
    cells: Array
    normals: Array
    positions: Array
    uvs: Array
  radius: Number
  height: Number
  segments: Number
  resolution: Number
}
```