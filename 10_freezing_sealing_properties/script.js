// Sealing - Prevents properties from being added or removed. Can still be changed

// Freezing - Prevents properties from beign added, removed or changed

// difference seems like the difference between snare and stun

const rectObj = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
};

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors); // by default they are all gonna be true

Object.seal(rectObj);
descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors); // configurables are false now

rectObj.color = "red";
console.log(rectObj);

const circleObj = {
  name: "Circle 1",
  radius: 30,
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);
console.log("rectObj is sealed ?", Object.isSealed(rectObj));
console.log("rectObj is frozen ?", Object.isFrozen(rectObj));
console.log("circleObj is sealed ?", Object.isSealed(circleObj));
console.log("circleObj is frozen ?", Object.isFrozen(circleObj));
