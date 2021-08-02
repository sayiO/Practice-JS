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

function createCal() {
    return {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        }

    }
}
//show hoisting 

let sampleFunc = () => console.log(letVariable);

//variable hoisting

function rooney() {
    let whore = "the_bitch";
    let wife = "Cooleny";
}
console.log(wife);

//palindrome

function isPalindrome(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

}


//count multiple letters ina string
function multipleLetterCount(str) {
    let finalObj = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in finalObj)) {
            finalObj[str[i]] = 1;
        } else {
            finalObj[str[i]]++
        }
    }
    return finalObj;
}









function singleLetterCount(str, ch) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === ch.toLowerCase()) {
            count++;
        }


    }

    return count++;

}

function difference(a, b) {
    return a - b;
}


function printDay(i) {
    const obj = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
    console.log(obj[i]);


}

function lastElement(arr) {
    return arr[arr.length - 1];
}









let displayName = (function(first, last) {
    document.getElementById("demo").innerHTML = first + " " + last;
})("noe", "Sayi");


let numArr;
let sum = 0;

function average(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        sum = sum + numArr[i];


    }
    return sum / numArr.length;


}

function sayHello(name) {
    if (name === "onias") {
        return "Hello Boss";

    } else {
        console.log("Hello" + "" + name);
    }
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
//printing contents in multi-dimensional arrays

function multiDimenArrays() {
    let nestedArr = [
        [1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11]
    ];
    for (let i = 0; i < nestedArr.length; i++) {
        for (let j = 0; j < nestedArr[i].length; j++) {
            console.log(nestedArr[i][j]);
        }
    }
}
//printing even numbers in a multi-dimensioanl array



function printEvens() {
    let nestedArr1 = [
        [1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11, 12]
    ];
    let arrEmp = [];

    for (let i = 0; i < nestedArr1.length; i++) {
        for (let j = 0; j < nestedArr1[i].length; j++) {
            if (nestedArr1[i][j] % 2 == 0) {
                arrEmp.push(nestedArr1[i][j]);
            }
            document.getElementById("demo").innerHTML = arrEmp;


        }


    }
}
//sum of elements in multi-dimensional arrays.

function sumTotal() {
    let nestedArr1 = [
        [1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11, 12]
    ];
    let sum = 0;
    for (let i = 0; i < nestedArr1.length; i++) {
        for (let j = 0; j < nestedArr1[i].length; j++) {
            sum = sum + nestedArr1[i][j];
        }

    }
    console.log(sum);
}

//function to count numnber of vowels in a multi-dimensional array

function countVowels() {
    let arr = ["aeiou", ['simbiesanai']];
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let v = 0; v < vowels.length; v++) {
                if (arr[i][j] === vowels[v]) {
                    count++;
                }
            }


        }
        console.log(count);


    }
}
//demonstrating higher Order functions

function each(arrH, callBack) {
    for (let i = 0; i < arrH.length; i++) {
        callBack(arrH[i]);

    }

}

//timers

/*setTimeout(function() {
    console.log("Hello bee");
}, 1000);*/

//countdown timer
function countDown(num) {
    var timer = setInterval(function() {
        num--;
        if (num === 2) {
            clearInterval(timer);
            console.log("DONE");

        } else {
            console.log(num);
        }

    }, 500)
}