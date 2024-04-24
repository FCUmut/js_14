// Classes are not part of the core JS but 'Class' syntax was added in ES6 update in 2015

// // Prototype Version
// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log("Rectangle Area: " + this.area());
// };

// const square = new Rectangle("Square", 20, 20);
// console.log(square);

class Rectangle {
  constructor(name, width, height) {
    // constructor will be put into [[Prototype]] as it would
    this.name = name;
    this.width = width;
    this.height = height;
  }

  // method of class does NOT need "function" keyword
  area() {
    // this will be also in [[Prototype]]
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log("Rectangle Area: " + this.area()); // 'this' keyword can be used for accessing properties and also can be used for accessing methods
  }
}

const square = new Rectangle("Square", 20, 20);

console.log(square);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea(); // we actually console.log inside of logArea(), so no need to call it with console.log
