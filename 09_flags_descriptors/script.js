// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of property

Math.PI = 4;
// console.log(Math.PI); // will not change because of flags

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
// configurable:false
// enumerable:false
// value:3.141592653589793
// writable:false

const rectObj = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
};

descriptor = Object.getOwnPropertyDescriptor(rectObj, "name");

console.log(descriptor);
// configurable:true
// enumerable:true
// value:"Rectangle 1"
// writable:true

Object.defineProperty(rectObj, "name", {
  writable: false,
  configurable: false, // if you make configurable false, even if you call defineProperty again for same object, you cant configure it anymore
  enumerable: false,
});

rectObj.name = "New Name";
console.log(rectObj); // name will not change

delete rectObj.name;
console.log(rectObj); // name will not be deleted

// delete rectObj.width;
// console.log(rectObj); // width will be deleted because there is no flags for it

descriptor = Object.getOwnPropertyDescriptor(rectObj, "name");
console.log(descriptor);

for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key}: ${value}`); // name will not be console logged
}

console.log(Object.getOwnPropertyDescriptors(rectObj));
