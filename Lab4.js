//Question 1 

let number = 15;

function oddEven () {
    if ( number % 2 == 0) {
        console.log(number + " is a Even number") 
    } else {
        console.log(number + " is a Odd number") 
    }
}

oddEven ();

//Question 2 

let num1 = 20;
let num2 = 5;
let num3 = 17;

function largestNum () {
    let finalNum = 0;

    if(num1 > num2) {
        finalNum = num1;
    } else {
        finalNum = num2;
    }

    if (num3 > finalNum) {
        finalNum = num3;
    }

    console.log("The largest number is " + finalNum);

}


largestNum ()

//Question 3

//inspired by programiz fibonacci sequence
function fibNo (number) {
    let n1 = 0;
    let n2 = 1;

    for (let i = 1; i <= number; i++) {
        console.log(n1);

        let nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
}

fibNo (4);

//Question 4

function replaceOcc (strInput, char, newChar) {
    let finalStr = "";

    for (let i = 0; i < strInput.length; i++) {
        if (strInput [i] === char) {
            finalStr += newChar;
        } else {
            finalStr += strInput[i]; 
        }
    }

    console.log("Output: " + finalStr);
}

replaceOcc ("Good Bye", "o", "s")