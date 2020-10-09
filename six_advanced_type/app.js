var _a;
var e1 = {
    name: "Kus",
    privileges: ["creating-server"],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        // typeguard
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("Sir", "Kus");
result.split(" ");
var fetchedUserData = {
    id: "u1",
    name: "Kus",
    job: { title: "CEO", description: "Green Space" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = '';
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
// type UnknownEmployee = Admin | Employee;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name : " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges : " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date : " + emp.startDate);
//   }
// }
// printEmployeeInformation(e1);
// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//   type: "bird";
//   fliyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed: number;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.fliyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//     default:
//       speed = 0;
//       break;
//   }
//   console.log("Moving at speed " + speed);
// }
// moveAnimal({ type: "bird", fliyingSpeed: 100 });
// // const userInput = <HTMLInputElement>document.getElementById('input-value')!;
// // const userInput = document.getElementById("input-value")! as HTMLInputElement;
// const userInput = document.getElementById("input-value");
// if (userInput) {
//   (userInput as HTMLInputElement).value = "Hi there!";
// }
// interface ErrorContainer {
//   [prop: string]: string;
// }
// const errorBas: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a special character!",
// };
