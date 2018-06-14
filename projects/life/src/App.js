import React, { Component } from 'react';
import Life from './life';
import './App.css';

const lifeWidth = 300;
const lifeHeight = 300;

const COLORS = [
  [0, 0, 0],
  [0xff, 0xff, 0xff],
  [0x5f, 0, 0x8f],
  [0, 0, 0xff],
  [0, 0x5f, 0x7f],
  [0x5f, 0x8f, 0x7f],
  [0x8f, 0xff, 0x7f],
  [0xff, 0x5f, 0x7f],
]


/**
 * Life canvas
 */
class LifeCanvas extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    
   

    this.life = new Life(lifeWidth, lifeHeight);
    this.life.randomize();
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    requestAnimationFrame(() => {this.animFrame()});
  }

  /**
   * Handle an animation frame
   */
  animFrame() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');

    let imageData = ctx.getImageData(0,0, lifeWidth, lifeHeight);
    let cells = this.life.getCells();


    let regularArray = imageData.data;

    for( let height = 0; height < lifeHeight; height++){
      for(let width = 0; width < lifeWidth; width++){
        let index = (height* lifeWidth + width )* 4;

        let ccaStatus = cells[height][width];

        regularArray[index + 0] = COLORS[ccaStatus][0];
        regularArray[index + 1] = COLORS[ccaStatus][1];
        regularArray[index + 2] = COLORS[ccaStatus][2];
        regularArray[index + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    //
    // !!!! IMPLEMENT ME !!!!
    //

    // Request another animation frame
    // Update life and get cells
    // Get canvas framebuffer, a packed RGBA array
    // Convert the cell values into white or black for the canvas
    // Put the new image data back on the canvas
    // Next generation of life
  }

  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={lifeWidth} height={lifeHeight} />
  }
}

/**
 * Life holder component
 */
class LifeApp extends Component {

  /**
   * Render
   */
  render() {
    return (
      <div>
        <LifeCanvas width={400} height={300} />
      </div>
    )
  }
}

/**
 * Outer App component
 */
class App extends Component {

  /**
   * Render
   */
  render() {
    return (
      <div className="App">
        <LifeApp />
      </div>
    );
  }
}

export default App;
