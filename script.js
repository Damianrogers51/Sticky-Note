let quotes = [];
var i = 0;

// Presets
    // if (preset == "Love") {
        var newQuote = new Object;
        newQuote.quote = "They lived and laughed and loved and left.";
        newQuote.author = "James Joyce";
        quotes.push(newQuote);

        var quote2 = new Object;
        quote2.quote = "A kind of light spread out from her. And everything changed color. And the world opened out. And a day was good to awaken to. And there were no limits to anything. And the people of the world were good and handsome. And I was not afraid any more.";
        quote2.author = "John Steinbeck"
        quotes.push(quote2);

        var quote3 = new Object;
        quote3.quote = "He's more myself than I am. Whatever our souls are made of, his and mine are the same.";
        quote3.author = "Emily Bronte"
        quotes.push(quote3);

        var quote4 = new Object;
        quote4.quote = "He knew that when he kissed this girl, and forever wed his unutterable visions to her perishable breath, his mind would never romp again like the mind of God.";
        quote4.author = "F. Scott Fitzgerald";
        quotes.push(quote4);

        var quote5 = new Object;
        quote5.quote = "I would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary.";
        quote5.author = "Margaret Atwood";
        quotes.push(quote5);

        var quote6 = new Object;
        quote6.quote = "It was love at first sight, at last sight, at ever and ever sight.";
        quote6.author = "Vladimir Nabokov";
        quotes.push(quote6);

        var quote7 = new Object;
        quote7.quote = "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.";
        quote7.author = "Leo Tolstoy";
        quotes.push(quote7);
    // }
    /*
    else if (preset == "Inspiration") {
        var newQuote = new Object;
        newQuote.quote = "They lived they laughed they loved and left.";
        newQuote.author = "James Joyce";
        quotes.push(newQuote);

        var quote2 = new Object;
        quote2.quote = "A kind of light spread out from her. And everything changed color. And the world opened out. And a day was good to awaken to. And there were no limits to anything. And the people of the world were good and handsome. And I was not afraid any more.";
        quote2.author = "John Steinbeck"
        quotes.push(quote2);

        var quote3 = new Object;
        quote3.quote = "He's more myself than I am. Whatever our souls are made of, his and mine are the same.";
        quote3.author = "Emily Bronte"
        quotes.push(quote3);

        var quote4 = new Object;
        quote4.quote = "";
        quote4.author = "";
        quotes.push(quote4);

        var quote5 = new Object;
        quote5.quote = "I would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary.";
        quote5.author = "Margaret Atwood";
        quotes.push(quote5);

        var quote6 = new Object;
        quote6.quote = "";
        quote6.author = "";
        quotes.push(quote6);

        var quote7 = new Object;
        quote7.quote = "";
        quote7.author = "";
        quotes.push(quote7);
    }
    else {
        var newQuote = new Object;
        newQuote.quote = "They lived they laughed they loved and left.";
        newQuote.author = "James Joyce";
        quotes.push(newQuote);

        var quote2 = new Object;
        quote2.quote = "A kind of light spread out from her. And everything changed color. And the world opened out. And a day was good to awaken to. And there were no limits to anything. And the people of the world were good and handsome. And I was not afraid any more.";
        quote2.author = "John Steinbeck"
        quotes.push(quote2);

        var quote3 = new Object;
        quote3.quote = "He's more myself than I am. Whatever our souls are made of, his and mine are the same.";
        quote3.author = "Emily Bronte"
        quotes.push(quote3);

        var quote4 = new Object;
        quote4.quote = "";
        quote4.author = "";
        quotes.push(quote4);

        var quote5 = new Object;
        quote5.quote = "I would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary.";
        quote5.author = "Margaret Atwood";
        quotes.push(quote5);

        var quote6 = new Object;
        quote6.quote = "";
        quote6.author = "";
        quotes.push(quote6);

        var quote7 = new Object;
        quote7.quote = "";
        quote7.author = "";
        quotes.push(quote7);
    }
    */

//

function addQuoteScreen() {
    if (document.getElementById('greyB').style.display == 'none' && document.getElementById('addQuoteScreen').style.display == 'none') {
        document.getElementById('greyB').style.display = 'block';
        document.getElementById('addQuoteScreen').style.display = 'block';
        document.getElementById('addQuote').style.display = 'none';
    }
    else {
        if (document.getElementById('quote').value != "" && document.getElementById('author').value != "") {
            document.getElementById('greyB').style.display = 'none';
            document.getElementById('addQuoteScreen').style.display = 'none'
            document.getElementById('addQuote').style.display = 'block';
        }
    }
}

function addQuote() {
    if (document.getElementById('quote').value != "" && document.getElementById('author').value != "") {
        var newQuote = new Object; 
    
        newQuote.quote = document.getElementById('quote').value;
        newQuote.author = document.getElementById('author').value;

        quotes.push(newQuote);
    }
}

function repeatDisplay() {
    displayQuote();
    setInterval(displayQuote, 12000);
}

function displayQuote() {
    let quoteHolder = document.createElement('a');
    quoteHolder.id = "quoteHolder";
    let quote = document.createElement('div');
    let author = document.createElement('div');

    quote.id = "displayedQuote";
    author.id = "displayedAuthor";
    quote.innerText = "\"" + quotes[i].quote + "\"";
    author.innerHTML = "<i>" + "- " + quotes[i].author + "</i>";

    quoteHolder.appendChild(quote);
    quoteHolder.appendChild(author);

    quoteHolder.href = "https://www.google.com/search?q=" + quotes[i].quote + " quote";
    quoteHolder.target = "_blank";
    document.getElementById('holder').appendChild(quoteHolder);

    setTimeout(startDisplay, 1);

    setTimeout(changeQuote, 10000);

    if (i == (quotes.length)-1) {
        i = 0;
    }
    else {
        i += 1;
    }
}

function startDisplay() {
    let quoteHolder = document.getElementById('quoteHolder');

    quoteHolder.style.opacity = 1;
}

function changeQuote() {
    let quoteHolder = document.getElementById('quoteHolder');

    quoteHolder.style.opacity = 0;
    quoteHolder.id = "newQuoteHolder";

    setTimeout(removeDisplay, 1000);
}

function removeDisplay() {
    let quoteHolder = document.getElementById('newQuoteHolder');

    quoteHolder.parentElement.removeChild(quoteHolder);
}

function hideButton() {
    document.getElementById('startButton').style.display = "none";
}