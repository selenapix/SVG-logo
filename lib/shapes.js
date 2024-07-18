class Shape {
  constructor(color) {
    this.color = color;
  }
}
// Creating Square SVG
class Square extends Shape {
  constructor(color) {
  //using super to take from Parent
    super (color);
  }
  render(text, textColor){
    return `
  <svg width= "150" height= "150" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" x="0" y="0" fill="${this.color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
   </svg>`;
  }
}

//Creating circle SVG
class Circle extends Shape {
  constructor(color) {

    super(color);
  }
  render(text, textColor) {
    return `
    <svg width= "300" height= "300" xmlns="http://www.w3.org/2000/svg">
      <circle cx= "150" cy= "150" r= "80" fill="${this.color}" />
      <text x="150" y="150" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
    </svg>`;
  }
}

//Creating Triangle SVG
class Triangle extends Shape {
  constructor(color) {

    super(color);
  }
  render(text, textColor) {
    return `
    <svg width= "300" height= "300" xmlns="http://www.w3.org/2000/svg">
      <polygon points= "150, 18 244, 182 56, 182" fill = "${this.color}" />
      <text x="150" y="125" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
    </svg>`;
  }
}

//Exporting classes from a module so I can share these classes in other parts of the application
module.exports = { Square, Circle, Triangle}

