// Hangman game words object containing guess questions, guess images, guess Quotes and thier answers
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

// If user guessed correctly, display images link
let successImages = ["assets/images/Sucess/Blow_my_mind.gif", "assets/images/Sucess/clapping.gif", "assets/images/Sucess/Thumbs_Up.gif",
    "assets/images/Sucess/hat_tipping.gif", "assets/images/Sucess/Wizard_Rainbow.gif", "assets/images/Sucess/dancing.gif"];

// If user guessed wrongly, display images link
let failureImages = ["assets/images/Failure/Burning.gif", "assets/images/Failure/Facepalm3.gif", "assets/images/Failure/Facepalm.gif", "assets/images/Failure/Falldown.gif",
    "assets/images/Failure/Noooooo.gif", "assets/images/Failure/nope.gif"];


// Declare global variables and also defining some of the commonly used html elements 
let guess_score;
let win_score;
let loss_score;
let answer;
let guessedletter;
let refresh = false;

var hpmusic = document.getElementById("hpmusic");
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
let hp_pause_music = document.getElementById("hpPauseMusic");
var hpmusicpause = true;
var randAnswer = "";

// ----Initialize function runs on body onload -------//
function initialize() {
    //  At start do not display content or music button
    main_html.style.display = "none";
    hp_pause_music.style.display = "none";
}
// ---- End Initialize function -------//

// ---- Music button On click function-------//
// At start music will not be played
hp_pause_music.onclick = function () {
    // If user press the button with text Play Music, then play the music from the beginning
    if (hp_pause_music.innerText == "Play Music") {
        hpmusic.currentTime = 0;
        hpmusic.play();
        hpmusicpause = false;
        hp_pause_music.innerText = "Pause Music";
    }
    // If user press the button with text Pause Music, then pause the music
    else if (hp_pause_music.innerText == "Pause Music") {
        hpmusic.pause();
        hpmusicpause = true;
        hp_pause_music.innerText = "Play Music";
    }
};
// ---- End of Music button On click function-------//

// ---- Start / Reset button On click function-------//
reset_btn.onclick = function () {
    // If user opted to Pause the Music then do not play it
    if (hpmusicpause == true) {
        hpmusic.pause();
    }
    // If user opted to Play the Music then play it from the beginning
    else if (hpmusicpause != true) {
        hpmusic.currentTime = 0;
        hpmusic.play();
    }
    // Start the game and have all the scores variable to starting point
    refresh = true;
    document.getElementById("errorMsg").style.display = "none";
    hp_pause_music.style.display = "";
    document.getElementById("winner_Loser_msg").innerHTML = "";
    main_html.style.display = "";
    reset_btn.innerHTML = "Start a new Game";
    win_score = 0;
    loss_score = 0;
    guess_score = 15;
    updatePage();
};
// ---- End of Music button On click function-------//

// ---- Update Page with current scores taken from global variables after each question is done  -------// 
function updatePage() {

    if (refresh) {
        answer = [];
        guessedletter = "";
        win_html.innerHTML = win_score;
        loss_html.innerHTML = loss_score;
        guess_html.innerHTML = guess_score;
        scoreImg_html.style.display = "none";
        document.getElementById("correctAnswer").style.display = "none";
        document.getElementById("guesscol").style.display = "";
        document.getElementById("answerCol").style.display = "";
        guessedLetters_html.innerHTML = guessedletter;

        // If user opted to Pause the Music then do not play it
        if (hpmusicpause == true) {
            hpmusic.pause();
        }
        // If user opted to Play the Music then play it from the beginning
        else if (hpmusicpause != true) {
            hpmusic.currentTime = 0;
            hpmusic.play();
        }

        //After updating scores, now display the next random guess
        setRandomWord();
    }
}
// ---- End of Update Page function-------//

// ---- Choose a random word from the Words array and show question, quotes and guess Image-------// 
function setRandomWord() {

    var randomWord = words[Math.floor(Math.random() * words.length)];
    // var randomWord = words[4];
    main_html.style.display = "";
    guessImg_html.src = randomWord.picture;
    quotes_html.innerHTML = randomWord.quotes;
    question_html.innerHTML = randomWord.question;
    randAnswer = randomWord.answer;
    console.log("answer", randAnswer);
    // pass the random answer to below function to display the guess word in dashes formatand
    displayGuessWordinAnswer(randAnswer, "");
}
// ---- End of Random word function ------// 

