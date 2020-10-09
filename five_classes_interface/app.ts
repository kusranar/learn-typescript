// class can implement some interface, but only 1 can inherit
// different interface and abstract is abtract can be more implementation, and who implements interface must override property and method
// interface can inherite multiple interface

// type AddFn = (n1: number, n2: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // can be implement, also can use at method, put ? like this
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable; // use interface as type
user1 = new Person();
user1.greet("Hi there - I am");
