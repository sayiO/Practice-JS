let arr = ["alpha", "gamma", "delta", "simbie", "tanaka", "rachie"];
let arr2 = arr;
//demonstrate pass by value and reference
arr2.push("Angie");
let name = "Ashleigh";
let surname = name;
surname = "Simbisanai";



function myFunction() {
    document.getElementById("demo").innerHTML = arr;

}

function myFunction1() {
    document.getElementById("demo").innerHTML = arr.slice(2, 5);

}

function myFunction2() {
    document.getElementById("demo").innerHTML = arr.concat("Lisah", "Mitchelle", "Tinez");

}

function myFunction3() {
    document.getElementById("demo").innerHTML = arr.join(" - ");

}

function myFunction4() {
    let gf = prompt("What\'s your girlfriend\'s name.?")
    if (arr.indexOf(gf) > -1) {
        document.getElementById("demo").innerHTML = "your girlfriend " + arr[arr.indexOf(gf)] + " exist.";


    } else {
        document.getElementById("demo").innerHTML = "your girlfriend " + gf + " is non-existant...!!!"
    }
}

function myFunction5() {
    document.getElementById("demo").innerHTML = arr2;

}