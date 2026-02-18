// Normally this depends on how a function is called.
// But call, apply, and bind let us control this manually.

//call()

function greet (city){
    console.log(this.name + " from " + city)
}

const user = {name :'Nihal'};

greet.call(user,'Korba')

// Apply()

greet.apply(user, ["Mumbai"]);

// call → arguments separated(
// apply → arguments inside array

// bind()
// It returns a new function with permanently bound this.

const greetUser = greet.bind(user, "Chennai");

greetUser();
