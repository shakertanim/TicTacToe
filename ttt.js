const b1= [];
const arr = [];
var count=0;

function internalCall(buttonID) {
    count++;

    b1[count-1] = document.getElementById(buttonID);


    let user1 = document.getElementById("name1").value;
    let user2 = document.getElementById("name2").value;
    let output = document.getElementById("output");
    let win = document.getElementById("win");

    var user = user1;

    output.innerHTML = `${user} turns`;
    if ( (count%2) !== 0) {
        b1[count - 1].querySelector('input').value = 'X';
        b1[count - 1].querySelector('input').disabled = true;
        user = user2;
        output.innerHTML = `${user} turns`;
        user = user1;
    }
    else {
        b1[count - 1].querySelector('input').value = 'O';
        b1[count - 1].querySelector('input').disabled = true;
        user = user1;
        output.innerHTML = `${user} turns`;
        user = user2;
    }

    let name = b1[count - 1].querySelector('input'); // Access the input element inside the HTML element

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");


    let value1 = btn1.querySelector('input').value;
    let value2 = btn2.querySelector('input').value;
    let value3 = btn3.querySelector('input').value;
    let value4 = btn4.querySelector('input').value;
    let value5 = btn5.querySelector('input').value;
    let value6 = btn6.querySelector('input').value;
    let value7 = btn7.querySelector('input').value;
    let value8 = btn8.querySelector('input').value;
    let value9 = btn9.querySelector('input').value;


    if ((value1 === value2 && value2 === value3) || (value4 === value5 && value5 === value6) || (value7 === value8 && value8 === value9)) {
         output.innerHTML = `${user} own the game.`;
         disableAll(btn1, btn2, btn3, btn4,btn5,btn6,btn7,btn8,btn9);
     }
    else if ((value1 === value4 && value4 === value7) || (value2 === value5 && value5 === value8) || (value3 === value6 && value6 === value9)) {
        output.innerHTML = `${user} own the game.`;
        disableAll(btn1, btn2, btn3, btn4,btn5,btn6,btn7,btn8,btn9);
    }
    else if ((value1===value5 && value5 === value9) || (value3===value5 && value5 === value7)) {
        output.innerHTML = `${user} own the game.`;
        disableAll(btn1, btn2, btn3, btn4,btn5,btn6,btn7,btn8,btn9);
    }
}

function disableAll(v1,v2,v3,v4,v5,v6,v7,v8,v9){
    v1.querySelector('input').disabled = true;
    v2.querySelector('input').disabled = true;
    v3.querySelector('input').disabled = true;
    v4.querySelector('input').disabled = true;
    v5.querySelector('input').disabled = true;
    v6.querySelector('input').disabled = true;
    v7.querySelector('input').disabled = true;
    v8.querySelector('input').disabled = true;
    v9.querySelector('input').disabled = true;
}