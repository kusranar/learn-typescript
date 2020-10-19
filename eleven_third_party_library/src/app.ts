import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import _ from "lodash";
import Product from "./product.model";

declare var GLOBAL: any;
const products = [
  {
    title: "A Carpet",
    price: 22.99,
  },
  {
    title: "A Book",
    price: 11.29,
  },
];
const p1 = new Product("Book", 12.99);

// const loadedProducts = products.map(prdt => {
//     return new Product(prdt.title, prdt.price);
// });
const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}

const newProduct = new Product("", -5);
validate(newProduct).then((errs) => {
  if (errs.length > 0) {
    console.log("VALIDATIONS_ERRORS");
    console.log(errs);
  } else {
    console.log(newProduct.getInformation());
  }
});

console.log(_.shuffle([1, 2, 3]));
console.log(GLOBAL);
console.log(p1.getInformation());
