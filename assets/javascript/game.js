
var music = document.getElementById("hpmusic");

let words = [
    {
        id: 01,
        question: "The boy who lived",
        answer: "Harry Potter",
        quotes: "Sorry, Professor, but I must not tell lies.",
        picture: "assets/images/Guess_Images/Harry_Potter.jpg"
    },
    {
        id: 02,
        question: "The cleverest witch of your age",
        answer: "Hermione Granger",
        quotes: "It's leviOsa, not levioSA!",
        picture: "assets/images/Guess_Images/Hermoine_Granger.jpg"
    },
    {
        id: 03,
        question: "Harry's best friend and youngest Weasley son",
        answer: "Ronald Weasley",
        quotes: "'Of all the trees we could’ve hit, we had to get one that hits back.'",
        picture: "assets/images/Guess_Images/Ron_Weasley.jpg"
    },
    {
        id: 04,
        question: "The half-giant Hogwarts gamekeeper loves all creatures",
        answer: "Rubeus Hagrid",
        quotes: "Harry -- yer a wizard.",
        picture: "assets/images/Guess_Images/Hagrid.jpg"
    },
    {
        id: 05,
        question: "Harry’s devoted pet owl",
        answer: "Hedwig",
        quotes: "Tapping at the Window",
        picture: "assets/images/Guess_Images/Hedwig-Image.jpg"
    }

];
 
let guess_score;
let win_score;
let loss_score;
let lives_score;
let answer = [];
let guessedletter = "";


let lives_html = document.getElementById("lives");
let win_html = document.getElementById("win");
let loss_html = document.getElementById("loss");
let guess_html = document.getElementById("guess");
let main_html = document.getElementById("main-content");
let guessImg_html = document.getElementById("guessImg");
let question_html = document.getElementById("question");
let answer_html = document.getElementById("answer");
let guessedLetters_html =  document.getElementById("guessedLetters");
let quotes_html =   document.getElementById("quotes");
let successImg_html = document.getElementById("successImg");
let reset_btn = document.getElementById("resetBtn");

function initialize ()
{
//     main_html.style.display = "none"; 
//     // music.play();
// }

// reset_btn.onclick = function()
// {
    // alert("Okay let's start the game");
    document.getElementById("errorMsg").style.display ="none";
    main_html.style.display = "";
    reset_btn.innerHTML = "Refresh";
    updateScore(0,0,10,5);    
    updateGuessobjects();
};

function updateGuessobjects()
{
    // var randomWord = words[Math.floor(Math.random() * words.length)];
    var randomWord = words[4];
    guessImg_html.src = randomWord.picture;
    quotes_html.innerHTML = randomWord.quotes;
    randAnswer = randomWord.answer;
    guessedletter ="";
    console.log("answer", randAnswer);
    displayGuessWord(randAnswer,"");
}

function displayGuessWord(randAnswer, pressedKey) {
    if(pressedKey != "") {
        for (var randLetter in randAnswer) {
            if(randAnswer[randLetter].toLowerCase() == pressedKey)
            {
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

    console.log("answer ", answer);
    answer_html.innerHTML = "";
    for (var letter in answer) {
        answer_html.innerHTML += "&nbsp;" + answer[letter] + "&nbsp;";
    }


}

document.onkeyup = function (event) {
    const mykey = event.key.toLowerCase();
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        document.getElementById("errorMsg").style.display ="none";
        console.log("pressed Key", mykey);
        if (guessedletter.indexOf(mykey) < 0) {

            if (guessedletter != "") {
                guessedLetters_html.innerHTML += " , ";
            }
            guessedletter += mykey;
            guessedLetters_html.innerHTML += mykey;
        }
        else {
            document.getElementById("errorMsg").style.display ="";
        }


        displayGuessWord(randAnswer, mykey);
    }
    // if(randAnswer.split('') == answer)
    // {
    //     successImg_html.src = "assets/images/Sucess/Success.gif"; 
    // }  
}

    // successImg_html.src = "assets/images/Sucess/Success.gif";

function updateScore (win,loss,guess,lives)
{
    win_score = win ;
    loss_score = loss;
    guess_score = guess;
    lives_score = lives;
    win_html.innerHTML = win;
    loss_html.innerHTML = loss;
    lives_html.innerHTML = lives;
    guess_html.innerHTML = guess;
}

