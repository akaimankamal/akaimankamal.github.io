//TIC-TAC-TOE
// - select the board
// - add event listener
// - click on square - fill it in
// - alternate what to put
// - make sure can't click on same square more than once
let boxes = document.querySelectorAll(".box")
let notes = document.getElementById("note")
let reset = document.getElementById("reset")
let xScore = document.getElementById("xscore")
let oScore = document.getElementById("oscore")

//winning criteria
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//check winner & draw
function checkWin() {
    let winner = false
    winningCombos.forEach(function(element){
        
        if (
            boxes[element[0]].innerHTML == player &&
            boxes[element[1]].innerHTML == player &&
            boxes[element[2]].innerHTML == player) {
                winner = true
        }
    })
    return winner;
}
function checkDraw() {
    let draw = true
    boxes.forEach(function (box) {
        if (box.innerText == "") {
            draw = false
        }
    })
    return draw;
}

//reset current game board
function resetBoard() {
    boxes.forEach(function (element) {
        element.innerHTML = ""
    })
}

//player change turn
let player = "X"
function changePlayer(){
    if (player == "X") {
        player = "O"
    } else {
        player = "X"
    }
}

//primary box filling function
let ix = 0
let io = 0
boxes.forEach(function(box) {
    box.onclick = function(event) {
        if (event.target.innerHTML == "") {
        event.target.innerHTML = player
            if (checkWin()) {
                if (player == "X") {
                    ix++
                    xScore.innerHTML = ` ${ix}`
                } else if (player == "O") {
                    io++
                    oScore.innerHTML = ` ${io}`
                }
                setTimeout(function() {
                    alert(player + " WINS!")
                    resetBoard()
                }, 50)
            } else if (checkDraw()) {
                setTimeout(function() {
                    alert("DRAW! o_x")
                    resetBoard()
                }, 50)
            } else {
                changePlayer()
            }
        } else {
        alert("That box is taken.\nPlease choose another box")
        }
        notes.innerHTML = `Player ${player} turn`
    }  
})