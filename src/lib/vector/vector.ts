export class Vector {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public sub(v: Vector): Vector {
    return new Vector(this.x - v.x, this.y - v.y)
  }

  public perpendicular(): Vector {
    return new Vector(-this.y, this.x)
  }

  public dot(v: Vector): number {
    return this.x * v.x + this.y * v.y
  }

  public normalize(): Vector {
    const len = Math.sqrt(this.x ** 2 + this.y ** 2)
    return new Vector(this.x / len, this.y / len)
  }
}
