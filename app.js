let move = 0; // starting piece defaults to "X"
let moveTracker = []; // used to see what piece X or O is next
let board = [,,,,,,,,,]; // used to check 3 in a row
let xWin = 0;
let oWin = 0;
let tie = 0;
let versusComputer = false;
let firstMove = []; // used to track what move the player went first

// adds event listener to the radio button
const radioX = document.querySelector("#radioX");
const radioO = document.querySelector("#radioO");
const radioPlayer = document.querySelector("#pvp");
const radioComputer = document.querySelector("#computer");

const btn0 = document.querySelector("#square0");
const btn1 = document.querySelector("#square1");
const btn2 = document.querySelector("#square2");
const btn3 = document.querySelector("#square3");
const btn4 = document.querySelector("#square4");
const btn5 = document.querySelector("#square5");
const btn6 = document.querySelector("#square6");
const btn7 = document.querySelector("#square7");
const btn8 = document.querySelector("#square8");
const btnArray = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];

const endStatus = document.querySelector('#endStatus');
const playerOrComputer = document.querySelector('#playerOrComputer')

const XorO = function(moveTracker) {
    if (moveTracker.length == 0) {
        if (document.getElementById("radioX").checked) {
            moveTracker.push("X");
            radioX.disabled = true;
            radioO.disabled = true;
            radioPlayer.disabled = true;
            radioComputer.disabled = true;
            // console.log('XorO ran, if if returned')
            return "X";
        } else {
            moveTracker.push("O");
            radioX.disabled = true;
            radioO.disabled = true;
            radioPlayer.disabled = true;
            radioComputer.disabled = true;
            // console.log('XorO ran, if else returned')
            return "O";
        }
    } else {
        if (moveTracker[moveTracker.length - 1] === "X") {
            moveTracker.push("O");
            // console.log('XorO ran, else if returned')
            return "O";
        } else {
            moveTracker.push("X");
            // console.log('XorO ran, else else returned')
            return "X";
        }
    }
}

const checkWin = function(board) { // checks if the board has 3 in a row
    let isFull = true;
    let won = false;
    for (let i = 0; i <= 8; i++) { // check if board has an empty space
        if (board[i] === undefined) {
            isFull = false;
            break;
        }
    }
    if (board[0] === board[1] && board[1] === board[2] && board[0] != undefined) {
        btn0.style.color = 'red';
        btn1.style.color = 'red';
        btn2.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[0]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[0]);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] != undefined) {
        btn0.style.color = 'red';
        btn3.style.color = 'red';
        btn6.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[0]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[0]);
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] != undefined) {
        btn0.style.color = 'red';
        btn4.style.color = 'red';
        btn8.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[0]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[0]);
    }
    if (board[3] === board[4] && board[4] === board[5] && board[3] != undefined) {
        btn3.style.color = 'red';
        btn4.style.color = 'red';
        btn5.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[3]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[3]);
    }
    if (board[6] === board[7] && board[7] === board[8] && board[6] != undefined) {
        btn6.style.color = 'red';
        btn7.style.color = 'red';
        btn8.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[6]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[6]);
    }
    if (board[1] === board[4] && board[4] === board[7] && board[1] != undefined) {
        btn1.style.color = 'red';
        btn4.style.color = 'red';
        btn7.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[1]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[1]);
    }
    if (board[2] === board[5] && board[5] === board[8] && board[2] != undefined) {
        btn2.style.color = 'red';
        btn5.style.color = 'red';
        btn8.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[2]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[2]);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] != undefined) {
        btn0.style.color = 'red';
        btn3.style.color = 'red';
        btn6.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[0]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[0]);
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] != undefined) {
        btn2.style.color = 'red';
        btn4.style.color = 'red';
        btn6.style.color = 'red';
        endStatus.innerHTML=(`PLAYER ${board[2]} WON!`)
        won = true;
        stopEventList();
        updateScore(board[2]);
    }
    if (isFull === true && won === false) {
        endStatus.innerHTML=("IT'S A TIE!")
        tie += 1;
        updateScore();
    }
}

const playerMove = function() {
    if (versusComputer == false) {
        let currentXorO = XorO(moveTracker)
        this.innerHTML= currentXorO; // plots down "X" or "O" on the board
        index = this.id[6]; // uses the id to find the index
        board[index] = currentXorO; // updates the board array
        move += 1;
        checkWin(board);
        this.classList.remove("hover")
        firstMove.push(index);
    } else {
        let currentXorO = XorO(moveTracker)
        this.innerHTML= currentXorO; // plots down "X" or "O" on the board
        index = this.id[6]; // uses the id to find the index
        board[index] = currentXorO; // updates the board array
        move += 1;
        checkWin(board);
        this.classList.remove("hover")
        firstMove.push(index);
        computerMove();
    }
}

