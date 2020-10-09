// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: "Kus",
//   age: 24,
//   hobbies: ["kaya", "sumble"],
//   role: [2, "admin"],
// };

// person.role.push('abang'); // allow at tuple
// person.role[1] = 10; // doesnt allow at tuple
// person.role = [0, 'admin', 'user'] // allow at tuple

// const product: Product = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

// type Product {
//     id: string;
//     price: number;
//     tags: string[],
//     details: {
//       title: string;
//       description: string;
//     }
// }

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
}

const person = {
  // const person = {
  name: "Kus",
  age: 24,
  hobbies: ["kaya", "sumble"],
  role: [Role.READ_ONLY, "admin"],
};
