/* Run   tsc  in a command line to compile typescript */

/* !!! !!! */

function greetings(name: string, age: number) {
    return "Hello..  there " + name;
}

var user: string = "John!";

document.getElementById('ReplaceThis').innerHTML = greetings(user, 30);  // replaces the text inside of the div  with result of the function
