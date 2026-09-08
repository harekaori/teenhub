// ============================================================
// TEEN HUB — MATH LAB GAME ENGINE
// ============================================================


// ============================================================
// CHALLENGE DATA
// ============================================================

const mathChallenges = {

    // --------------------------------------------------------
    // NUMBER PATTERNS
    // --------------------------------------------------------

    patterns: {

        1: [
            {
                question: "What comes next?",
                display: "2   4   6   8   ?",
                options: [9, 10, 11, 12],
                answer: 10,
                explanation: "The numbers increase by 2 each time."
            },
            {
                question: "What comes next?",
                display: "5   10   15   20   ?",
                options: [22, 24, 25, 30],
                answer: 25,
                explanation: "The numbers increase by 5 each time."
            },
            {
                question: "What comes next?",
                display: "10   20   30   40   ?",
                options: [45, 50, 55, 60],
                answer: 50,
                explanation: "The numbers increase by 10 each time."
            },
            {
                question: "What comes next?",
                display: "1   3   5   7   ?",
                options: [8, 9, 10, 11],
                answer: 9,
                explanation: "The numbers increase by 2 each time."
            }
        ],

        2: [
            {
                question: "What comes next?",
                display: "3   6   9   12   ?",
                options: [13, 15, 16, 18],
                answer: 15,
                explanation: "The numbers increase by 3 each time."
            },
            {
                question: "What comes next?",
                display: "4   8   12   16   ?",
                options: [18, 20, 22, 24],
                answer: 20,
                explanation: "The numbers increase by 4 each time."
            },
            {
                question: "What comes next?",
                display: "20   25   30   35   ?",
                options: [38, 40, 42, 45],
                answer: 40,
                explanation: "The numbers increase by 5 each time."
            },
            {
                question: "What comes next?",
                display: "50   45   40   35   ?",
                options: [25, 30, 32, 40],
                answer: 30,
                explanation: "The numbers decrease by 5 each time."
            }
        ],

        3: [
            {
                question: "What comes next?",
                display: "3   6   12   24   ?",
                options: [36, 42, 48, 54],
                answer: 48,
                explanation: "Each number is doubled."
            },
            {
                question: "What comes next?",
                display: "2   4   8   16   ?",
                options: [24, 30, 32, 36],
                answer: 32,
                explanation: "Each number is multiplied by 2."
            },
            {
                question: "What comes next?",
                display: "100   50   25   12.5   ?",
                options: [5, 6.25, 7.5, 10],
                answer: 6.25,
                explanation: "Each number is divided by 2."
            },
            {
                question: "What comes next?",
                display: "5   10   20   40   ?",
                options: [60, 70, 80, 100],
                answer: 80,
                explanation: "Each number is doubled."
            }
        ],

        4: [
            {
                question: "What comes next?",
                display: "2   5   10   17   26   ?",
                options: [35, 36, 37, 38],
                answer: 37,
                explanation:
                    "The differences are +3, +5, +7, +9. The next difference is +11."
            },
            {
                question: "What comes next?",
                display: "1   4   9   16   25   ?",
                options: [30, 32, 36, 40],
                answer: 36,
                explanation:
                    "These are square numbers: 1², 2², 3², 4², 5², 6²."
            },
            {
                question: "What comes next?",
                display: "3   7   13   21   31   ?",
                options: [41, 42, 43, 44],
                answer: 43,
                explanation:
                    "The differences are +4, +6, +8, +10. The next difference is +12."
            },
            {
                question: "What comes next?",
                display: "80   40   20   10   ?",
                options: [2, 4, 5, 8],
                answer: 5,
                explanation: "Each number is divided by 2."
            }
        ],

        5: [
            {
                question: "What comes next?",
                display: "2   6   12   20   30   ?",
                options: [36, 40, 42, 44],
                answer: 42,
                explanation:
                    "The differences are +4, +6, +8, +10. The next difference is +12."
            },
            {
                question: "What comes next?",
                display: "1   2   6   24   120   ?",
                options: [240, 360, 600, 720],
                answer: 720,
                explanation:
                    "Multiply by 2, then 3, then 4, then 5, then 6."
            },
            {
                question: "What comes next?",
                display: "2   3   5   8   13   ?",
                options: [18, 20, 21, 24],
                answer: 21,
                explanation:
                    "Each number is made by adding the previous two numbers."
            },
            {
                question: "What comes next?",
                display: "4   7   13   25   49   ?",
                options: [73, 85, 97, 101],
                answer: 97,
                explanation:
                    "Multiply by 2 and subtract 1 each time."
            }
        ]
    },


    // --------------------------------------------------------
    // SHAPES
    // --------------------------------------------------------

    shapes: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    },


    // --------------------------------------------------------
    // 3D SHAPES
    // --------------------------------------------------------

    threeD: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    },


    // --------------------------------------------------------
    // MATH PUZZLES
    // --------------------------------------------------------

    puzzles: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    }
};


