let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".box1")
let newGame = document.querySelector(".box2")

let turn0 = true; /* Player X/O*/

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")

        if (turn0) {
            reset.style.backgroundColor = "rgb(255, 255, 0)"
            reset.innerText = "X Turn"
            box.style.color = "#3ddbe7"
            box.innerText = "0";
            turn0 = false;
            reset.disabled = true;
        }

        else {
            reset.style.backgroundColor = "#3ddbe7"
            reset.innerText = "0 Turn"
            box.style.color = "rgb(255, 255, 0)"
            box.innerText = "X";
            turn0 = true;

            reset.disabled = true;
        }
        box.disabled = true;

        checkWinner();

    })
})





const checkWinner = () => {
    for (patterns of winPatterns) {

        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                reset.style.backgroundColor = "#32CD32";
                reset.style.color = "black"
                reset.innerText = `Game over. Player ${pos3val} Wins! `
                box.disabled = true

            }
        }


    }
}


const resetGame = () => {
    turn0 = true;
    enableBoxes();
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        reset.innerText = "0 Turn"
        reset.style.backgroundColor = "#3ddbe7"

    }
}


newGame.addEventListener("click", resetGame);