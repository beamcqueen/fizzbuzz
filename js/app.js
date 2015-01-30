for (i=1; i<101; i++){
    if (i%15===0){
        console.log ("FizzBuzz")
    }
    else if (i%3===0){
        console.log ("Fizz")
    }
    else if (i%5===0){
        console.log ("Buzz")
    }
    else {
        console.log (i)
    }
}

var value = document.createElement("p");
var node = document.createTextNode("This is where my numbers will go.");
value.appendChild(node);
document.getElementById("executor").appendChild(value);
