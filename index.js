// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function Person(name) {
//   this.name = name;
// }

// Person.prototype = {
//   constructor: Person,
//   getName: function () {
//     console.log(this.name);
//   },
// };

// var person1 = new Person('zhansgan');
// console.log(person1.getName());
function objectFactory() {
  const Constructor = [].shift.call(arguments);
  // arguments的值就是传进来的参数除去构造函数
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, arguments);
  //执行一遍构造函数,同时将this指向创建的新实例对象
  if (typeof result === 'object' && result !== null) {
    return result;
  } else {
    return obj;
  }
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  return null;
}

Person.prototype.sayHi = function () {
  console.log(`hi,my name is ${this.name},${this.age} years old.`);
};

const person1 = objectFactory(Person, '法外狂徒张三', '23');
console.log(person1.name, person1.age);
person1.sayHi();
