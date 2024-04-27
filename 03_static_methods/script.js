class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }

  static getClass() {
    return "Rectangle";
  }
}

const rect = new Rectangle("Rect", 10, 10);

console.log(rect.area());
//console.log(rect.getClass()); // will give error because it is static
console.log(Rectangle.getClass()); // now it will print 'Rectangle'
