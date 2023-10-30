// Uses constructor to define shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Defines triangles, inherits from Shape
class Triangle extends Shape {
  render() {
    return `<polygon points="100, 15 200, 200 0, 200" fill="${this.color}"/>`;
  }
}

// Defines squares, inherits from Shape
class Square extends Shape {
  render() {
    return `<rect x="-100" width="300" height="200" fill="${this.color}"/>`;
  }
}

// Defines circles, inherits from Shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`;
  }
}

// Exports classes
module.exports = { Triangle, Square, Circle };
