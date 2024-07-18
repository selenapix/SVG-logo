const inquirer = require ('inquirer');
const fs = require('fs');


//Getting shapes from shapes.js file
const svgShapes = require('./lib/shapes.js');
const Square = svgShapes.Square;
const Circle = svgShapes.Circle;
const Triangle = svgShapes.Triangle;

const shapeClasses = {
  Square: Square,
  Circle: Circle,
  Triangle: Triangle
};

// Creating the questions that will be prompted in Node for user input
const questions = [
  {type: "inputnode ", name: "Text", message: "Please enter text for the logo (No more than 3 characters)", maxLength:3},
  {type: "input", name: "Textcolor", message: "What color would you like your text to be?"},
  {type:"list", name:"Shape", message: "What shape would you like your SVG logo to be?", choices:['Square', 'Circle', 'Triangle']},
  {type:"input", name:"SVGcolor", message: "What color would you like your SVG logo to be?"}
];

function generateSVGContent(Text, Textcolor, Shape, SVGcolor) {
  const ShapeClass = shapeClasses[Shape];
  if(!ShapeClass){
    console.log('Invalid shape selection!');
    return;
  }
  const shape = new ShapeClass(SVGcolor);
  return shape.render(Text, Textcolor);
}

//Creating function to create SVG logo with user input
function createSVG () {
  inquirer.prompt(questions)
  .then(answers => {
    const { Text, Textcolor, Shape, SVGcolor } = answers;
    const svgContent = generateSVGContent(Text, Textcolor, Shape, SVGcolor);

    //Display generated SVG content
    console.log('Generated SVG content:');
    console.log(svgContent);
  
    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.log(`Error creating file ${err}`);
        return;
      }
      console.log('File logo.svg created successfully!');
    });
  });
}
createSVG();