// ============================================================
// CATEGORY INFORMATION
// ============================================================

const categoryInfo = {

    patterns: {
        name: "Number Patterns",
        icon: "🔢"
    },

    shapes: {
        name: "Shapes",
        icon: "🔷"
    },

    threeD: {
        name: "3D Shapes",
        icon: "🧊"
    },

    puzzles: {
        name: "Math Puzzles",
        icon: "🧩"
    }
};


// ============================================================
// GAME STATE
// ============================================================

let currentCategory = null;
let currentLevel = 1;
let currentChallenge = 0;
let score = 0;


// Highest level unlocked for each category

let progress = {

    patterns: 1,
    shapes: 1,
    threeD: 1,
    puzzles: 1

};


// ============================================================
// LOAD SAVED PROGRESS
// ============================================================

function loadProgress() {

    const savedProgress =
        localStorage.getItem("teenHubMathProgress");

    if (!savedProgress) {
        return;
    }

    try {

        const saved = JSON.parse(savedProgress);

        progress = {
            ...progress,
            ...saved
        };

    } catch (error) {

        console.log("Could not load Math Lab progress.");

    }
}


// ============================================================
// SAVE PROGRESS
// ============================================================

function saveProgress() {

    localStorage.setItem(
        "teenHubMathProgress",
        JSON.stringify(progress)
    );
}


// ============================================================
// START A CATEGORY
// ============================================================

function startCategory(category) {

    if (!mathChallenges[category]) {
        return;
    }

    currentCategory = category;

    currentLevel = progress[category];

    currentChallenge = 0;

    score = 0;

    showGameScreen();

    showChallenge();
}


// ============================================================
// GET CURRENT CHALLENGE
// ============================================================

function getCurrentChallenge() {

    if (!currentCategory) {
        return null;
    }

    const levelChallenges =
        mathChallenges[currentCategory][currentLevel];

    if (!levelChallenges) {
        return null;
    }

    return levelChallenges[currentChallenge];
}


// ============================================================
// SHOW CURRENT CHALLENGE
// ============================================================

function showChallenge() {

    const challenge = getCurrentChallenge();

    if (!challenge) {

        showEmptyLevel();

        return;
    }


    updateGameHeader();

    updateChallengeProgress();


    document.getElementById("question").textContent =
        challenge.question;


    document.getElementById("challenge-display").textContent =
        challenge.display;


    createAnswerButtons(challenge.options);

    hideFeedback();
}


// ============================================================
// CREATE ANSWER BUTTONS
// ============================================================

function createAnswerButtons(options) {

    const answerContainer =
        document.getElementById("answer-options");


    answerContainer.innerHTML = "";


    options.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "answer-button";

        button.textContent = option;

        button.addEventListener(
            "click",
            () => checkAnswer(option)
        );

        answerContainer.appendChild(button);

    });
}


// ============================================================
// CHECK ANSWER
// ============================================================

