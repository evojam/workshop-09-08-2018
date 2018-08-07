import { projection } from './projection'
import { Vector } from '../vector'
import { Polygon } from '../polygon'

describe('projection: returns range of the projection of a polygon on a given axis', () => {
  const polygon = new Polygon([
    new Vector(1, 3),
    new Vector(3, 5),
    new Vector(5, 3),
    new Vector(4, 1),
    new Vector(2, 1)
  ])

  it('axis is perpendicular to x axis', () => {
    const axis = new Vector(1, 0)
    const [min, max] = projection(polygon, axis)
    expect(min).toBeCloseTo(1, 3)
    expect(max).toBeCloseTo(5, 3)
  })

  it('axis is perpendicular to y axis', () => {
    const axis = new Vector(0, 1)
    const [min, max] = projection(polygon, axis)
    expect(min).toBeCloseTo(1, 3)
    expect(max).toBeCloseTo(5, 3)
  })

  it('axis is not perpendicular to coordinate system axis', () => {
    const axis = new Vector(1, 1).normalize()
    const [min, max] = projection(polygon, axis)
    expect(min).toBeCloseTo(2.121, 2)
    expect(max).toBeCloseTo(5.656, 2)
  })
})