// ---- When user press any key in the keyboard-------// 
document.onkeyup = function (event) {

    const mykey = event.key.toLowerCase();
    // if any error message is showing in screen then hide it
    document.getElementById("errorMsg").style.display = "none";
    // If the page is set to refresh and entered key is between a-z 
    if (event.keyCode >= 65 && event.keyCode <= 90 && refresh) {
        // If user have guesses left
        if (guess_score >= 0) {
            // display the pressed ley under guessed letters section
            displayGuessedLetters(mykey);
            // pass the current random answer value and guessed letter for checking and displaying it in page
            displayGuessWordinAnswer(randAnswer, mykey);
        }
        // End of if (guess_score >= 0) 

        // If user runs out of guess limit or if all the letters in the answer is shown 
        if (guess_score == 0 || answer.indexOf("_") < 0) {
            hpmusic.pause();
            var winner_loser_music = document.getElementById("winner_Loser_music");

            // If user runs out of guess limit, increase loss score
            if (guess_score == 0) {
                loss_score++;
                //play failure sound and also select a random Failure Image and show in page 
                x = failureImages[Math.floor(Math.random() * failureImages.length)];
                winner_loser_music.src = "assets/images/NoDear.mp3";
            }

            // If user guess the answer correctly, increase win score
            if (answer.indexOf("_") < 0) {
                win_score++;
                //play success sound and also select a random Success Image and show in page 
                winner_loser_music.src = "assets/images/Hurray.mp3";
                x = successImages[Math.floor(Math.random() * successImages.length)];
            }
            winner_loser_music.play();
            guess_score = 15;
            scoreImg_html.src = x;
            scoreImg_html.style.display = "";
            //Display correct answer and clear the screen till it is displayed
            document.getElementById("correctAnswer").innerHTML = "The correct Answer is " + randAnswer;
            document.getElementById("correctAnswer").style.display = "";
            document.getElementById("guesscol").style.display = "none";
            document.getElementById("answerCol").style.display = "none";
            //Wait for 3 seconds for success or failure status and then update the page to new random letter
            setTimeout(updatePage, 3000);

        }
        // End of if (guess_score == 0 || answer.indexOf("_") < 0)

        // If user win or loss score is greater then equal to 10, then have to end the game 
        if ((win_score >= 10) || (loss_score >= 10)) {
            
            var winORlossMsg = "";
            var winORlossImg = "";
            hpmusic.pause();
            // If user wins, then display win Message and Image
            if (win_score >= 10) {
                winORlossMsg = "You deserve the Triwizard Cup";
                winORlossImg = "assets/images/Winner_Cup.gif";
            }
            
            // If user loses, then display loss Message and Image
            if (loss_score >= 10) {
                winORlossMsg = "Better Luck Next Time";
                winORlossImg = "assets/images/BetterLuckNextTime.gif";

            }

            document.getElementById("winner_Loser_msg").innerHTML = winORlossMsg;
            scoreImg_html.src = winORlossImg;
            scoreImg_html.style.display = "";
            win_html.innerHTML = win_score;
            loss_html.innerHTML = loss_score;
            document.getElementById("guesscol").style.display = "none";
            document.getElementById("answerCol").style.display = "none";
            refresh = false;
        }
        // End of if ((win_score >= 10) || (loss_score >= 10))
    }

}

// ---- End of Key Up function ------// 

// ---- Fucntion to display Guessed Letters in page------// 
function displayGuessedLetters(pressedKey) {
    // user entered a new guess letter 
    if (guessedletter.indexOf(pressedKey) < 0) {
        // if any guessed letters already exsist, then add "," at the end to seperate guessed letters
        // if there are no guessed already exsisting then this is the first guess letter and we should not add ","
        if (guessedletter != "") {
            guessedLetters_html.innerHTML += " , ";
        }

        // user lost a guess so reduce guess score by one and display guessed letter in page 
        guessedletter += pressedKey;
        guess_score--;
        guess_html.innerText = guess_score;
        guessedLetters_html.innerHTML += pressedKey;
    }
    // if user has already guessed this letter, then display error messagea
    else {
        document.getElementById("errorMsg").style.display = "";
    }

}
// ---- End of Guessed letter function ------// 

// ---- Fucntion to replace dashes with Guessed Letters in answer ------// 
function displayGuessWordinAnswer(randAnswer, pressedKey) {
    // if user has pressed a key
    if (pressedKey != "") {
        // Go through the answer to see if you have the pressed key in answer
        for (var randLetter in randAnswer) {
            if (randAnswer[randLetter].toLowerCase() == pressedKey) {
                // if letter is present then replace dashes in the answer with that letter
                answer[randLetter] = randAnswer[randLetter];
            }
        }
    }
    // if pressed key is not passed, then there is no answer displayed so far 
    else {
        // Go through the rand answer and replace the answer letter with dashes and space with spaces
        for (var randLetter in randAnswer) {
            if (randAnswer[randLetter] == " ") {
                answer.push(" ");
            }
            else {
                answer.push("_");
            }
        }
    }
    
    // Once we have the answer filled with dashes or letters, 
    //Add white space between each letter and display to user
    answer_html.innerHTML = "";
    for (var letter in answer) {
        answer_html.innerHTML += "&nbsp;" + answer[letter] + "&nbsp;";
    }
}

// ---- End of Guessed letter in answer function ------// 



