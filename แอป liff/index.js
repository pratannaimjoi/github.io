function helloWorld() {
  console.log('Hello World!');
}

module.exports = {
  helloWorld: helloWorld
}
const myPackage = require('@codertocat/hello-world-npm');
myPackage.helloWorld();