function checkAnswer(selectedAnswer) {

    const challenge =
        getCurrentChallenge();


    if (!challenge) {
        return;
    }


    if (selectedAnswer === challenge.answer) {

        score++;

        disableAnswerButtons();

        showCorrectFeedback(
            challenge.explanation
        );

    } else {

        showWrongFeedback();

    }
}


// ============================================================
// CORRECT ANSWER
// ============================================================

function showCorrectFeedback(explanation) {

    const feedback =
        document.getElementById("feedback");

    const icon =
        document.getElementById("feedback-icon");

    const message =
        document.getElementById("feedback-message");

    const explanationText =
        document.getElementById("feedback-explanation");

    const continueButton =
        document.getElementById("continue-button");


    icon.textContent = "🎉";

    message.textContent = "NICE!";

    explanationText.textContent =
        explanation;

    continueButton.hidden = false;

    feedback.classList.remove("wrong");

    feedback.classList.add("correct");

    feedback.hidden = false;
}


// ============================================================
// WRONG ANSWER
// ============================================================

function showWrongFeedback() {

    const feedback =
        document.getElementById("feedback");

    const icon =
        document.getElementById("feedback-icon");

    const message =
        document.getElementById("feedback-message");

    const explanationText =
        document.getElementById("feedback-explanation");

    const continueButton =
        document.getElementById("continue-button");


    icon.textContent = "🤔";

    message.textContent = "NOT QUITE";

    explanationText.textContent =
        "Have another look at the pattern and try again.";

    continueButton.hidden = true;

    feedback.classList.remove("correct");

    feedback.classList.add("wrong");

    feedback.hidden = false;
}


// ============================================================
// HIDE FEEDBACK
// ============================================================

function hideFeedback() {

    const feedback =
        document.getElementById("feedback");

    feedback.hidden = true;

}


// ============================================================
// DISABLE ANSWER BUTTONS
// ============================================================

function disableAnswerButtons() {

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(button => {

        button.disabled = true;

    });
}


// ============================================================
// NEXT CHALLENGE
// ============================================================

function nextChallenge() {

    const levelChallenges =
        mathChallenges[currentCategory][currentLevel];


    currentChallenge++;


    if (
        currentChallenge >=
        levelChallenges.length
    ) {

        completeLevel();

        return;
    }


    showChallenge();
}


// ============================================================
// COMPLETE LEVEL
// ============================================================

function completeLevel() {

    if (currentLevel < 5) {

        progress[currentCategory] =
            currentLevel + 1;

        saveProgress();

        showLevelComplete();

    } else {

        showCategoryComplete();

    }
}


// ============================================================
// UPDATE GAME HEADER
// ============================================================

function updateGameHeader() {

    const info =
        categoryInfo[currentCategory];


    document.getElementById("category-title").textContent =
        `${info.icon} ${info.name}`;


    document.getElementById("level-title").textContent =
        `LEVEL ${currentLevel}`;


    document.getElementById("level-stars").textContent =
        createStars(currentLevel);
}


// ============================================================
// UPDATE CHALLENGE PROGRESS
// ============================================================

function updateChallengeProgress() {

    const levelChallenges =
        mathChallenges[currentCategory][currentLevel];


    const challengeNumber =
        document.getElementById("challenge-number");


    const progressDots =
        document.getElementById("challenge-progress");


    challengeNumber.textContent =
        `CHALLENGE ${currentChallenge + 1} / ${levelChallenges.length}`;


    progressDots.innerHTML = "";


    levelChallenges.forEach((_, index) => {

        const dot =
            document.createElement("span");

        dot.className = "math-progress-dot";


        if (index < currentChallenge) {

            dot.classList.add("done");

        } else if (index === currentChallenge) {

            dot.classList.add("active");

        }


        progressDots.appendChild(dot);

    });
}


// ============================================================
// CREATE LEVEL STARS
// ============================================================

