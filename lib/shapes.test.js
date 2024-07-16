const svgShapes = require('./lib/shapes.js');
const Square = svgShapes.Square;
const Circle = svgShapes.Circle;
const Triangle = svgShapes.Triangle;

//Test for Red Square SVG
describe('Square', () => {
  test('Should render a square SVG logo with the given color', () => {
    const square = new Square();
    square.setColor("red");
    expect(square.render()).toEqual('<rect width="100", height= "100" fill= "red" />');
  });
});

//Test for Green Circle SVG
describe('Circle', () => {
  test('Should render a circle SVG logo with the given color', () => {
    const circle = new Circle();
    circle.setColor("green");
    expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill= "green" />');
  });
});

//Test for Blue Triangle SVG
describe('Triangle', () => {
  test('Should render a triangle SVG logo with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill= "blue" />');
  });
});