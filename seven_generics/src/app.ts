// const names: Array<string> = [];

// const condition = true;
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   if (condition) {
//     setTimeout(() => {
//       resolve("This is done!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("This is done!");
//     }, 2000);
//   }
// });
// promise.then((res) => console.log(res));

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// const mergeObj = merge({ name: "kus" }, { age: 24 });
// const mergeObj = merge({ name: "kus" }, { age: 24 }) as {name: string, age: number};
// console.log(mergeObj.name);

function merge<T extends object, U extends object>(objA: T, objB: U) {
  //constrains
  return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "kus" }, { age: 24 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}
console.log(countAndDescribe(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(extractAndConvert({ name: "kus" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const indexOf = this.data.indexOf(item);
    if (indexOf === -1) {
      return;
    }
    this.data.splice(indexOf, 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Sir");
textStorage.addItem("Kus");
localStorage.removeItem("Sir");
console.log(textStorage);

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Sir" });
// objStorage.addItem({ name: "Kus" });
// //...
// objStorage.removeItem({ name: "Sir" });
// console.log(objStorage.getItem());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Sir', 'Kus'];
// names.push('Riz');
// names.pop();