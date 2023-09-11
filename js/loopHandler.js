window.onload = initHandler;

let playerTurn = playerChar1;

let isGame = true;

const statusObj = document.querySelector('#status');

function generateWinPositions() {
    let positions = Array();

    for (var i = 0; i < 3; i++){
        let subPositions = Array();
        for (var j = 0; j < 3; j++){
            subPositions.push([i,j]);
        }
        positions.push(subPositions);
    }

    for (var i = 0; i < 3; i++){
        let subPositions = Array();
        for (var j = 0; j < 3; j++){
            subPositions.push([j,i]);
        }
        positions.push(subPositions);
    }

    let subPositionsTemp1 = Array();
    for (var i = 0; i < 3; i++){
        subPositionsTemp1.push([i,i]);
    }
    positions.push(subPositionsTemp1);

    let subPositionsTemp2 = Array();
    for (var i = 0; i < 3; i++){
        subPositionsTemp2.push([i,-i+2]);
    }
    positions.push(subPositionsTemp2);

    return positions;

}

function initHandler() {
}

function calculateWin(tagger) {
    let currentField = getField();
    let winPositions = generateWinPositions();

    winPositions.forEach(element => {
        let accuracy = 0;
        element.forEach(subElement => {
            if(currentField[subElement[0]][subElement[1]] == tagger){
                accuracy++;
            }
        })
        if( accuracy == 3 ){
            isGame = false;
            statusObj.textContent = tagger + " won"
        }
    })
    let filledCells = 0;
    currentField.forEach(element => {
        element.forEach(subElement => {
            if (subElement != emptyChar){
                filledCells++;
            }
        })
    })
    if (filledCells == 9){
        isGame = false;
        statusObj.textContent = "tie"
    }
}



function playerMoveHandler(e) {
    if(isGame){

        if(playerTurn == playerChar1){
            if(e.target.textContent == emptyChar){
                playerTurn = playerChar2;
                e.target.textContent = playerChar1;
                statusObj.textContent = playerChar2+"'s move";
                calculateWin(playerChar1);
                
                
            }
        }
        else {
            if(e.target.textContent == emptyChar){
                playerTurn = playerChar1;
                e.target.textContent = playerChar2;
                statusObj.textContent = playerChar1+"'s move";
                calculateWin(playerChar2);
            }
        }
    }
}


for(let button of tableObjects) {
    button.addEventListener("click", playerMoveHandler)
}