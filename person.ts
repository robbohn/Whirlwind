//person.ts

enum Gender { Male, Female };
// see below for example enum where values must be E/W/N/S and not integers - https://blog.rsuter.com/how-to-implement-an-enum-with-string-values-in-typescript/
enum Direction { East = <any>"E", West = <any>"W", North = <any>"N", South = <any>"S" }

class Person {   
    firstName: string;  // all public by default
    lastName: string;
    age: number;
    gender: Gender;

    constructor(  // to make a new instance 
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        console.log("Created person "+firstName)
    }

    move(direction: Direction, feet: number = 15) {   // define function/method used on a person with defaulted 15 foot distance
        // alert(this.firstName + " moved " + feet + " feet " + direction + ".");  // do this first, then remove later and replace with below
        console.log(this.firstName + " moved " + feet + " feet " + direction + ".");
    }
}

let Jane = new Person("Jane", "Doe", 34, Gender.Female);  // create a new person
Jane.move(Direction.East, 20); // move the person 20 feet East

class Employee extends Person {
    jobTitle: string;

    constructor(  
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender,
        jobTitle: string) {
        super(firstName, lastName, age, gender);  // execute the parent classes constructor
        this.jobTitle = jobTitle;
        console.log("Created employee "+firstName+" in job "+jobTitle);
    }

}

let Mary = new Employee("Mary","Smith",33,Gender.Female,"Manager");
Mary.move(Direction.South, 33); // move the employee 33 feet South
