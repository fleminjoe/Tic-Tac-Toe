const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");
//console.log(cellDivs);

let gameIsLive = true;
let xIsNext = true;
const xSymbol = "✖";
const oSymbol = "O"


const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWIn = (letter) => {
    gameIsLive = false;
    if(letter === 'x'){
        statusDiv.innerHTML = `${letterToSymbol(letter)} has won !!`;
    }else{
        statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won !!</span>`;
    }
}


const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];
    //checking winner
    if(topLeft && topLeft === topMiddle && topMiddle === topRight){
        handleWIn(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
       
    }else if(middleLeft && middleLeft === middleMiddle && middleMiddle === middleRight){
        handleWIn(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }else if(bottomLeft && bottomLeft === bottomMiddle && bottomMiddle === bottomRight){
        handleWIn(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    
    }else if(topLeft && topLeft === middleLeft && middleLeft === bottomLeft){
        handleWIn(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }else if(topMiddle && topMiddle === middleMiddle && middleMiddle === bottomMiddle){
        handleWIn(topMiddle)
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }else if(topRight && topRight === middleRight && middleRight === bottomRight){
        handleWIn(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    }else if(topLeft && topLeft === middleMiddle && middleMiddle === bottomRight){
        handleWIn(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    }else if(topRight && topRight === middleMiddle && middleMiddle === bottomLeft){
        handleWIn(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle &&bottomRight){
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied !!';
    }else{
        xIsNext = !xIsNext;
        if(xIsNext){
            statusDiv.innerHTML = `${xSymbol} is next`;
        }else{
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }

    }
}


const handleReset = () => {
    //console.log(ev.type);
    gameIsLive = true;
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for(let cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
}

const handleCellClicked = (ev) => {
   // console.log(ev);
   let classList = ev.target.classList;
   //console.log(classList);
   let location = classList[1];
    if( !gameIsLive || classList[1] === 'x' || classList[1] ==='o'){
        //console.log("hai");
        return;
    } 

   if(xIsNext){
        classList.add('x');
        //console.log("hello");
        checkGameStatus();
        //xIsNext = !xIsNext;
   }else{
       classList.add('o');
       //console.log("helhaulo");
       checkGameStatus();
      //xIsNext = !xIsNext;
   }
}

resetDiv.addEventListener('click', handleReset);
for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClicked)
}