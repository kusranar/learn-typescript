// class can implement some interface, but only 1 can inherit
// different interface and abstract is abtract can be more implementation, and who implements interface must override property and method
// interface can inherite multiple interface
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    };
    return Person;
}());
var user1; // use interface as type
user1 = new Person();
user1.greet("Hi there - I am");
