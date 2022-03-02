let num = 1;

function addNote() {
    let note = document.createElement('div');

    let body = document.createElement('div');

    let footer = document.createElement('div'); 

    let delButton = document.createElement('span');
    delButton.className = "delNote"
    delButton.style.color = "grey";
    delButton.innerHTML = "x";
    delButton.onclick = function() {
        delNote(this.parentNode);
    };

    body.innerText = document.getElementById('noteBody').value;

    if (document.getElementById('noteFooter').value != "") {
        footer.innerHTML += "<i>" + document.getElementById('noteFooter').value + "</i>";
    }

    let edButton = document.createElement('span');
    edButton.className = "edNote"
    edButton.style.color = "grey";
    edButton.innerHTML = "o";
    edButton.onclick = function() {
        expandNote(body, footer);
    };

    document.getElementById('noteBody').value = "";
    document.getElementById('noteFooter').value = "";

    body.className = "body";
    footer.className = "footer";

    note.className = "note col-3";
    note.id = "note" + num;

    note.onclick = function() {
        changeColor(this);
    };

    note.appendChild(edButton);
    note.appendChild(delButton);
    note.appendChild(body);
    note.appendChild(footer);

    document.getElementsByClassName('holder')[0].appendChild(note);
    ++num;
}

function addCard() {
    let card = document.createElement('div');

    let cardFront = document.createElement('div');
    let cardBack = document.createElement('div');

    let questionHeader = document.createElement('div');
    questionHeader.id = "questionHeader";
    questionHeader.innerText = "Question";
    let answerHeader = document.createElement('div');
    answerHeader.id = "answerHeader";
    answerHeader.innerText = "Answer";

    let delButton = document.createElement('span');
    delButton.className = "delCard";
    delButton.style.color = "grey";
    delButton.innerHTML = "x";
    delButton.onclick = function() {
        delCard(this.parentNode.parentNode);
    };

    let edCard = document.createElement('span');
    edCard.className = "edCard";
    edCard.style.color = "grey";
    edCard.innerHTML = "o";
    edCard.onclick = function() {
        expandCard(cardFront, cardBack);
    };

    cardFront.innerHTML = document.getElementById('noteBody').value;
    cardBack.innerHTML = document.getElementById('noteFooter').value;

    cardFront.className = "front";
    cardBack.className = "back";

    card.className = "card col-6";

    card.onclick = function() {
        flip(this);
    };

    cardFront.appendChild(edCard);
    cardFront.appendChild(delButton);
    cardFront.appendChild(questionHeader);
    cardBack.appendChild(answerHeader);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    document.getElementsByClassName('holder')[0].appendChild(card);
}

function addNoteScreen() {
    if (document.getElementById('greyB').style.display == 'none' && document.getElementById('addNoteScreen').style.display == 'none') {
        document.getElementById('greyB').style.display = 'block';
        document.getElementById('addNoteScreen').style.display = 'block';
    }
    else {
        document.getElementById('greyB').style.display = 'none';
        document.getElementById('addNoteScreen').style.display = 'none'
    }
}

function editNoteScreen() {
    let editButton = document.getElementById('editButton');

    if (document.getElementById('greyB').style.display == 'none' && document.getElementById('editNoteScreen').style.display == 'none') {
        document.getElementById('greyB').style.display = 'block';
        document.getElementById('editNoteScreen').style.display = 'block';
    }
    else {
        document.getElementById('greyB').style.display = 'none';
        document.getElementById('editNoteScreen').style.display = 'none';
        editButton.parentElement.removeChild(editButton);
    }
}

function editCardScreen() {
    let editButton = document.getElementById('editButton');

    if (document.getElementById('greyB').style.display == 'none' && document.getElementById('editCardScreen').style.display == 'none') {
        document.getElementById('greyB').style.display = 'block';
        document.getElementById('editCardScreen').style.display = 'block';
    }
    else {
        document.getElementById('greyB').style.display = 'none';
        document.getElementById('editCardScreen').style.display = 'none';
        editButton.parentElement.removeChild(editButton);
    }
}

function changeAdd() {
    document.getElementsByClassName('addI')[0].style.display = 'none';
    document.getElementsByClassName('closeI')[0].style.display = 'block';
}

function changeClose() {
    document.getElementsByClassName('addI')[0].style.display = 'block';
    document.getElementsByClassName('closeI')[0].style.display = 'none';
}

function flip(card) {
    if(card.className == "card col-6") {
        card.className = "card col-6 card-flip";
    }
    else {
        card.className = "card col-6"
    }
}
let cNum = 0;

function changeColor(note) {
    let colors = ["#9ecef0", "#f1c7db", "#b7e1ce", "white"]

    note.style.backgroundColor = colors[cNum];

    if (cNum == 3) {
        cNum = 0;
    }
    else {
        ++cNum;
    }
}

function delNote(element) {
    element.parentNode.removeChild(element);
}

function delCard(element) {
    element.parentNode.removeChild(element);
}

function expandNote(body, footer) {
    let button = document.createElement('input');
    button.className = "formI btn btn-primary"
    button.id = "editButton"
    button.type = "button"
    button.value = "Edit"
    button.onclick = function() {
        editNote(body, footer);
        editNoteScreen(); 
        changeClose();
    };

    document.getElementById('editNoteScreen').appendChild(button);

    editNoteScreen();

    document.getElementById('editNoteBody').value = body.innerText;
    document.getElementById('editNoteFooter').value = footer.innerText;
}

function expandCard(front, back) {
    let button = document.createElement('input');
    button.className = "formI btn btn-primary"
    button.id = "editCardButton"
    button.type = "button"
    button.value = "Edit Card"
    button.onclick = function() {
        editCard(front, back);
        editCardScreen(); 
        changeClose();
    };

    document.getElementById('editCardScreen').appendChild(button);

    editCardScreen();

    document.getElementById('editCardBody').value = front.innerText;
    document.getElementById('editCardFooter').value = back.innerText;
}

function editNote(body, footer) {
    body.innerText = document.getElementById('editNoteBody').value
    footer.innerHTML = "<i>" + document.getElementById('editNoteFooter').value + "</i>";
}

function editCard(front, back) {
    front.innerText = document.getElementById('editCardBody').value
    back.innerHTML = document.getElementById('editCardFooter').value
}