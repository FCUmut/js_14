// Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log("Shape Name: " + this.name);
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name); // when you extend class, you call properties with 'super()'

    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name); // when you extend class, you call properties with 'super()'

    this.radius = radius;
  }

  logName() {
    // you can overwrite logName();
    console.log("Circle Name: " + this.name);
  }
}

const rect = new Rectangle("Rect1", 20, 20);

console.log(rect);
rect.logName();

const circ = new Circle("Circ1", 20);

circ.logName();

console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Shape); // true
