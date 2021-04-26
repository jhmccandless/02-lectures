"use strict";

/////////////philippes way///////////
// for (let i = 1; i <= 9; ++i) {
//   const buttonId = "#btn-" + i;
//   document.querySelector(buttonId).addEventListener("click", () => {
//     const areaId = "#sel-" + i;
//     document.querySelector(areaId).style.visibility = "visible";

//     const parentId = "#brd-btn-" + i;
//     document.querySelector(parentId).style.visibility = "hidden";
//   });
// }

const button1 = document.querySelector("#btn-1");
const area1 = document.querySelector("#sel-1");
let text1 = document.querySelector("#text-1").textContent;

const button2 = document.querySelector("#btn-2");
const area2 = document.querySelector("#sel-2");
let text2 = document.querySelector("#text-2").textContent;

const button3 = document.querySelector("#btn-3");
const area3 = document.querySelector("#sel-3");
let text3 = document.querySelector("#text-3").textContent;

const button4 = document.querySelector("#btn-4");
const area4 = document.querySelector("#sel-4");
let text4 = document.querySelector("#text-4").textContent;

const button5 = document.querySelector("#btn-5");
const area5 = document.querySelector("#sel-5");
let text5 = document.querySelector("#text-5").textContent;

const button6 = document.querySelector("#btn-6");
const area6 = document.querySelector("#sel-6");
let text6 = document.querySelector("#text-6").textContent;

const button7 = document.querySelector("#btn-7");
const area7 = document.querySelector("#sel-7");
let text7 = document.querySelector("#text-7").textContent;

const button8 = document.querySelector("#btn-8");
const area8 = document.querySelector("#sel-8");
let text8 = document.querySelector("#text-8").textContent;

const button9 = document.querySelector("#btn-9");
const area9 = document.querySelector("#sel-9");
let text9 = document.querySelector("#text-9").textContent;

// area1.style.visibility = "hidden";

let boxNum, gameInput, activePlayer, selectedMatrix, playing;
const init = function () {
  activePlayer = 1;
  gameInput = "X";
  selectedMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  playing = true;
};
init();
const playerChange = function () {
  if (activePlayer === 0) {
    gameInput = "X";
    activePlayer = 1;
  } else {
    gameInput = "O";
    activePlayer = 0;
  }
};

document.querySelector("#new-game").addEventListener("click", function () {
  const btnDivSelect = document.getElementsByClassName("board-btn-div");
  const selDiv = document.getElementsByClassName("selection-div");
  for (let i = 0; i < 9; i++) {
    btnDivSelect[i].style.visibility = "visible";
    selDiv[i].style.visibility = "hidden";
  }
  selectedMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  init();
});

const checkWin = function () {
  if (selectedMatrix[0] === 1) {
    if (selectedMatrix[1] === 1) {
      if (selectedMatrix[2] === 1) {
        console.log("game over");
        playing = false;
      }
    }
    if (selectedMatrix[3] === 1) {
      if (selectedMatrix[6] === 1) {
        console.log("game over");
        playing = false;
      }
    }
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[8] === 1) {
        console.log("game over");
        playing = false;
      }
    }
  }
  if (selectedMatrix[3] === 1) {
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[5] === 1) {
        console.log("game over");
        playing = false;
      }
    }
  }
  if (selectedMatrix[6] === 1) {
    if (selectedMatrix[7] === 1) {
      if (selectedMatrix[8] === 1) {
        console.log("game over");
        playing = false;
      }
    }
  }
  if (selectedMatrix[1] === 1) {
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[7] === 1) {
        console.log("game over");
        playing = false;
      }
    }
  }
  if (selectedMatrix[2] === 1) {
    if (selectedMatrix[5] === 1) {
      if (selectedMatrix[8] === 1) {
        console.log("game over");
        playing = false;
      }
    }
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[6] === 1) {
        console.log("game over");
        playing = false;
      }
    }
  }
};

button1.addEventListener("click", function () {
  if (playing) {
    boxNum = 1;
    area1.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-1").textContent = gameInput;
    playerChange();
    selectedMatrix[0] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button2.addEventListener("click", function () {
  if (playing) {
    boxNum = 2;
    area2.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-2").textContent = gameInput;
    playerChange();
    selectedMatrix[1] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button3.addEventListener("click", function () {
  if (playing) {
    boxNum = 3;
    area3.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-3").textContent = gameInput;
    playerChange();
    selectedMatrix[2] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button4.addEventListener("click", function () {
  if (playing) {
    boxNum = 4;
    area4.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-4").textContent = gameInput;
    playerChange();
    selectedMatrix[3] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button5.addEventListener("click", function () {
  if (playing) {
    boxNum = 5;
    area5.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-5").textContent = gameInput;
    playerChange();
    selectedMatrix[4] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button6.addEventListener("click", function () {
  if (playing) {
    boxNum = 6;
    area6.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-6").textContent = gameInput;
    playerChange();
    selectedMatrix[5] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button7.addEventListener("click", function () {
  if (playing) {
    boxNum = 7;
    area7.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-7").textContent = gameInput;
    playerChange();
    selectedMatrix[6] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button8.addEventListener("click", function () {
  if (playing) {
    boxNum = 8;
    area8.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-8").textContent = gameInput;
    playerChange();
    selectedMatrix[7] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});
button9.addEventListener("click", function () {
  if (playing) {
    boxNum = 9;
    area9.style.visibility = "visible";
    document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
    document.querySelector("#text-9").textContent = gameInput;
    playerChange();
    selectedMatrix[8] = 1;
    console.log(selectedMatrix);
    checkWin();
  }
});

// btnSel.addEventListener("click", function () {
//   areaSel.style.visibility = "visible";
//   buttonVis.style.visibility = "hidden";

//   //   console.log("this worked");
// });

// let boxNum = buttonSelector();

// console.log(boxNum);