function createStars(level) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        stars +=
            i <= level ? "★ " : "☆ ";

    }

    return stars.trim();
}


// ============================================================
// LEVEL COMPLETE SCREEN
// ============================================================

function showLevelComplete() {

    hideAllScreens();


    document.getElementById("level-complete")
        .hidden = false;


    document.getElementById("level-complete-title")
        .textContent = "🏆 LEVEL COMPLETE!";


    document.getElementById("level-complete-message")
        .textContent =
        `You cracked all 4 challenges. Score: ${score}/4`;


    document.getElementById("level-complete-stars")
        .textContent =
        createStars(currentLevel);


    const nextLevelButton =
        document.getElementById("next-level-button");


    nextLevelButton.hidden = false;

    nextLevelButton.textContent =
        `LEVEL ${currentLevel + 1} →`;
}


// ============================================================
// CATEGORY COMPLETE
// ============================================================

function showCategoryComplete() {

    hideAllScreens();


    document.getElementById("level-complete")
        .hidden = false;


    document.getElementById("level-complete-title")
        .textContent = "🏆 MATH MASTER!";


    document.getElementById("level-complete-message")
        .textContent =
        "You completed all 5 levels!";


    document.getElementById("level-complete-stars")
        .textContent =
        "★ ★ ★ ★ ★";


    document.getElementById("next-level-button")
        .hidden = true;
}


// ============================================================
// START NEXT LEVEL
// ============================================================

function startNextLevel() {

    if (currentLevel >= 5) {
        return;
    }


    currentLevel++;

    currentChallenge = 0;

    score = 0;


    showGameScreen();

    showChallenge();
}


// ============================================================
// RETURN TO MATH HOME
// ============================================================

function returnToMathHome() {

    hideAllScreens();

    document.getElementById("category-screen")
        .hidden = false;

    updateCategoryCards();
}


// ============================================================
// SHOW GAME SCREEN
// ============================================================

function showGameScreen() {

    hideAllScreens();

    document.getElementById("game-screen")
        .hidden = false;
}


// ============================================================
// HIDE ALL SCREENS
// ============================================================

function hideAllScreens() {

    document.getElementById("category-screen")
        .hidden = true;

    document.getElementById("game-screen")
        .hidden = true;

    document.getElementById("level-complete")
        .hidden = true;
}


// ============================================================
// EMPTY LEVEL
// ============================================================

function showEmptyLevel() {

    updateGameHeader();

    document.getElementById("question")
        .textContent =
        "This challenge is coming soon!";

    document.getElementById("challenge-display")
        .textContent = "🚧";

    document.getElementById("answer-options")
        .innerHTML = "";

    hideFeedback();
}


// ============================================================
// UPDATE CATEGORY CARDS
// ============================================================

function updateCategoryCards() {

    Object.keys(progress).forEach(category => {

        const progressElement =
            document.getElementById(
                `${category}-progress`
            );

        const levelElement =
            document.getElementById(
                `${category}-level`
            );


        if (progressElement) {

            progressElement.textContent =
                createStars(progress[category]);

        }


        if (levelElement) {

            levelElement.textContent =
                `LEVEL ${progress[category]}`;

        }

    });
}


// ============================================================
// PAGE INITIALISATION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadProgress();

        updateCategoryCards();


        // Category cards

        document
            .querySelectorAll(".math-category")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        const category =
                            card.dataset.category;

                        startCategory(category);

                    }
                );

            });


        // Back from game

        document
            .getElementById("game-back")
            .addEventListener(
                "click",
                returnToMathHome
            );


        // Continue after correct answer

        document
            .getElementById("continue-button")
            .addEventListener(
                "click",
                nextChallenge
            );


        // Next level

        document
            .getElementById("next-level-button")
            .addEventListener(
                "click",
                startNextLevel
            );


        // Return home

        document
            .getElementById("return-home-button")
            .addEventListener(
                "click",
                returnToMathHome
            );

    }
);
