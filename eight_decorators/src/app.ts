// all decorator executed when you defined the class
// instead these decorators allow you to do additional behind the scenes setup work when a class is defined

// function Logger(constructor: Function){ // basic decorator
//     console.log("loading...");
//     console.log(constructor);
// }

// @Logger

function Logger(logString: string) {
  // decorator factory
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    // decorator
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  //   make clear that this will actually be basically a constructor function
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructorOrigin: T
  ) {
    // console.log("rendering template");
    // // '_' argument i know i get this argument, but i dont need it.
    // const hookEl = document.getElementById(hookId);
    // const p = new constructorOrigin();
    // if (hookEl) {
    //   hookEl.innerHTML = template;
    //   document.querySelector("h1")!.textContent = p.name;
    // }

    // you can return and what typescript is able to use depends on which kind of decorator your working with
    // here were working with a decorator that gets added to a class and in such a decorator function you can return a new constructor function which will replace the old one
    // so here we can return a new function and you constructor function or simply return a new class in the end because a class to class keyword allows us to use this syntatic sugar to create such a constructor function
    return class extends constructorOrigin {
      constructor(..._: any[]) {
        super();
        console.log("rendering template");
        // '_' argument i know i get this argument, but i dont need it.
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          document.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Kus";

  constructor() {
    console.log("Creating a object");
  }
}

const pers = new Person();
console.log(pers);

// ----- //

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price - Should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

// In order to do more advanced things with decorators you have to know that some decorators for example

// class decorators.

// But all the method decorators for example actually are also capable of returning something.

// Now I'm not returning anything and any decorator.

// I'm not talking about the decorator function which gets returned and the decorator factory.

// I really mean a return value inside of the decorator function and we don't have any such value anywhere.

// Now in this with template function in as with template decorator function I should say we could add

// such a return value and what you can return and what typescript is able to use depends on which kind

// of decorator you're working with.

// Here we're working with a decorator that gets added to a class and in such a decorator function you

// can return a new constructor function which will replace the old one so which will replace the class

// to which you added the decorator you could say.

// So here we can return a new function and you constructor function or simply return a new class in the

// end because a class to class keyword allows us to use this syntactic sugar to create such a constructor

// function and the class I created doesn't need to have a name but we can and we should extend the constructor

// we're getting here.

// So what I'm doing here now is in my decorator function here I'm returning a new class.

// And again keep in mind that's just syntactic sugar for a constructor function.

// So I'm returning a constructor function the end which is based on the original constructor function.

// So did I keep all the properties of my original class of my original constructor function.

// We don't necessarily have to do that but I don't want to lose my properties here so I will do it.

// And then in here we can add new functionality for example and now we'll have to change some names here

// I can add a new constructor function in there until wide confusion.

// I'll rename the constructor I'm getting here so the class on which I added this decorator I'll name

// this year.

// Original constructor and copy that all over here and now instead of this constructor function here I

// have to call super to call this original a constructor function from inside of it.

// Because if you add a constructor function in a class that extends another class which is in the end

// what we're doing here then you have to call super.

// And now in here you can run any logic you want.

// And for example here we could move this template rendering logic here out of our decorator function

// into this new constructor function we're returning here.

// So again really keep in mind that we're creating a class here which the end just creates a constructor

// function with this logic in it.

// So now what I'm trying to do is I tried to replace the class the constructor function to which we added

// our decorator with a new class with a new constructor function where I still execute the old logic but

// where I also add my own new logic and therefore now the template should actually only be rendered to

// the DOM if I really instantiate my object here and not all the time when this decorator function is

// executed which as you learned happens as soon as we defined a class.

// Now a little tweak here I don't call my original constructor in here anymore.

// Instead we can just access this start name to get the name property value off the instance we are creating.

// Now we got a little complaint down there regarding the types not being correct to fix that though we

// can turn our decorator function into a generic function where we get a type and set this as the type

// of original constructor and now make clear that this will actually be basically a constructor function

// and we can make that clear by assigning a special type an object type where we set a new property.

// This is a reserved name of course but it tells typescript that in the end this will be an object which

// can be nude.

// So that will be a constructor function a function we can call with the new keyword to generate a new

// object and this new function is new method which the object T is based on will have will get any amount

// of arguments some using rest parameters here to accept as many arguments as you want so that we're really

// flexible regarding the arguments that can be passed to the constructor of the class we're trying to

// change and the new functional debt and yen return an object here.

// Now I should also just copy that definition of the rest parameter to my constructor here so that this

// constructor is also capable of accepting all the arguments we might be getting.

// So we can basically instantiate person with any arguments you want to pass and you're with any arguments

// we might also need here in the original constructor function.

// And with that the only problem will face is that we don't know that such a name property exists.

// And correct.

// So we don't know to which class will add this with template decorator.

// So we don't know if there will be a named property on the class we added to.

// But we can fix this by simply telling typescript that the object T is based on.

// So our original constructor function will not just produce any object but actually will produce an object

// with a name property which will be of type String.

// And that is correct.

// Our with template decorator is added to a class which will have a name property.

// If a would comment is out we would get an error because now we would try to add this decorator to a

// class which does not fulfill this criterion.

// But here this does fulfill it.

// Now I get an error here when I tried to compile this because I'm not using args here.

// We can change this to an underscore to tell typescript that we know we don't use it and that we want

// to ignore this.

// This is a valid parameter name.

// It's just a special name which typescript takes as a I get it.

// I need to accept it but I won't use it parameter and with that that all compiles and if we reload UC

// we still see Max on the page here.

// The interesting thing justice if we now remove that code very instantiate person.

// If I comment this out so did I just to find a person class but I never instantiated anywhere you see

// as it reloads.

// We don't see Max on the screen all the decorators still execute but we don't render anything to the

// screen anymore.

// And the reason for that is that we now enhanced our decorator here even more by taking advantage of

// its feature where we can return a new value.

// Or in this case a new constructor function.

// In the case of the class decorator This is a new constructor function or a new class which as I explained

// is just syntactic sugar for the constructor function.

// And this constructor function therefore replaces our original class our original constructor function

// now since I call super in here.

// We save dual original function we save the original class so everything we initialize here basically

// still happens because I do that in my replacing constructor as well and I extend the original class

// so we save everything that was in your original class.

// You don't have to do that but I am doing it here because I don't want to lose that original data but

// behind the scenes I replaced a class with my new custom class here and that allows us to add extra logic

// that should run when the class is instantiated.

// And now all of a sudden we are able to add logic that does not run when the class is defined.

// But when the class is instantiated at this day offer should be a great first example of the full power

// you can unleash.

// With decorators if you really understand what you can do with them and you can not just to find them

// as functions and you can not just to find them with factory functions in some decorator select the class

// decorator you can always return something to replace the thing you add at the decorator to.

// In our case to class with a new class that can implement the old class but also add its new custom logic

// and with that if we comment this back in we again render Max to the screen with our own clause that

// places or that extends and replaces the old class.

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod;
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const button = document.querySelector("button")!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);

// ----- //

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['require', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...registeredValidators[target.constructor.name][propName]],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...registeredValidators[target.constructor.name][propName]],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createCourse = new Course(title, price);

  if (!validate(createCourse)) {
    alert("Invalid input, please try again!");
  }
  console.log(createCourse);
});
