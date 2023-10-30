// Importing shape classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Tests for a blue triangle
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="100, 15 200, 200 0, 200" fill="blue"/>'
    );
  });
});

// Tests for a yellow square
describe("Square test", () => {
  test("test for a square with a yellow background", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="-100" width="300" height="200" width="200" fill="yellow"/>'
    );
  });
});

// Tests for a green circle
describe("Circle test", () => {
  test("test for a circle with a green background", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="green"/>'
    );
  });
});