// add event listener
const playerAction = function(btn, index) {
    btn.addEventListener('click', playerMove
    , {once: true});
}

const stopEventList = function() {
    for (let i = 0; i <= 8; i++) {
        btnArray[i].removeEventListener("click", playerMove);
        btnArray[i].classList.remove("hover");
    }
}

for (let i = 0; i <= 8; i++) {
    playerAction(btnArray[i], i);
}

const boardReset = function() {
    move = 0;
    board = [,,,,,,,,,];
    moveTracker = [];
    firstMove = [];

    radioX.disabled = false;
    radioO.disabled = false;
    radioPlayer.disabled = false;
    radioComputer.disabled = false;

    endStatus.innerHTML = ('');

    // checks if eventListener was executed and adds eventListener back if eventListener was executed
    for (i = 0; i <= 8; i++) {
        if (btnArray[i].classList.contains('hover') === false) {
            playerAction(btnArray[i], i);
        }
    }

    // resets board to empty, makes all pieces black, and adds hover
    for (let i = 0; i <= 8; i++) {
        btnArray[i].innerHTML = "";
        btnArray[i].style.color = "black";
        btnArray[i].classList.add("hover");
    }
}

// add eventListener to the reset button
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', boardReset)

const xScore = document.querySelector("#xScore");
const oScore = document.querySelector("#oScore");
const tieScore = document.querySelector("#tie");

const whoScore = function (board) {
    if (board == 'X') {
        xWin += 1;
    } else {
        oWin += 1;
    }
}

const updateScore = function(board) {
    if (board != undefined) {
        whoScore(board);
    }
    xScore.innerHTML = `${xWin}`;
    oScore.innerHTML = `${oWin}`;
    tieScore.innerHTML = `TIE = ${tie}`;
    scoreChange();
}

const scoreReset = document.querySelector("#scoreReset");
scoreReset.addEventListener('click', function() {
    xWin = 0;
    oWin = 0;
    tie = 0;
    firstMove = [];
    updateScore();
    xScore.classList.remove('winning', 'losing');
    oScore.classList.remove('winning', 'losing');
})

// changes color of score if winning or losing
const scoreChange = function() {
    if (xWin > oWin) {
        xScore.classList.add('winning');
        oScore.classList.add('losing');
    } else if (xWin = oWin) {
        xScore.classList.remove('winning', 'losing');
        oScore.classList.remove('winning', 'losing');
    }
}

radioComputer.addEventListener('click', () => {
    console.log('playing against CPU');
    versusComputer = true;
    playerOrComputer.innerHTML = 'Computer O';
})

radioPlayer.addEventListener('click', () => {
    console.log('player vs player');
    versusComputer = false;
    playerOrComputer.innerHTML = 'Player O';
})

const computerBtnRemove = (index) => {
    let currentXorO = XorO(moveTracker)
    btnArray[index].innerHTML= currentXorO; // plots down "X" or "O" on the board
    board[index] = currentXorO; // updates the board array
    move += 1;
    checkWin(board);
    btnArray[index].classList.remove("hover");
    btnArray[index].removeEventListener("click", playerMove);
}

const convert = (square) => {
    if (square == "topleft") {
        computerBtnRemove(0);
        console.log('convert line');
    } else if (square == "topmid") {
        computerBtnRemove(1);
        console.log('convert line');
    } else if (square == "topright") {
        computerBtnRemove(2);
        console.log('convert line');
    } else if (square == "midleft") {
        computerBtnRemove(3);
        console.log('convert line');
    } else if (square == "midmid") {
        computerBtnRemove(4);
        console.log('convert line');
    } else if (square == "midright") {
        computerBtnRemove(5);
        console.log('convert line');
    } else if (square == "botleft") {
        computerBtnRemove(6);
        console.log('convert line');
    } else if (square == "botmid") {
        computerBtnRemove(7);
        console.log('convert line');
    } else if (square == "botright") {
        computerBtnRemove(8);
        console.log('convert line');
    } else if (square == board[0]) {
        computerBtnRemove(0);
        console.log('convert line');
    } else if (square == board[1]) {
        computerBtnRemove(1);
        console.log('convert line');
    } else if (square == board[2]) {
        computerBtnRemove(2);
        console.log('convert line');
    } else if (square == board[3]) {
        computerBtnRemove(3);
        console.log('convert line');
    } else if (square == board[4]) {
        computerBtnRemove(4);
        console.log('convert line');
    } else if (square == board[5]) {
        computerBtnRemove(5);
        console.log('convert line');
    } else if (square == board[6]) {
        computerBtnRemove(6);
        console.log('convert line');
    } else if (square == board[7]) {
        computerBtnRemove(7);
        console.log('convert line');
    } else if (square == board[8]) {
        computerBtnRemove(8);
        console.log('convert line');
    }
}


