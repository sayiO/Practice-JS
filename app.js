let arr = ["alpha", "gamma", "delta", "simbie", "tanaka", "rachie"];
arr2 = arr.slice();

function myFunction() {
    document.getElementById("demo").innerHTML = arr2;

}

function myFunction1() {
    document.getElementById("demo").innerHTML = arr.slice(2, 5);

}