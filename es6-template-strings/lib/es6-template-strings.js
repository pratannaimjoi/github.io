var person = { name: "Tom", age: 20 };

// Before:
var string = person.name + " is " + person.name + " years old";

// Now:
var string = `${person.name} is ${person.age} years old`;;

var string = `This is<br/>
a multi-line string<br/>
without having to use<br/>
any tricks. Pretty userful<br/>
for HTML`;
