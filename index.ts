var myName: String = "Salman";
var myAge: number = 24;
var dummy = 'hello';
var any_thing: any = 'hello';

any_thing = 5; // Won't throw any error;

document.getElementById("etc").innerHTML = "My name is "+ myName;

// Interfaces in TS
interface SuperHero {
    real_name: String;
    super_name: String;
}
// Interface Implementation
var superman: SuperHero = {
    real_name: 'Clark Cant',
    super_name: "Super Man"
}
// Interface usage
document.write(superman.real_name + " is " + superman.super_name + "<br>");

// arrays in TS
var super_hero: String[] = ["Foo", "bar"];
super_hero.push("5");

// Array from interface
var new_super_hero : SuperHero[] = [];
new_super_hero.push({
    real_name: 'Bruce Wayne',
    super_name: 'Batman'
});

document.write(new_super_hero[0].real_name + " is " + new_super_hero[0].super_name + "<br>");

// Functions

var random_function = function(num1: number, num2: number): number {
    return num1 + num2;
}

var sum: number = random_function(5, 6);
document.write("Sum is "+ sum + "<br>");

// set a optional parameter.
var get_diff = function(num1: number, num2: number, num3?: number): number {
    if (typeof num3 !== 'undefined') {
        return num1-num2-num3
    }
    return num1-num2;
}

var diff: number = get_diff(10, 5, 2);
var diff2: number = get_diff(10, 5);

document.write("Diff one is get_diff(10, 5, 2) "+ diff + "<br>");
document.write("Diff two is get_diff(10, 5) "+ diff2 + "<br>");

// Using array or multiple values as parameter:
// Void identifies function returns nothing.
var sum_array = function(...num: number[]): void {
    var sum = num.reduce((a, b) => a + b, 0);
    document.write("Some of array is "+ sum + "<br>");
}

sum_array(1, 2, 3, 4, 5);

var add_one = (x) => x+1;

document.write("Sum of 3 + 1 is "+ add_one(3) + "<br>");

// Classes in TS:

class Animal {

    public fav_food: string;

    static numof_animals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numof_animals++;
    }

    print_information() {
        document.write(this.name + " is owned by " + this.owner + "<br>");
    }

    static animal_count(): number {
        return Animal.numof_animals;
    }

    private _weight: number;

    get weight(): number {
        return this._weight
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

var spot = new Animal('Dog', 'Jhon');

spot.print_information();
spot.weight = 100;

document.write("Number of Animals are "+ Animal.animal_count() + "<br>");

class Dog extends Animal {
    constructor (name: string, owner: string) {
        super(name, owner);
        Dog.animal_count++;
    }
}

var dog = new Dog('Russian Dog', 'Jane');

document.write("Number of Animals are "+ Animal.animal_count() + "<br>");

document.write("Is dog an Animal ? "+ (dog instanceof Animal) + "<br>");

dog.print_information()

// Interfaces 2

interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor (private wheels: number) {

    }
    drive () {
        document.write("Number of wheels required by Car ? "+ this.wheels + "<br>");
    }
}

class Cycle implements Vehicle {
    constructor (private wheels: number) {}
    drive() {
        document.write("Number of wheels required by Cycle ? "+ this.wheels + "<br>");
    }
}
var car1 = new Car(4);
car1.drive();
var cycle = new Cycle(2);
cycle.drive();


var randNum = {x:1, y:2, z:3};

var {x, y, z} = randNum;