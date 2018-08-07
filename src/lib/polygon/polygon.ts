import { Vector } from '../vector'

export class Polygon {
  public vertices: Vector[]
  public axes: Vector[]

  constructor(vertices: Vector[]) {
    this.vertices = vertices
    this.axes = this.getAxes(vertices)
  }

  public translate(dx: number, dy: number): void {
    for (const vertex of this.vertices) {
      vertex.x += dx
      vertex.y += dy
    }
  }

  // TODO 4: Implement
  public collides(otherPolygon: Polygon): boolean {
    return false
  }

  // TODO 1: Implement
  private getAxes(vertices: ReadonlyArray<Vector>): Vector[] {
    return [...vertices]
  }

}
