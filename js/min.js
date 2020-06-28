//////////////////// START ASSIGNMENT //////////////
/////////// EXERCISE 1 ///////////

function showNumber() {
    var enterNumber = document.getElementById("enterNumber").value
    document.getElementById("theResult").innerHTML = enterNumber
}

//// EXERCISE 2 /////

function pressExercise2() {
    var enterExersice2 = document.getElementById("enterExersice2").value
    if (enterExersice2 % 3 == 0 && enterExersice2 % 4 == 0) {
        document.getElementById("theResultExercise2").innerHTML = "YES"
    } else {
        document.getElementById("theResultExercise2").innerHTML = "NO"
    }
}

//////////// EXERCISE 3 ///////////

function pressThree() {
    var enter1Three = document.getElementById("enter1Three").value;
    var enter2Three = document.getElementById("enter2Three").value;

    if (enter1Three > enter2Three) {
        document.getElementById("resultThree").innerHTML = enter1Three;
    }
    else {
        document.getElementById("resultThree").innerHTML = enter2Three;
    }

}

//////////// EXERCISE 4 ///////////

function pressExercise4() {
    var enterExercise4 = document.getElementById("enterExercise4").value
    if (enterExercise4 >= 0) {
        document.getElementById("theResultExercise4").innerHTML = "Positive";
    } else {
        document.getElementById("theResultExercise4").innerHTML = "Negative";

    }
}

//////////// EXERCISE 5 ///////////

function pressExercise5() {
    var enter1Exersice5 = document.getElementById("enter1Exersice5").value;
    var enter2Exersice5 = document.getElementById("enter2Exersice5").value;
    var enter3Exersice5 = document.getElementById("enter3Exersice5").value;

    var maxExercise5 = Math.max(enter1Exersice5, enter2Exersice5, enter3Exersice5);
    var minExercise5 = Math.min(enter1Exersice5, enter2Exersice5, enter3Exersice5);

    document.getElementById("maxExercise5").innerHTML = maxExercise5;
    document.getElementById("minExercise5").innerHTML = minExercise5;

}

//////////// EXERCISE 6 ///////////

function pressExercise6() {
    var enterExersice6 = document.getElementById("enterExersice6").value;

    if (enterExersice6 % 2 == 0) {
        document.getElementById("theResultExercise6").innerHTML = "Even";
    } else {
        document.getElementById("theResultExercise6").innerHTML = "Odd";

    }
}

//////////// EXERCISE 7 ///////////

function pressExercise7() {
    var enterExercise7 = document.getElementById("enterExercise7").value;

    if (enterExercise7 == 'a' || enterExercise7 == 'A' || enterExercise7 == 'e' || enterExercise7 == 'E' || enterExercise7 == 'o' || enterExercise7 == 'O' || enterExercise7 == 'u' || enterExercise7 == 'U' || enterExercise7 == 'i' || enterExercise7 == 'I') {
        document.getElementById("theResultExercise7").innerHTML = "vowel";
    } else {
        document.getElementById("theResultExercise7").innerHTML = "consonant";

    }
}

//////////// EXERCISE 8 ///////////

function pressEight() {
    var enterEight = document.getElementById("enterEight").value;

    for (var i = 1; i <= enterEight; i++) {
        document.getElementById("resultEight").innerHTML += i;
    }
}

//////////// EXERCISE 9 ///////////

function pressNine() {
    var enterNine = document.getElementById("enterNine").value

    for (var i = 1; i <= 12; i++) {
        document.getElementById("resultNine").innerHTML += i * enterNine;
    }
}

//////////// EXERCISE 10 ///////////

function pressTen() {
    var enterTen = document.getElementById("enterTen").value;

    for (var i = 1; i <= enterTen; i++) {
        if (i % 2 == 0) {
            document.getElementById("resultTen").innerHTML += i;
        }
    }
}

//////////// EXERCISE 11 ///////////

var btn_press = document.getElementById('pressEleven');

btn_press.onclick = function () {
    var inputBaseValue = document.getElementById('enter1Eleven').value;
    var inputPowerValue = document.getElementById('enter2Eleven').value;
    var result = document.getElementById('resultEleven');
    var resultNumber = Math.pow(inputBaseValue, inputPowerValue);
    result.innerHTML = resultNumber;
}
resetPow.onclick = function () {
    document.getElementById('enter1Eleven').value = '';
    document.getElementById('enter2Eleven').value = '';
    document.getElementById('resultEleven').innerHTML = '';

}
//////////// EXERCISE 12 ///////////



var nouby = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 65]
console.log(nouby);
console.log(nouby.reverse());
var collectNumber = 0;

for (var i = 0; i < nouby.length; i++) {
    collectNumber = collectNumber + nouby[i];
    var avradge = collectNumber / nouby.length
    console.log(collectNumber);
}



//////////// EXERCISE 13 ///////////


//////////// EXERCISE 14 ///////////


//////////// EXERCISE 15 ///////////


//////////// EXERCISE 16 ///////////


//////////// EXERCISE 17 ///////////


//////////// EXERCISE 18 ///////////


//////////// EXERCISE 19 ///////////


//////////// EXERCISE 20 ///////////






//////////////////// END OF ASSIGNMENT //////////////.

function reset() {
    document.getElementById('enterTen').value = '';
}