// top left corner scenerios
const topLeftPlays = () => {
    if (firstMove[0] == '0') {
        if (move == 1) { // 2nd move
            if (board[0] != undefined) {
                convert("midmid");
                console.log('line')
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '1') { // player chooses topleft for 1st move and topmid for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[1] != undefined) {
                    convert("topright");
                    console.log('line')
                } else if (board[0] != undefined && board[2] != undefined) {
                    convert("topmid");
                    console.log('line')
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[1] != undefined && board[6] == undefined && board[0] == board[1]) {
                    convert("botleft"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[1] != undefined) {
                    convert("midleft");
                    console.log('line')
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[1] != undefined && board[5] == undefined) {
                    convert("midright"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[1] != undefined && board[5]) {
                    convert("botmid");
                    console.log('line')
                }
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '2') { // player chooses topleft for 1st move and topright for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[2] != undefined) {
                    convert("topmid");
                    console.log('line')
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[2] != undefined && board[7] == undefined) {
                    convert("botmid"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[2] != undefined && board[7] != undefined) {
                    convert("midleft");
                    console.log('line')
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[2] != undefined && board[7] != undefined && board[5] == undefined) {
                    convert("midright"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[2] != undefined && board[7] != undefined && board[5] != undefined) {
                    convert("botright"); // cpu wins if player doesn't move here
                    console.log('line')
                }
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '3') { // player chooses topleft for 1st move and midleft for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[3] != undefined) {
                    convert("botleft");
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[3] != undefined && board[2] == undefined) {
                    convert('topright'); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[3] != undefined && board[2] != undefined) {
                    convert('topmid');
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[3] != undefined && board[2] != undefined && board[7] == undefined) {
                    convert('botmid'); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[3] != undefined && board[2] != undefined && board[7] != undefined) {
                    convert('botright');
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '5') { // player chooses topleft for 1st move and midright for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[5] != undefined) {
                    convert("botright");
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[5] != undefined && board[2] != undefined) {
                    convert('topmid') // cpu wins if player doesn't move here
                    console.log('line')
                } else if (board[0] != undefined && board[5] != undefined && board[1] != undefined) {
                    convert('topright');
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[7] == undefined && board[5] == board[2]) {
                    convert('botmid')
                    console.log('line')
                } else if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[7] != undefined) {
                    convert('botleft')
                    console.log('line');
                } else if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[6] == undefined) {
                    convert('botleft') // cpu wins if player doesn't move here
                    console.log('line');
                } else if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[6] != undefined) {
                    convert('midleft')
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '6') { // player chooses topleft for 1st move and botleft for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[6] != undefined) {
                    convert('midleft')
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[6] != undefined && board[5] == undefined) {
                    convert('midright'); // cpu wins if player doesn't move here
                    console.log('line');
                } else if (board[0] != undefined && board[6] != undefined && board[5] != undefined) {
                    convert('topmid')
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[6] != undefined && board[5] != undefined && board[7] == undefined) {
                    convert('botmid')
                    console.log('line')
                } else if (board[0] != undefined && board[6] != undefined && board[5] != undefined && board[7] != undefined) {
                    convert('topright')
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '7') { // player chooses topleft for 1st move and botmid for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[7] != undefined) {
                    convert('midright')
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[7] != undefined && board[3] == undefined) {
                    convert('midleft') // cpu wins if player doesn't choose
                    console.log('line')
                } else if (board[0] != undefined && board[7] != undefined && board[3] != undefined) {
                    convert('botleft')
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[7] != undefined && board[5] != undefined && board[2] == undefined) {
                    convert('topright') // cpu wins if player doesn't choose
                    console.log('line')
                } else if (board[0] != undefined && board[7] != undefined && board[5] != undefined && board[2] != undefined) {
                    convert('topmid')
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == '0' && firstMove[1] == '8') { // player chooses topleft for 1st move and botright for 2nd move
            if (move == 3) { //4th move
                if (board[0] != undefined && board[8] != undefined) {
                    convert('topmid')
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (board[0] != undefined && board[8] != undefined && board[7] == undefined) {
                    convert('botmid')
                    console.log('line')
                } else if (board[0] != undefined && board[8] != undefined && board[7] != undefined) {
                    convert('botleft')
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (board[0] != undefined && board[8] != undefined && board[7] != undefined && board[2] == undefined) {
                    convert('topright')
                    console.log('line')
                } else if (board[0] != undefined && board[8] != undefined && board[7] != undefined && board[2] != undefined) {
                    convert('midright')
                    console.log('line');
                }
            }
        }
    }
}

const tRIC = (stringBoard) => { // converts to each corner moves, topleft or topright or botleft or botright
    if (firstMove[0] == 0) { // topleft first move
        if (stringBoard.length == 8) {
            let num = stringBoard[6];
            console.log(num);
            if (num == 0) {
                console.log('convert 0 to 0');
                return board[0];
            } else if (num == 1) {
                console.log('convert 1 to 1');
                return board[1];
            } else if (num == 2) {
                console.log('2 to 2');
                return board[2];
            } else if (num == 3) {
                console.log('convert 3 to 3');
                return board[3];
            } else if (num == 4) {
                console.log('convert 4 to 4');
                return board[4];
            } else if (num == 5) {
                console.log('convert 5 to 5');
                return board[5];
            } else if (num == 6) {
                console.log('convert 6 to 6');
                return board[6];
            } else if (num == 7) {
                console.log('convert 7 to 7');
                return board[7];
            } else if (num == 8) {
                console.log('convert 8 to 8');
                return board[8];
            }
        }
        else if (stringBoard.length == 1) {
            if (stringBoard == 0) {
                console.log('line');
                return "0";
            } else if (stringBoard == 1) {
                console.log('line');
                return "1";
            } else if (stringBoard == 2) {
                console.log('line');
                return "2";
            } else if (stringBoard == 3) {
                console.log('line');
                return "3";
            } else if (stringBoard == 4) {
                console.log('line');
                return "4";
            } else if (stringBoard == 5) {
                console.log('line');
                return "5";
            } else if (stringBoard == 6) {
                console.log('line');
                return "6";
            } else if (stringBoard == 7) {
                console.log('line');
                return "7";
            } else if (stringBoard == 8) {
                console.log('line');
                return "8";
            }
        }
    }
    else if (firstMove[0] == 2) { // topright first move
        if (stringBoard.length == 8) {
            let num = stringBoard[6];
            console.log(num);
            if (num == 0) {
                console.log('convert 0 to 2');
                return board[2];
            } else if (num == 1) {
                console.log('convert 1 to 1');
                return board[1];
            } else if (num == 2) {
                console.log('2 to 0');
                return board[0];
            } else if (num == 3) {
                console.log('convert 3 to 5');
                return board[5];
            } else if (num == 4) {
                console.log('convert 4 to 4');
                return board[4];
            } else if (num == 5) {
                console.log('convert 5 to 3');
                return board[3];
            } else if (num == 6) {
                console.log('convert 6 to 8');
                return board[8];
            } else if (num == 7) {
                console.log('convert 7 to 7');
                return board[7];
            } else if (num == 8) {
                console.log('convert 8 to 6');
                return board[6];
            }
        } else if (stringBoard.length == 1) {
            if (stringBoard == 0) {
                console.log('line');
                return "2";
            } else if (stringBoard == 1) {
                console.log('line');
                return "1";
            } else if (stringBoard == 2) {
                console.log('line');
                return "0";
            } else if (stringBoard == 3) {
                console.log('line');
                return "5";
            } else if (stringBoard == 4) {
                console.log('line');
                return "4";
            } else if (stringBoard == 5) {
                console.log('line');
                return "3";
            } else if (stringBoard == 6) {
                console.log('line');
                return "8";
            } else if (stringBoard == 7) {
                console.log('line');
                return "7";
            } else if (stringBoard == 8) {
                console.log('line');
                return "6";
            }
        }
    }
    else if (firstMove[0] == 6) { // botleft first move
        if (stringBoard.length == 8) {
            let num = stringBoard[6];
            console.log(num);
            if (num == 0) {
                console.log('convert 0 to 6');
                return board[6];
            } else if (num == 1) {
                console.log('convert 1 to 7');
                return board[7];
            } else if (num == 2) {
                console.log('2 to 8');
                return board[8];
            } else if (num == 3) {
                console.log('convert 3 to 3');
                return board[3];
            } else if (num == 4) {
                console.log('convert 4 to 4');
                return board[4];
            } else if (num == 5) {
                console.log('convert 5 to 5');
                return board[5];
            } else if (num == 6) {
                console.log('convert 6 to 0');
                return board[0];
            } else if (num == 7) {
                console.log('convert 7 to 1');
                return board[1];
            } else if (num == 8) {
                console.log('convert 8 to 2');
                return board[2];
            }
        } else if (stringBoard.length == 1) {
            if (stringBoard == 0) {
                console.log('line');
                return "6";
            } else if (stringBoard == 1) {
                console.log('line');
                return "7";
            } else if (stringBoard == 2) {
                console.log('line');
                return "8";
            } else if (stringBoard == 3) {
                console.log('line');
                return "3";
            } else if (stringBoard == 4) {
                console.log('line');
                return "4";
            } else if (stringBoard == 5) {
                console.log('line');
                return "5";
            } else if (stringBoard == 6) {
                console.log('line');
                return "0";
            } else if (stringBoard == 7) {
                console.log('line');
                return "1";
            } else if (stringBoard == 8) {
                console.log('line');
                return "2";
            }
        }
    }
    else if (firstMove[0] == 8) { // botright first move
        if (stringBoard.length == 8) {
            let num = stringBoard[6];
            console.log(num);
            if (num == 0) {
                console.log('convert 0 to 8');
                return board[8];
            } else if (num == 1) {
                console.log('convert 1 to 7');
                return board[7];
            } else if (num == 2) {
                console.log('2 to 6');
                return board[6];
            } else if (num == 3) {
                console.log('convert 3 to 5');
                return board[5];
            } else if (num == 4) {
                console.log('convert 4 to 4');
                return board[4];
            } else if (num == 5) {
                console.log('convert 5 to 3');
                return board[3];
            } else if (num == 6) {
                console.log('convert 6 to 2');
                return board[2];
            } else if (num == 7) {
                console.log('convert 7 to 1');
                return board[1];
            } else if (num == 8) {
                console.log('convert 8 to 0');
                return board[0];
            }
        } else if (stringBoard.length == 1) {
            if (stringBoard == 0) {
                console.log('line');
                return "8";
            } else if (stringBoard == 1) {
                console.log('line');
                return "7";
            } else if (stringBoard == 2) {
                console.log('line');
                return "6";
            } else if (stringBoard == 3) {
                console.log('line');
                return "5";
            } else if (stringBoard == 4) {
                console.log('line');
                return "4";
            } else if (stringBoard == 5) {
                console.log('line');
                return "3";
            } else if (stringBoard == 6) {
                console.log('line');
                return "2";
            } else if (stringBoard == 7) {
                console.log('line');
                return "1";
            } else if (stringBoard == 8) {
                console.log('line');
                return "0";
            }
        }
    }
}

const converttRIC = (stringBoard) => {
    let num = stringBoard[6];
    console.log(num);
    if (firstMove[0] == '0') { // topleft start
        if (num == 0) {
            console.log('convert 0 to 0');
            convert("topleft");
        } else if (num == 1) {
            console.log('convert 1 to 1');
            convert("topmid")
        } else if (num == 2) {
            console.log('2 to 2');
            convert("topright");
        } else if (num == 3) {
            console.log('convert 3 to 3');
            convert('midleft')
        } else if (num == 4) {
            console.log('convert 4 to 4');
            convert("midmid");
        } else if (num == 5) {
            console.log('convert 5 to 5');
            convert('midright');
        } else if (num == 6) {
            console.log('convert 6 to 6');
            convert("botleft");
        } else if (num == 7) {
            console.log('convert 7 to 7');
            convert('botmid');
        } else if (num == 8) {
            console.log('convert 8 to 8');
            convert("botright");
         }
    }
    else if (firstMove[0] == '2'){ // topright start
        if (num == 0) {
            console.log('convert 0 to 2');
            convert("topright");
        } else if (num == 1) {
            console.log('convert 1 to 1');
            convert("topmid")
        } else if (num == 2) {
            console.log('2 to 0');
            convert("topleft");
        } else if (num == 3) {
            console.log('convert 3 to 5');
            convert('midright')
        } else if (num == 4) {
            console.log('convert 4 to 4');
            convert("midmid");
        } else if (num == 5) {
            console.log('convert 5 to 3');
            convert('midleft');
        } else if (num == 6) {
            console.log('convert 6 to 8');
            convert("botright");
        } else if (num == 7) {
            console.log('convert 7 to 7');
            convert('botmid');
        } else if (num == 8) {
            console.log('convert 8 to 6');
            convert("botleft");
        }
    }
    else if (firstMove[0] == '6'){ // botleft start
        if (num == 0) {
            console.log('convert 0 to 6');
            convert("botleft");
        } else if (num == 1) {
            console.log('convert 1 to 7');
            convert("botmid")
        } else if (num == 2) {
            console.log('2 to 8');
            convert("botright");
        } else if (num == 8) {
            console.log('convert 3 to 3');
            convert('midleft')
        } else if (num == 4) {
            console.log('convert 4 to 4');
            convert("midmid");
        } else if (num == 5) {
            console.log('convert 5 to 5');
            convert('midright');
        } else if (num == 6) {
            console.log('convert 6 to 0');
            convert("topleft");
        } else if (num == 7) {
            console.log('convert 7 to 1');
            convert('topmid');
        } else if (num == 8) {
            console.log('convert 8 to 2');
            convert("topright");
        }
    }
    else if (firstMove[0] == '8'){ // botright start
        if (num == 0) {
            console.log('convert 0 to 8');
            convert("botright");
        } else if (num == 1) {
            console.log('convert 1 to 7');
            convert("botmid")
        } else if (num == 2) {
            console.log('2 to 6');
            convert("botleft");
        } else if (num == 8) {
            console.log('convert 3 to 5');
            convert('midleft')
        } else if (num == 4) {
            console.log('convert 4 to 4');
            convert("midmid");
        } else if (num == 5) {
            console.log('convert 5 to 3');
            convert('midright');
        } else if (num == 6) {
            console.log('convert 6 to 2');
            convert("topright");
        } else if (num == 7) {
            console.log('convert 7 to 1');
            convert('topmid');
        } else if (num == 8) {
            console.log('convert 8 to 0');
            convert("topleft");
        }
    }
}

// converts top left corner scenerios to top right by mirroring it
const topRightPlaysConvert = () => {
    if (firstMove[0] == tRIC('0')) {
        if (move == 1) { // 2nd move
            if (tRIC('board[0]') != undefined) {
                converttRIC("board[4]");
                console.log('line')
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('1')) { // player chooses topright for 1st move and topmid for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[1]') != undefined) {
                    converttRIC('board[2]');
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[2]') != undefined) {
                    converttRIC("board[4]");
                    console.log('line')
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[1]') != undefined && tRIC('board[6]') == undefined && tRIC('board[0]') == tRIC('board[1]')) {
                    converttRIC("board[6]"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[1]') != undefined && tRIC('board[6]') != undefined && tRIC('board[0]') == tRIC('board[1]')) {
                    converttRIC("board[3]");
                    console.log('line')
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[1]') != undefined && tRIC('board[5]') == undefined) {
                    converttRIC("board[5]"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[1]') != undefined && tRIC('board[5]')) {
                    converttRIC("board[7]");
                    console.log('line')
                }
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('1')) { // player chooses topright for 1st move and topleft for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[2]') != undefined) {
                    converttRIC("board[1]");
                    console.log('line')
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') == undefined) {
                    converttRIC("board[7]"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') != undefined) {
                    converttRIC("board[3]");
                    console.log('line')
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') != undefined && tRIC('board[5]') == undefined) {
                    converttRIC("board[5]"); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') != undefined && tRIC('board[5]') != undefined) {
                    converttRIC("board[8]"); // cpu wins if player doesn't move here
                    console.log('line')
                }
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('3')) { // player chooses topright for 1st move and midright for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[3]') != undefined) {
                    converttRIC("board[6]");
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[3]') != undefined && tRIC('board[2]') == undefined) {
                    converttRIC('board[2]'); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[3]') != undefined && tRIC('board[2]') != undefined) {
                    converttRIC('board[1]');
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[3]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') == undefined) {
                    converttRIC('board[7]'); // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[3]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') != undefined) {
                    converttRIC('board[8]');
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('5')) { // player chooses topleft for 1st move and midright for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined) {
                    converttRIC("botright");
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') != undefined) {
                    converttRIC('board[1]') // cpu wins if player doesn't move here
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined && tRIC('board[1]') != undefined) {
                    converttRIC('board[2]');
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') == undefined && tRIC('board[5]') == tRIC('board[2]')) {
                    converttRIC('board[7]')
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') != undefined && tRIC('board[7]') != undefined) {
                    converttRIC('board[6]')
                    console.log('line');
                } else if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') != undefined && tRIC('board[6]') == undefined) {
                    converttRIC('board[6]') // cpu wins if player doesn't move here
                    console.log('line');
                } else if (tRIC('board[0]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') != undefined && tRIC('board[6]') != undefined) {
                    converttRIC('board[3]')
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('6')) { // player chooses topleft for 1st move and botleft for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[6]') != undefined) {
                    converttRIC('board[3]')
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[6]') != undefined && tRIC('board[5]') == undefined) {
                    converttRIC('board[5]'); // cpu wins if player doesn't move here
                    console.log('line');
                } else if (tRIC('board[0]') != undefined && tRIC('board[6]') != undefined && tRIC('board[5]') != undefined) {
                    converttRIC('board[1]')
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[6]') != undefined && tRIC('board[5]') != undefined && tRIC('board[7]') == undefined) {
                    converttRIC('board[7]')
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[6]') != undefined && tRIC('board[5]') != undefined && tRIC('board[7]') != undefined) {
                    converttRIC('board[2]')
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('7')) { // player chooses topleft for 1st move and botmid for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[7]') != undefined) {
                    converttRIC('board[5]')
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[7]') != undefined && tRIC('board[3]') == undefined) {
                    converttRIC('board[3]') // cpu wins if player doesn't choose
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[7]') != undefined && tRIC('board[3]') != undefined) {
                    converttRIC('board[6]')
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[7]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') == undefined) {
                    converttRIC('board[2]') // cpu wins if player doesn't choose
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[7]') != undefined && tRIC('board[5]') != undefined && tRIC('board[2]') != undefined) {
                    converttRIC('board[1]')
                    console.log('line');
                }
            }
        }
        else if (firstMove[0] == tRIC('0') && firstMove[1] == tRIC('8')) { // player chooses topleft for 1st move and botright for 2nd move
            if (move == 3) { //4th move
                if (tRIC('board[0]') != undefined && tRIC('board[8]') != undefined) {
                    converttRIC('board[1]')
                    console.log('line');
                }
            }
            else if (move == 5) { // 6th move
                if (tRIC('board[0]') != undefined && tRIC('board[8]') != undefined && tRIC('board[7]') == undefined) {
                    converttRIC('board[7]')
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[8]') != undefined && tRIC('board[7]') != undefined) {
                    converttRIC('board[6]')
                    console.log('line');
                }
            }
            else if (move == 7) { // 8th move
                if (tRIC('board[0]') != undefined && tRIC('board[8]') != undefined && tRIC('board[7]') != undefined && tRIC('board[2]') == undefined) {
                    converttRIC('board[2]')
                    console.log('line')
                } else if (tRIC('board[0]') != undefined && tRIC('board[8]') != undefined && tRIC('board[7]') != undefined && tRIC('board[2]') != undefined) {
                    converttRIC('board[5]')
                    console.log('line');
                }
            }
        }
    }
}

const computerMove = () => {
    // player chooses topleft for 1st move
    // topLeftPlays();
    topRightPlaysConvert();
    // player chooses topright for 1st move

}

// if (firstMove[0] == '0') {
    //     if (move == 1) { // 2nd move
    //         if (board[0] != undefined) {
    //             convert("midmid");
    //             console.log('324')
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '1') { // player chooses topleft for 1st move and topmid for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[1] != undefined) {
    //                 convert("topright");
    //                 console.log('331')
    //             } else if (board[0] != undefined && board[2] != undefined) {
    //                 convert("topmid");
    //                 console.log('334')
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[1] != undefined && board[6] == undefined && board[0] == board[1]) {
    //                 convert("botleft"); // cpu wins if player doesn't move here
    //                 console.log('340')
    //             } else if (board[0] != undefined && board[1] != undefined) {
    //                 convert("midleft");
    //                 console.log('343')
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[1] != undefined && board[5] == undefined) {
    //                 convert("midright"); // cpu wins if player doesn't move here
    //                 console.log('349')
    //             } else if (board[0] != undefined && board[1] != undefined && board[5]) {
    //                 convert("botmid");
    //                 console.log('352')
    //             }
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '2') { // player chooses topleft for 1st move and topright for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[2] != undefined) {
    //                 convert("topmid");
    //                 console.log('360')
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[2] != undefined && board[7] == undefined) {
    //                 convert("botmid"); // cpu wins if player doesn't move here
    //                 console.log('366')
    //             } else if (board[0] != undefined && board[2] != undefined && board[7] != undefined) {
    //                 convert("midleft");
    //                 console.log('369')
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[2] != undefined && board[7] != undefined && board[5] == undefined) {
    //                 convert("midright"); // cpu wins if player doesn't move here
    //                 console.log('375')
    //             } else if (board[0] != undefined && board[2] != undefined && board[7] != undefined && board[5] != undefined) {
    //                 convert("botright"); // cpu wins if player doesn't move here
    //                 console.log('378')
    //             }
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '3') { // player chooses topleft for 1st move and midleft for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[3] != undefined) {
    //                 convert("botleft");
    //                 console.log('386');
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[3] != undefined && board[2] == undefined) {
    //                 convert('topright'); // cpu wins if player doesn't move here
    //                 console.log('393')
    //             } else if (board[0] != undefined && board[3] != undefined && board[2] != undefined) {
    //                 convert('topmid');
    //                 console.log('396');
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[3] != undefined && board[2] != undefined && board[7] == undefined) {
    //                 convert('botmid'); // cpu wins if player doesn't move here
    //                 console.log('402')
    //             } else if (board[0] != undefined && board[3] != undefined && board[2] != undefined && board[7] != undefined) {
    //                 convert('botright');
    //                 console.log('405');
    //             }
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '5') { // player chooses topleft for 1st move and midright for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[5] != undefined) {
    //                 convert("botright");
    //                 console.log('413');
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[5] != undefined && board[2] != undefined) {
    //                 convert('topmid') // cpu wins if player doesn't move here
    //                 console.log('419')
    //             } else if (board[0] != undefined && board[5] != undefined && board[1] != undefined) {
    //                 convert('topright');
    //                 console.log('422');
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[7] == undefined && board[5] == board[2]) {
    //                 convert('botmid')
    //                 console.log('428')
    //             } else if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[7] != undefined) {
    //                 convert('botleft')
    //                 console.log('431');
    //             } else if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[6] == undefined) {
    //                 convert('botleft') // cpu wins if player doesn't move here
    //                 console.log('434');
    //             } else if (board[0] != undefined && board[5] != undefined && board[2] != undefined && board[6] != undefined) {
    //                 convert('midleft')
    //                 console.log('437');
    //             }
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '6') { // player chooses topleft for 1st move and botleft for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[6] != undefined) {
    //                 convert('midleft')
    //                 console.log('445');
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[6] != undefined && board[5] == undefined) {
    //                 convert('midright'); // cpu wins if player doesn't move here
    //                 console.log('451');
    //             } else if (board[0] != undefined && board[6] != undefined && board[5] != undefined) {
    //                 convert('topmid')
    //                 console.log('454');
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[6] != undefined && board[5] != undefined && board[7] == undefined) {
    //                 convert('botmid')
    //                 console.log('460')
    //             } else if (board[0] != undefined && board[6] != undefined && board[5] != undefined && board[7] != undefined) {
    //                 convert('topright')
    //                 console.log('463');
    //             }
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '7') { // player chooses topleft for 1st move and botmid for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[7] != undefined) {
    //                 convert('midleft')
    //                 console.log('472');
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[7] != undefined && board[5] == undefined) {
    //                 convert('midright')
    //                 console.log('478')
    //             } else if (board[0] != undefined && board[7] != undefined && board[5] != undefined) {
    //                 convert('botleft')
    //                 console.log('481');
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[7] != undefined && board[5] != undefined && board[2] == undefined) {
    //                 convert('topright')
    //                 console.log('487')
    //             } else if (board[0] != undefined && board[7] != undefined && board[5] != undefined && board[2] != undefined) {
    //                 convert('botright')
    //                 console.log('490');
    //             }
    //         }
    //     }
    //     else if (firstMove[0] == '0' && firstMove[1] == '8') { // player chooses topleft for 1st move and botright for 2nd move
    //         if (move == 3) { //4th move
    //             if (board[0] != undefined && board[8] != undefined) {
    //                 convert('topmid')
    //                 console.log('497');
    //             }
    //         }
    //         else if (move == 5) { // 6th move
    //             if (board[0] != undefined && board[8] != undefined && board[7] == undefined) {
    //                 convert('botmid')
    //                 console.log('504')
    //             } else if (board[0] != undefined && board[8] != undefined && board[7] != undefined) {
    //                 convert('botleft')
    //                 console.log('507');
    //             }
    //         }
    //         else if (move == 7) { // 8th move
    //             if (board[0] != undefined && board[8] != undefined && board[7] != undefined && board[2] == undefined) {
    //                 convert('topright')
    //                 console.log('513')
    //             } else if (board[0] != undefined && board[8] != undefined && board[7] != undefined && board[2] != undefined) {
    //                 convert('midright')
    //                 console.log('516');
    //             }
    //         }
    //     }
    // }

// else if (firstMove[0] == '0' && firstMove[1] == '5') { // player chooses topleft for 1st move and botleft for 2nd move
//     if (move == 3) { //4th move
//         if () {

//             console.log('413');
//         }
//     }
//     else if (move == 5) { // 6th move
//         if () {

//             console.log('419')
//         } else if () {

//             console.log('422');
//         }
//     }
//     else if (move == 7) { // 8th move
//         if () {

//             console.log('428')
//         } else if () {

//             console.log('431');
//         }
//     }
// }
