const board = document.getElementById('container')


//BALLS////BALLS////BALLS////BALLS////BALLS//


//BOXES////BOXES////BOXES////BOXES////BOXES////BOXES//

//FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS//
const createBoard = ()=>{
    for(let row = 0;row<65;row++)
    {   
        for(let column = 0; column<120; column++)
        {
            let square = document.createElement('div');
            square.classList.add('square')
            board.appendChild(square);
            square.style.left = column*5+"px";
            square.style.top = row*5+"px"
        }
    }

    createPlatform()
}

const createPlatform = ()=>{
    platform = document.createElement('div');
    platform.classList.add('platform');
    board.appendChild(platform)
    
    platform.style.left = parseInt(board.style.width)/2-50+"px"
}

//START////START////START////START////START////START////START//
createBoard()