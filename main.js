var data = 0;


function myFunction(id) {
    if (document.getElementById(id).innerText === "X" || document.getElementById(id).innerText === "O") {
        alert("please! Select other box");
        return;
    }
    data++;
    if (data % 2 == 1) {
        document.getElementById(id).innerText = "X";
        document.getElementById(id).style.color = "red";
        document.getElementById("turn").innerText = "O TURN";
        document.getElementById("turn").style.color = "green";

    } else {
        document.getElementById(id).innerText = "O";
        document.getElementById(id).style.color = "green";
        document.getElementById("turn").innerText = "X TURN";
        document.getElementById("turn").style.color = "red";

    }
    winner();
}

function winner() {

    var one = document.getElementById("one").innerText;
    var two = document.getElementById("two").innerText;
    var three = document.getElementById("three").innerText;
    var four = document.getElementById("four").innerText;
    var five = document.getElementById("five").innerText;
    var six = document.getElementById("six").innerText;
    var seven = document.getElementById("seven").innerText;
    var eight = document.getElementById("eight").innerText;
    var nine = document.getElementById("nine").innerText;
    if (one == two && one == three) {
        document.getElementById("win").innerText = one + "  WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";

        var res = document.querySelectorAll("#one,#two,#three");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }

    } else if (one == four && one == seven) {
        document.getElementById("win").innerText = one + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#one,#four,#seven");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }
    } else if (one == five && one == nine) {
        document.getElementById("win").innerText = one + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#one,#five,#nine");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }

    } else if (four == five && four == six) {
        document.getElementById("win").innerText = four + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#five,#four,#six");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }
    } else if (seven == eight && seven == nine) {
        document.getElementById("win").innerText = seven + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#eight,#nine,#seven");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }
    } else if (three == five && three == seven) {
        document.getElementById("win").innerText = three + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#three,#five,#seven");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }
    } else if (two == five && two == eight) {
        document.getElementById("win").innerText = two + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#two,#five,#eight");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }
    } else if (three == six && three == nine) {
        document.getElementById("win").innerText = three + " WINS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
        var res = document.querySelectorAll("#three,#six,#nine");
        for (var i = 0; i < res.length; i++) {
            res[i].style.backgroundColor = '#343434';
        }
    } else if (one != 1 && two != 2 && three != 3 && four != 4 && five != 5 && six != 6 &&
        seven != 7 && eight != 8 && nine != 9) {
        document.getElementById("win").innerText = "MATCH DRAWS!!";
        document.getElementById("win").style.color = "red";
        document.getElementById("S_BOX").style.pointerEvents = "none";
        document.getElementById("replay").style.display = "inline";
    }

}

function replay() {
    location.reload(true);
}

function play() {
    document.getElementById("S_BOX").style.pointerEvents = "auto";
    document.getElementById("S_BOX").style.cursor = "pointer";
}