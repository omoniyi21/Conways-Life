/**
 * Implementation of Conway's game of Life
 */
const MODULO = 2;
/**
 * Make a 2D array helper function
 */
function Array2D(width, height) {
  //NOTE:  Iterate through Array2D row first then column
  let a = new Array(height);

  for (let i = 0; i < height; i++) {
    a[i] = new Array(width);
  }

  return a;
}

/**
 * Life class
 */
class Life {

  /**
   * Constructor
   */
  constructor(width, height) {
    // !!!! IMPLEMENT ME !!!!
    this.width = width;
    this.height = height;

    this.currentBufferIndex = 0; 

    this.cells = [
      Array2D(width, height),
      Array2D(width, height)
    ];

    this.randomize();
    this.clear();
  }
  
  /**
   * Return the current active buffer
   * 
   * This should NOT be modified by the caller
   */
  getCells() {
    return this.cells[this.currentBufferIndex];
    // !!!! IMPLEMENT ME !!!!
  }

  /**
   * Clear the life grid
   */
  clear() {
    // !!!! IMPLEMENT ME !!!!
  }
  
  /**
   * Randomize the life grid
   */
  randomize() {
    for(let height = 0; height < this.height; height++){
      for(let width = 0; width < this.width; width++){
        this.cells[this.currentBufferIndex][height][width] = (Math.random() * MODULO) | 0;
      }
    // !!!! IMPLEMENT ME !!!!
  }
}

  /**
   * Run the simulation for a single step
   */
  step() {
    const currentBuffer = this.getCells(); 
    const nextBuffer = this.cells[this.currentBufferIndex === 0 ? 1 : 0];
    for(let height = 0; height < this.height; height++){
      for(let width = 0; width < this.width; width++){
          const count = this.liveNeighborCount(height,width);
        //RULES HERE *hint* if else & nextBuffer rmbr 
      }

    } 


    // !!!! IMPLEMENT ME !!!!
    //this.currentBufferIndex = this.currentBufferIndex === 0 ? 1 : 0;
  }
liveNeighborCount(h,w){
  const currentBuffer = this.getCells();
  let count = 0; 

  if (currentBuffer[h - 1] && currentBuffer[h - 1][w - 1]) ++count;
  if (currentBuffer[h - 1] && currentBuffer[h - 1][w - 0]) ++count;
  if (currentBuffer[h - 1] && currentBuffer[h - 1][w + 1]) ++count;
  if (currentBuffer[h - 0] && currentBuffer[h - 0][w - 1]) ++count;
  if (currentBuffer[h - 0] && currentBuffer[h - 0][w + 1]) ++count;
  if (currentBuffer[h + 1] && currentBuffer[h + 1][w - 1]) ++count;
  if (currentBuffer[h + 1] && currentBuffer[h + 1][w - 0]) ++count;
  if (currentBuffer[h + 1] && currentBuffer[h + 1][w + 1]) ++count;

  return count;
  
}

}



export default Life;
