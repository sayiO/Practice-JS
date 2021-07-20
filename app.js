let arr = ["alpha", "gamma", "delta", "simbie", "tanaka", "rachie"];
let arr2 = arr;
//demonstrate pass by value and reference
arr2.push("Angie");
let name = "Ashleigh";
let surname = name;
surname = "Simbisanai";

let arrEx = [];
arrEx[0] = "Onias";
arrEx.push("Sayi");
arrEx.unshift("blue");
arrEx.shift();
let arrEx2 = [];
arrEx2.push(98);
arrEx2.push('\"JavaScript\"');

let person = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

function objFunction() {
    for (let i in person) {
        console.log(person[i] + " => " + i);

    }
}

function oddNums() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let values = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 > 0) {
            values.push(numbers[i]);

        }
        document.getElementById("demo").innerHTML = values;
    }

}

function myTinoe() {
    let favFoods = ["pizza", "ice-cream"];
    let value = Math.random();
    if (value >= 0.5) {
        document.getElementById("demo").innerHTML = favFoods[0];
    } else {
        document.getElementById("demo").innerHTML = favFoods[1];
    }


}

let decimals = [1.1, 56.25, 89.6, 95.63, 75.45];
let whole = [];

function decToWhole() {
    for (let i = 0; i < decimals.length; i++) {
        whole.push((Math.round(decimals[i])));
    }
    document.getElementById("demo").innerHTML = whole.join(" - ");
}



function myFunction1() {
    document.getElementById("demo").innerHTML = arr;

}

function myFunction2() {
    document.getElementById("demo").innerHTML = arr.slice(2, 5);

}

function myFunction3() {
    document.getElementById("demo").innerHTML = arr.concat("Lisah", "Mitchelle", "Tinez");

}

function myFunction4() {
    document.getElementById("demo").innerHTML = arr.join(" - ");

}

function myFunction5() {
    let gf = prompt("What\'s your girlfriend\'s name.?")
    if (arr.indexOf(gf) > -1) {
        document.getElementById("demo").innerHTML = "your girlfriend " + arr[arr.indexOf(gf)] + " exist.";


    } else {
        document.getElementById("demo").innerHTML = "your girlfriend " + gf + " is non-existant...!!!"
    }
}

function myFunction6() {
    document.getElementById("demo").innerHTML = arr;

}

function myFunction7() {

    let favNum = prompt("enter your favorite number");
    if (arrEx2.indexOf(favNum) > -1) {
        document.getElementById("demo").innerHTML = "number exists";
    } else {
        document.getElementById("demo").innerHTML = "number does not exist";
    }


}