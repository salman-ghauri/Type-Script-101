var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myName = "Salman";
var myAge = 24;
var dummy = 'hello';
var any_thing = 'hello';
any_thing = 5; // Won't throw any error;
document.getElementById("etc").innerHTML = "My name is " + myName;
// Interface Implementation
var superman = {
    real_name: 'Clark Cant',
    super_name: "Super Man"
};
// Interface usage
document.write(superman.real_name + " is " + superman.super_name + "<br>");
// arrays in TS
var super_hero = ["Foo", "bar"];
super_hero.push("5");
// Array from interface
var new_super_hero = [];
new_super_hero.push({
    real_name: 'Bruce Wayne',
    super_name: 'Batman'
});
document.write(new_super_hero[0].real_name + " is " + new_super_hero[0].super_name + "<br>");
// Functions
var random_function = function (num1, num2) {
    return num1 + num2;
};
var sum = random_function(5, 6);
document.write("Sum is " + sum + "<br>");
// set a optional parameter.
var get_diff = function (num1, num2, num3) {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
var diff = get_diff(10, 5, 2);
var diff2 = get_diff(10, 5);
document.write("Diff one is get_diff(10, 5, 2) " + diff + "<br>");
document.write("Diff two is get_diff(10, 5) " + diff2 + "<br>");
// Using array or multiple values as parameter:
// Void identifies function returns nothing.
var sum_array = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = num.reduce(function (a, b) { return a + b; }, 0);
    document.write("Some of array is " + sum + "<br>");
};
sum_array(1, 2, 3, 4, 5);
var add_one = function (x) { return x + 1; };
document.write("Sum of 3 + 1 is " + add_one(3) + "<br>");
// Classes in TS:
var Animal = (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numof_animals++;
    }
    Animal.prototype.print_information = function () {
        document.write(this.name + " is owned by " + this.owner + "<br>");
    };
    Animal.animal_count = function () {
        return Animal.numof_animals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
Animal.numof_animals = 0;
var spot = new Animal('Dog', 'Jhon');
spot.print_information();
spot.weight = 100;
document.write("Number of Animals are " + Animal.animal_count() + "<br>");
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.animal_count++;
        return _this;
    }
    return Dog;
}(Animal));
var dog = new Dog('Russian Dog', 'Jane');
document.write("Number of Animals are " + Animal.animal_count() + "<br>");
document.write("Is dog an Animal ? " + (dog instanceof Animal) + "<br>");
dog.print_information();
var Car = (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("Number of wheels required by Car ? " + this.wheels + "<br>");
    };
    return Car;
}());
var Cycle = (function () {
    function Cycle(wheels) {
        this.wheels = wheels;
    }
    Cycle.prototype.drive = function () {
        document.write("Number of wheels required by Cycle ? " + this.wheels + "<br>");
    };
    return Cycle;
}());
var car1 = new Car(4);
car1.drive();
var cycle = new Cycle(2);
cycle.drive();
var randNum = { x: 1, y: 2, z: 3 };
var x = randNum.x, y = randNum.y, z = randNum.z;
