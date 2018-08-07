import * as React from 'react'
import { IPolygonData } from 'src/App'
import { Polygon } from 'src/lib'

interface IPolygonComponentProps extends IPolygonData {
  checkForCollisions: () => void
}

export class PolygonComponent extends React.Component<IPolygonComponentProps> {
  private polygonRef = React.createRef<SVGPolygonElement>()
  private dx = 0
  private dy = 0

  public componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp)
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp)
  }

  public render(): React.ReactNode {
    const {color, polygon} = this.props
    this.setTranslationAttr()

    return <polygon
      fill={color}
      onMouseDown={this.onMouseDown}
      points={this.getPoints(polygon)}
      ref={this.polygonRef}
    />
  }

  public changeColor = (color: string): void => {
    if (this.polygonRef.current) {
      this.polygonRef.current.setAttribute('fill', color)
    }
  }

  private getPoints = (polygon: Polygon): string =>
    polygon.vertices.reduce((acc, vertex) => acc + ` ${vertex.x},${vertex.y}`, '')

  private setTranslationAttr = () => {
    if (this.polygonRef.current) {
      this.polygonRef.current.setAttribute('transform', `translate(${this.dx}, ${this.dy})`)
    }
  }

  private onMouseDown = () => {
    document.addEventListener('mousemove', this.onMouseMove)
  }

  private onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove)
  }

  private onMouseMove = (event: MouseEvent) => {
    this.dx += event.movementX
    this.dy += event.movementY
    this.props.polygon.translate(event.movementX, event.movementY)
    this.setTranslationAttr()
    this.props.checkForCollisions()
  }


}
