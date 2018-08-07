import { Polygon, Vector } from './lib'
import { PolygonComponent } from './Polygon'
import * as React from 'react';
import './App.css';

export interface IPolygonData {
  color: string
  polygon: Polygon
}

const p1 = {
  color: 'green',
  polygon: new Polygon([
    new Vector(75, 50),
    new Vector(175, 50),
    new Vector(200, 75),
    new Vector(125, 200),
    new Vector(50, 75)
  ])
}

const p2 = {
  color: 'blue',
  polygon: new Polygon([
    new Vector(275, 75),
    new Vector(325, 75),
    new Vector(380, 150),
    new Vector(220, 150),
  ])
}

// @ts-ignore
const p3 = {
  color: 'black',
  polygon: new Polygon([
    new Vector(450, 50),
    new Vector(550, 50),
    new Vector(500, 150)
  ])
}

// @ts-ignore
const p4 = {
  color: 'grey',
  polygon: new Polygon([
    new Vector(650, 50),
    new Vector(750, 50),
    new Vector(750, 150),
    new Vector(650, 150)
  ])
}

class App extends React.Component {
  private p1Ref = React.createRef<PolygonComponent>()
  private p2Ref = React.createRef<PolygonComponent>()

  public componentDidMount() {
    this.checkForCollisions()
  }

  public render() {
    return (
      <div className="App">
        <svg width={'100%'} height={'100vh'}>
          <PolygonComponent
            checkForCollisions={this.checkForCollisions}
            color={p1.color}
            polygon={p1.polygon}
            ref={this.p1Ref}
          />
          <PolygonComponent
            checkForCollisions={this.checkForCollisions}
            color={p2.color}
            polygon={p2.polygon}
            ref={this.p2Ref}
          />
        </svg>
      </div>
    );
  }

  // TODO 5: Generalize to n polygons
  // TODO 6: Optimize collision detection by introducing Axis Aligned Bounding Boxes (AABB)
  private checkForCollisions = (): void => {
    if (this.p1Ref.current && this.p2Ref.current) {
      if (p1.polygon.collides(p2.polygon)) {
        this.p1Ref.current.changeColor('red')
        this.p2Ref.current.changeColor('red')
      } else {
        this.p1Ref.current.changeColor(p1.color)
        this.p2Ref.current.changeColor(p2.color)
      }
    }
  }

}

export default App;
