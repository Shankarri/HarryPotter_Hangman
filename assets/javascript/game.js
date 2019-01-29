
var music = document.getElementById("hpmusic");

let words = [
    {
        question: "The boy who lived",
        answer: "Harry Potter",
        quotes: "Sorry, Professor, but I must not tell lies.",
        picture: "assets/images/Guess_Images/Harry_Potter.jpg"
    },
    {
        question: "The cleverest witch of her age",
        answer: "Hermione Granger",
        quotes: "It's leviOsa, not levioSA!",
        picture: "assets/images/Guess_Images/Hermoine_Granger.jpg"
    },
    {
        question: "Harry's best friend and youngest Weasley son",
        answer: "Ronald Weasley",
        quotes: "'Of all the trees we could’ve hit, we had to get one that hits back.'",
        picture: "assets/images/Guess_Images/Ronald_Weasley.png"
    },
    {
        question: "The half-giant Hogwarts gamekeeper loves all creatures",
        answer: "Rubeus Hagrid",
        quotes: "Harry -- yer a wizard.",
        picture: "assets/images/Guess_Images/Hagrid.jpg"
    },
    {
        question: "Harry’s devoted pet owl",
        answer: "Hedwig",
        quotes: "Tapping at the Window",
        picture: "assets/images/Guess_Images/Hedwig.jpg"
    },
    {
        question: "Hogwarts Headmaster and founder of the Order of the Phoenix,",
        answer: "Albus Dumbledore",
        quotes: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light",
        picture: "assets/images/Guess_Images/Albus_Dumbledore.jpg"
    },
    {
        question: "The strict but fair Head of Gryffindor house and Transfiguration teacher",
        answer: "Minerva McGonagall",
        quotes: "Don’t tell me what I can and can’t do, Potter.",
        picture: "assets/images/Guess_Images/Mcgonagall.jpg"
    },
    {
        question: "He who must not be Named",
        answer: "Lord Voldemort",
        quotes: "There is no good and evil. There is only power, and those too weak to seek it",
        picture: "assets/images/Guess_Images/Voldemort.jpg"
    },
    {
        question: "Harry Potter belongs to this House School",
        answer: "Gryffindor",
        quotes: "Where dwell the brave at heart,Their daring, nerve, and chivalry,Set them apart",
        picture: "assets/images/Guess_Images/Gryffindor-Logo.jpg"
    },
    {
        question: "Cedric Diggory belongs to this House School",
        answer: "Hufflepuff",
        quotes: "Where they are just and loyal,Those patient who are true",
        picture: "assets/images/Guess_Images/Hufflepuff-Logo.jpg"
    },
    {
        question: "Luna Lovegood belongs to this House School",
        answer: "Ravenclaw",
        quotes: "If you've a ready mind, Where those of wit and learning, Will always find their kind;",
        picture: "assets/images/Guess_Images/Ravenclaw-Logo.jpg"
    },
    {
        question: "Draco Malfoy belongs to this House School",
        answer: "Slytherin",
        quotes: "You'll make your real friends,These cunning folks use any means,To achieve their ends.",
        picture: "assets/images/Guess_Images/Slytherin.jpg"
    },
    {
        question: "Harry’s School of Witchcraft and Wizardry",
        answer: "Hogwarts",
        quotes: "Help will always be given here to those who ask for it.",
        picture: "assets/images/Guess_Images/Hogwarts.jpg"
    },
    {
        question: "Spell for producing Patronus",
        answer: "Expecto Patronum",
        quotes: "This spell is kind of Anti-Dementor – a guardian which acts as a shield between yourself and the Dementor",
        picture: "assets/images/Guess_Images/patronus.gif"
    },
    {
        question: "Magic parchment that reveals the current location of anyone on Hogwarts grounds",
        answer: "Marauders Map",
        quotes: "I solemnly swear I'm upto no good",
        picture: "assets/images/Guess_Images/Marauders_Map.gif"
    },
];

let successImages = ["assets/images/Sucess/Blow_my_mind.gif", "assets/images/Sucess/clapping.gif", "assets/images/Sucess/Thumbs_Up.gif",
    "assets/images/Sucess/hat_tipping.gif", "assets/images/Sucess/Wizard_Rainbow.gif", "assets/images/Sucess/dancing.gif"];

let failureImages = ["assets/images/Failure/Burning.gif", "assets/images/Failure/Facepalm3.gif", "assets/images/Failure/Facepalm.gif", "assets/images/Failure/Falldown.gif",
    "assets/images/Failure/Noooooo.gif", "assets/images/Failure/nope.gif"];

let guess_score;
let win_score;
let loss_score;
let answer;
let guessedletter;
let refresh = false;

