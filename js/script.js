var state = {board: []};

function start() {
    renderBoard();
    renderButton();
};

function renderBoard() {

    let ramdomNumber =  Math.ceil(Math.random()*27);
    if (ramdomNumber === 0 ) {
        ramdomNumber = 1;
    }
    
    way = 'img/' + ramdomNumber.toString() + '.png';
    var divBoard = document.querySelector('#image-board')
    divBoard.innerHTML = '';
    let fotho = document.createElement('img');
    fotho.src = way;
    divBoard.append(fotho);
}

function renderButton(){
    var divButton = document.querySelector('#update-button')
    divButton.innerHTML = '';
    let buttonUpdate = document.createElement('button');
    buttonUpdate.textContent = 'Nova Imagem';
    buttonUpdate.addEventListener('click', atualize);
    divButton.append(buttonUpdate);
}

function atualize(event){
    start();
}

start();