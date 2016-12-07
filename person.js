// person.ts
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
// see below for example enum where values must be E/W/N/S and not integers - https://blog.rsuter.com/how-to-implement-an-enum-with-string-values-in-typescript/
var Direction;
(function (Direction) {
    Direction[Direction["East"] = "E"] = "East";
    Direction[Direction["West"] = "W"] = "West";
    Direction[Direction["North"] = "N"] = "North";
    Direction[Direction["South"] = "S"] = "South";
})(Direction || (Direction = {}));
var Person = (function () {
    function Person(// to make a new instance 
        firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        console.log("Created person " + firstName);
    }
    Person.prototype.move = function (direction, feet) {
        if (feet === void 0) { feet = 15; }
        // alert(this.firstName + " moved " + feet + " feet " + direction + ".");  // do this first, then remove later and replace with below
        console.log(this.firstName + " moved " + feet + " feet " + direction + ".");
    };
    return Person;
}());
var Jane = new Person("Jane", "Doe", 34, Gender.Female); // create a new person
Jane.move(Direction.East, 20); // move the person 20 feet East
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, gender, jobTitle) {
        _super.call(this, firstName, lastName, age, gender); // execute the parent classes constructor
        this.jobTitle = jobTitle;
        console.log("Created employee " + firstName + " in job " + jobTitle);
    }
    return Employee;
}(Person));
var Mary = new Employee("Mary", "Smith", 33, Gender.Female, "Manager");
Mary.move(Direction.South, 33); // move the employee 33 feet South
//# sourceMappingURL=person.js.map