let win_html = document.getElementById("win");
let loss_html = document.getElementById("loss");
let guess_html = document.getElementById("guess");
let main_html = document.getElementById("main-content");
let guessImg_html = document.getElementById("guessImg");
let question_html = document.getElementById("question");
let answer_html = document.getElementById("answer");
let guessedLetters_html = document.getElementById("guessedLetters");
let quotes_html = document.getElementById("quotes");
let scoreImg_html = document.getElementById("scoreImg");

let reset_btn = document.getElementById("resetBtn");



function initialize() {
    main_html.style.display = "none";
    // reset_btn.onclick();
    // music.play();
}

reset_btn.onclick = function () {
    // alert("Okay let's start the game");
    refresh = true;
    document.getElementById("errorMsg").style.display = "none";
    document.getElementById("winner_Loser_msg").innerHTML = "";
    main_html.style.display = "";
    reset_btn.innerHTML = "Start a new Game";
    win_score = 0;
    loss_score = 0;
    guess_score = 15;
    updatePage();
};

function updatePage() {

    if (refresh) {
    answer = [];
    guessedletter = "";
    win_html.innerHTML = win_score;
    loss_html.innerHTML = loss_score;
    guess_html.innerHTML = guess_score;
    scoreImg_html.style.display = "none";
    document.getElementById("guesscol").style.display = "";
    document.getElementById("answerCol").style.display = "";
    guessedLetters_html.innerHTML = guessedletter;
    setRandomWord();
    }
}

function setRandomWord() {

    var randomWord = words[Math.floor(Math.random() * words.length)];
    // var randomWord = words[4];
    main_html.style.display = "";
    guessImg_html.src = randomWord.picture;
    quotes_html.innerHTML = randomWord.quotes;
    question_html.innerHTML = randomWord.question;
    randAnswer = randomWord.answer;
    console.log("answer", randAnswer);
    displayGuessWordinAnswer(randAnswer, "");
}

document.onkeyup = function (event) {
    const mykey = event.key.toLowerCase();
    document.getElementById("errorMsg").style.display = "none";
    if (refresh) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var y = "";
            var z = "";
            if (guess_score >= 0) {
                displayGuessedLetters(mykey);
                displayGuessWordinAnswer(randAnswer, mykey);
            }

            if (guess_score == 0 || answer.indexOf("_") < 0) {
                if (guess_score == 0) {
                    loss_score++;
                    x = failureImages[Math.floor(Math.random() * failureImages.length)];
                }
                if (answer.indexOf("_") < 0) {
                    win_score++;
                    x = successImages[Math.floor(Math.random() * successImages.length)];
                }
                guess_score = 15;
                scoreImg_html.src = x;
                scoreImg_html.style.display = "";
                document.getElementById("guesscol").style.display = "none";
                document.getElementById("answerCol").style.display = "none";
                setTimeout(updatePage, 3000);
            
            }
            if ((win_score >= 10) || (loss_score >= 10)) {
                if (win_score >= 10) {
                    z = "You deserve the Triwizard Cup";
                    y = "assets/images/Winner_Cup.gif";
                }
                if (loss_score >= 10) {
                    z = "Better Luck Next Time";
                    y = "assets/images/BetterLuckNextTime.gif";

                }
                document.getElementById("winner_Loser_msg").innerHTML = z;
                scoreImg_html.src = y;
                scoreImg_html.style.display = "";
                win_html.innerHTML = win_score;
                loss_html.innerHTML = loss_score;
                document.getElementById("guesscol").style.display = "none";
                document.getElementById("answerCol").style.display = "none";
                refresh = false;
            }
            
        }
    }
}

function displayGuessedLetters(pressedKey) {
    if (guessedletter.indexOf(pressedKey) < 0) {
        if (guessedletter != "") {
            guessedLetters_html.innerHTML += " , ";
        }
        guessedletter += pressedKey;
        guess_score--;
        guess_html.innerText = guess_score;
        guessedLetters_html.innerHTML += pressedKey;
    }
    else {
        document.getElementById("errorMsg").style.display = "";
    }

}

function displayGuessWordinAnswer(randAnswer, pressedKey) {
    if (pressedKey != "") {
        for (var randLetter in randAnswer) {
            if (randAnswer[randLetter].toLowerCase() == pressedKey) {
                answer[randLetter] = randAnswer[randLetter];
            }
        }
    }
    else {
        for (var randLetter in randAnswer) {
            if (randAnswer[randLetter] == " ") {
                answer.push(" ");
            }
            else {
                answer.push("_");
            }
        }
    }
    answer_html.innerHTML = "";
    for (var letter in answer) {
        answer_html.innerHTML += "&nbsp;" + answer[letter] + "&nbsp;";
    }
}




