```javascript
/* =========================================================
   TEEN HUB — MATH GAME ENGINE
   ---------------------------------------------------------
   This file controls:

   • Math questions
   • Levels
   • Challenge progression
   • Answer checking
   • Level unlocking
   • Saved progress

   The visual design will be handled later by math.html
   and style.css.
   ========================================================= */


/* =========================================================
   1. MATH CHALLENGES
   ========================================================= */

const mathChallenges = {

    /* -----------------------------------------------------
       NUMBER PATTERNS
       ----------------------------------------------------- */

    patterns: {

        /* ================= LEVEL 1 ================= */

        1: [

            {
                question: "What comes next?",
                display: "2   4   6   8   ?",
                options: ["9", "10", "11", "12"],
                answer: "10",
                explanation: "The numbers increase by 2 each time."
            },

            {
                question: "What comes next?",
                display: "5   10   15   20   ?",
                options: ["22", "24", "25", "30"],
                answer: "25",
                explanation: "The numbers increase by 5 each time."
            },

            {
                question: "What comes next?",
                display: "10   20   30   40   ?",
                options: ["45", "50", "55", "60"],
                answer: "50",
                explanation: "The numbers increase by 10 each time."
            },

            {
                question: "What comes next?",
                display: "1   3   5   7   ?",
                options: ["8", "9", "10", "11"],
                answer: "9",
                explanation: "The numbers increase by 2 each time."
            }

        ],


        /* ================= LEVEL 2 ================= */

        2: [

            {
                question: "What comes next?",
                display: "3   6   9   12   ?",
                options: ["13", "15", "16", "18"],
                answer: "15",
                explanation: "The pattern increases by 3 each time."
            },

            {
                question: "What comes next?",
                display: "4   8   12   16   ?",
                options: ["18", "20", "22", "24"],
                answer: "20",
                explanation: "The pattern increases by 4 each time."
            },

            {
                question: "What comes next?",
                display: "20   25   30   35   ?",
                options: ["38", "40", "42", "45"],
                answer: "40",
                explanation: "The pattern increases by 5 each time."
            },

            {
                question: "What comes next?",
                display: "50   45   40   35   ?",
                options: ["25", "30", "32", "40"],
                answer: "30",
                explanation: "The numbers decrease by 5 each time."
            }

        ],


        /* ================= LEVEL 3 ================= */

        3: [

            {
                question: "What comes next?",
                display: "3   6   12   24   ?",
                options: ["36", "42", "48", "54"],
                answer: "48",
                explanation: "Each number is doubled."
            },

            {
                question: "What comes next?",
                display: "2   4   8   16   ?",
                options: ["24", "30", "32", "36"],
                answer: "32",
                explanation: "Each number is multiplied by 2."
            },

            {
                question: "What comes next?",
                display: "100   50   25   12.5   ?",
                options: ["5", "6.25", "7.5", "10"],
                answer: "6.25",
                explanation: "Each number is divided by 2."
            },

            {
                question: "What comes next?",
                display: "5   10   20   40   ?",
                options: ["60", "70", "80", "100"],
                answer: "80",
                explanation: "Each number is doubled."
            }

        ],


        /* ================= LEVEL 4 ================= */

        4: [

            {
                question: "What comes next?",
                display: "2   5   10   17   26   ?",
                options: ["35", "36", "37", "38"],
                answer: "37",
                explanation: "The differences are +3, +5, +7, +9, so the next difference is +11."
            },

            {
                question: "What comes next?",
                display: "1   4   9   16   25   ?",
                options: ["30", "32", "36", "40"],
                answer: "36",
                explanation: "These are square numbers: 1², 2², 3², 4², 5², 6²."
            },

            {
                question: "What comes next?",
                display: "3   7   13   21   31   ?",
                options: ["41", "42", "43", "44"],
                answer: "43",
                explanation: "The differences increase by 2: +4, +6, +8, +10, then +12."
            },

            {
                question: "What comes next?",
                display: "80   40   20   10   ?",
                options: ["2", "4", "5", "8"],
                answer: "5",
                explanation: "Each number is divided by 2."
            }

        ],


        /* ================= LEVEL 5 ================= */

        5: [

            {
                question: "What comes next?",
                display: "2   6   12   20   30   ?",
                options: ["36", "40", "42", "44"],
                answer: "42",
                explanation: "The differences are +4, +6, +8, +10, so the next difference is +12."
            },

            {
                question: "What comes next?",
                display: "1   2   6   24   120   ?",
                options: ["240", "360", "600", "720"],
                answer: "720",
                explanation: "Each number is multiplied by the next counting number: ×2, ×3, ×4, ×5, then ×6."
            },

            {
                question: "What comes next?",
                display: "2   3   5   8   13   ?",
                options: ["18", "20", "21", "24"],
                answer: "21",
                explanation: "Each number is the sum of the two numbers before it."
            },

            {
                question: "What comes next?",
                display: "4   7   13   25   49   ?",
                options: ["73", "85", "97", "101"],
                answer: "97",
                explanation: "Each number is multiplied by 2, then 1 is subtracted."
            }

        ]

    },


    /* -----------------------------------------------------
       OTHER CATEGORIES
       -----------------------------------------------------

       These are intentionally empty for now.

       We will add them later without changing the
       game engine.
       ----------------------------------------------------- */

    shapes: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    },


    threeD: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    },


    puzzles: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    }

};


/* =========================================================
   2. CATEGORY INFORMATION
   ========================================================= */

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


/* =========================================================
   3. GAME STATE
   ========================================================= */

let currentCategory = null;

let currentLevel = 1;

let currentChallenge = 0;

let score = 0;


/*
   This records the highest level unlocked
   for each category.
*/

let progress = {

    patterns: 1,

    shapes: 1,

    threeD: 1,

    puzzles: 1

};


/* =========================================================
   4. LOAD SAVED PROGRESS
   ========================================================= */

function loadProgress() {

    const savedProgress =
        localStorage.getItem("teenHubMathProgress");


    if (savedProgress) {

        try {

            progress = JSON.parse(savedProgress);

        } catch (error) {

            console.log(
                "Could not load saved maths progress."
            );

        }

    }

}


/* =========================================================
   5. SAVE PROGRESS
   ========================================================= */

function saveProgress() {

    localStorage.setItem(
        "teenHubMathProgress",
        JSON.stringify(progress)
    );

}


/* =========================================================
   6. START A CATEGORY
   ========================================================= */

function startCategory(category) {

    /*
       Make sure the category exists.
    */

    if (!mathChallenges[category]) {

        console.log(
            "Unknown maths category:",
            category
        );

        return;

    }


    currentCategory = category;


    /*
       Start at the highest level
       the child has unlocked.
    */

    currentLevel = progress[category];


    currentChallenge = 0;


    score = 0;


    showGameScreen();

    showChallenge();

}


/* =========================================================
   7. GET CURRENT CHALLENGE
   ========================================================= */

function getCurrentChallenge() {

    const levelChallenges =
        mathChallenges[currentCategory][currentLevel];


    if (!levelChallenges ||
        levelChallenges.length === 0) {

        return null;

    }


    return levelChallenges[currentChallenge];

}


/* =========================================================
   8. SHOW CHALLENGE
   ========================================================= */

function showChallenge() {

    const challenge =
        getCurrentChallenge();


    /*
       If the level has no questions yet,
       show a message instead of causing
       a JavaScript error.
    */

    if (!challenge) {

        showEmptyLevel();

        return;

    }


    /*
       Update question.
    */

    const questionElement =
        document.getElementById("question");


    const displayElement =
        document.getElementById("challenge-display");


    if (questionElement) {

        questionElement.textContent =
            challenge.question;

    }


    if (displayElement) {

        displayElement.textContent =
            challenge.display || "";

    }


    /*
       Update category and level.
    */

    updateGameHeader();


    /*
       Create answer buttons.
    */

    createAnswerButtons(
        challenge.options
    );


    /*
       Update challenge number.
    */

    updateChallengeProgress();


    /*
       Hide previous feedback.
    */

    hideFeedback();

}


/* =========================================================
   9. CREATE ANSWER BUTTONS
   ========================================================= */

function createAnswerButtons(options) {

    const container =
        document.getElementById("answer-options");


    if (!container) {

        return;

    }


    /*
       Remove old buttons.
    */

    container.innerHTML = "";


    /*
       Create one button for each answer.
    */

    options.forEach(option => {

        const button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.textContent =
            option;


        /*
           Touch-friendly click event.
        */

        button.addEventListener(
            "click",
            function () {

                checkAnswer(option);

            }
        );


        container.appendChild(button);

    });

}


/* =========================================================
   10. CHECK ANSWER
   ========================================================= */

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


/* =========================================================
   11. CORRECT ANSWER
   ========================================================= */

function showCorrectFeedback(explanation) {

    const feedback =
        document.getElementById("feedback");


    const message =
        document.getElementById(
            "feedback-message"
        );


    const explanationElement =
        document.getElementById(
            "feedback-explanation"
        );


    const icon =
        document.getElementById(
            "feedback-icon"
        );


    if (feedback) {

        feedback.hidden = false;

    }


    if (icon) {

        icon.textContent = "🎉";

    }


    if (message) {

        message.textContent = "NICE!";

    }


    if (explanationElement) {

        explanationElement.textContent =
            explanation;

    }

}


/* =========================================================
   12. WRONG ANSWER
   ========================================================= */

function showWrongFeedback() {

    const feedback =
        document.getElementById("feedback");


    const message =
        document.getElementById(
            "feedback-message"
        );


    const explanation =
        document.getElementById(
            "feedback-explanation"
        );


    const icon =
        document.getElementById(
            "feedback-icon"
        );


    if (feedback) {

        feedback.hidden = false;

    }


    if (icon) {

        icon.textContent = "🤔";

    }


    if (message) {

        message.textContent =
            "NOT QUITE";

    }


    if (explanation) {

        explanation.textContent =
            "Have another look and try again.";

    }

}


/* =========================================================
   13. HIDE FEEDBACK
   ========================================================= */

function hideFeedback() {

    const feedback =
        document.getElementById("feedback");


    if (feedback) {

        feedback.hidden = true;

    }

}


/* =========================================================
   14. DISABLE ANSWERS AFTER CORRECT ANSWER
   ========================================================= */

function disableAnswerButtons() {

    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });

}


/* =========================================================
   15. NEXT CHALLENGE
   ========================================================= */

function nextChallenge() {

    currentChallenge++;


    const levelChallenges =
        mathChallenges[currentCategory][currentLevel];


    /*
       Have all four challenges been completed?
    */

    if (
        currentChallenge >=
        levelChallenges.length
    ) {

        completeLevel();

        return;

    }


    showChallenge();

}


/* =========================================================
   16. COMPLETE LEVEL
   ========================================================= */

function completeLevel() {

    /*
       Unlock the next level if there is one.
    */

    if (currentLevel < 5) {

        const nextLevel =
            currentLevel + 1;


        /*
           Only increase progress.
        */

        if (
            progress[currentCategory] <
            nextLevel
        ) {

            progress[currentCategory] =
                nextLevel;

        }


        saveProgress();


        showLevelComplete();

    } else {

        /*
           Level 5 has been completed.
        */

        showCategoryComplete();

    }

}


/* =========================================================
   17. UPDATE GAME HEADER
   ========================================================= */

function updateGameHeader() {

    const info =
        categoryInfo[currentCategory];


    const title =
        document.getElementById(
            "category-title"
        );


    const levelTitle =
        document.getElementById(
            "level-title"
        );


    const stars =
        document.getElementById(
            "level-stars"
        );


    if (title && info) {

        title.textContent =
            `${info.icon} ${info.name}`;

    }


    if (levelTitle) {

        levelTitle.textContent =
            `LEVEL ${currentLevel}`;

    }


    if (stars) {

        stars.textContent =
            createStars(currentLevel);

    }

}


/* =========================================================
   18. UPDATE CHALLENGE PROGRESS
   ========================================================= */

function updateChallengeProgress() {

    const element =
        document.getElementById(
            "challenge-number"
        );


    const progressElement =
        document.getElementById(
            "challenge-progress"
        );


    const levelChallenges =
        mathChallenges[currentCategory][currentLevel];


    if (element) {

        element.textContent =
            `CHALLENGE ${currentChallenge + 1} / ${levelChallenges.length}`;

    }


    if (progressElement) {

        let dots = "";


        levelChallenges.forEach(
            function (_, index) {

                if (index <= currentChallenge) {

                    dots += "● ";

                } else {

                    dots += "○ ";

                }

            }
        );


        progressElement.textContent =
            dots.trim();

    }

}


/* =========================================================
   19. CREATE LEVEL STARS
   ========================================================= */

function createStars(level) {

    let stars = "";


    for (let i = 1; i <= 5; i++) {

        if (i <= level) {

            stars += "★ ";

        } else {

            stars += "☆ ";

        }

    }


    return stars.trim();

}


/* =========================================================
   20. SHOW LEVEL COMPLETE
   ========================================================= */

function showLevelComplete() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "level-complete"
        );


    const message =
        document.getElementById(
            "complete-message"
        );


    const stars =
        document.getElementById(
            "complete-stars"
        );


    const nextButton =
        document.getElementById(
            "next-level-button"
        );


    if (screen) {

        screen.hidden = false;

    }


    if (message) {

        message.textContent =
            `You cracked all 4 challenges. Score: ${score}/4`;

    }


    if (stars) {

        stars.textContent =
            createStars(currentLevel);

    }


    if (nextButton) {

        nextButton.textContent =
            `LEVEL ${currentLevel + 1} →`;

    }

}


/* =========================================================
   21. SHOW CATEGORY COMPLETE
   ========================================================= */

function showCategoryComplete() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "level-complete"
        );


    const title =
        document.getElementById(
            "complete-title"
        );


    const message =
        document.getElementById(
            "complete-message"
        );


    const stars =
        document.getElementById(
            "complete-stars"
        );


    const nextButton =
        document.getElementById(
            "next-level-button"
        );


    if (screen) {

        screen.hidden = false;

    }


    if (title) {

        title.textContent =
            "🏆 MATH MASTER!";

    }


    if (message) {

        message.textContent =
            "You completed all 5 levels!";

    }


    if (stars) {

        stars.textContent =
            "★ ★ ★ ★ ★";

    }


    if (nextButton) {

        nextButton.hidden = true;

    }

}


/* =========================================================
   22. NEXT LEVEL
   ========================================================= */

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


/* =========================================================
   23. RETURN TO MATH HOME
   ========================================================= */

function returnToMathHome() {

    hideAllScreens();


    const categoryScreen =
        document.getElementById(
            "category-screen"
        );


    if (categoryScreen) {

        categoryScreen.hidden = false;

    }


    updateCategoryCards();

}


/* =========================================================
   24. SHOW GAME SCREEN
   ========================================================= */

function showGameScreen() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "game-screen"
        );


    if (screen) {

        screen.hidden = false;

    }

}


/* =========================================================
   25. HIDE ALL SCREENS
   ========================================================= */

function hideAllScreens() {

    const screens = [

        "category-screen",
        "game-screen",
        "level-complete"

    ];


    screens.forEach(id => {

        const element =
            document.getElementById(id);


        if (element) {

            element.hidden = true;

        }

    });

}


/* =========================================================
   26. SHOW EMPTY LEVEL
   ========================================================= */

function showEmptyLevel() {

    const question =
        document.getElementById(
            "question"
        );


    const display =
        document.getElementById(
            "challenge-display"
        );


    const answers =
        document.getElementById(
            "answer-options"
        );


    if (question) {

        question.textContent =
            "This challenge is coming soon!";

    }


    if (display) {

        display.textContent =
            "🚧";

    }


    if (answers) {

        answers.innerHTML = "";

    }

}


/* =========================================================
   27. UPDATE CATEGORY CARDS
   ========================================================= */

function updateCategoryCards() {

    Object.keys(progress).forEach(
        function (category) {

            const level =
                progress[category];


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
                    createStars(level);

            }


            if (levelElement) {

                levelElement.textContent =
                    `LEVEL ${level}`;

            }

        }
    );

}


/* =========================================================
   28. EVENT LISTENERS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Load saved progress.
        */

        loadProgress();


        /*
           Update category cards.
        */

        updateCategoryCards();


        /*
           Category buttons.
        */

        const categoryButtons =
            document.querySelectorAll(
                ".math-category"
            );


        categoryButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const category =
                            button.dataset.category;


                        startCategory(category);

                    }
                );

            }
        );


        /*
           Back button from game.
        */

        const backButton =
            document.getElementById(
                "game-back"
            );


        if (backButton) {

            backButton.addEventListener(
                "click",
                returnToMathHome
            );

        }


        /*
           Next challenge button.
        */

        const continueButton =
            document.getElementById(
                "continue-button"
            );


        if (continueButton) {

            continueButton.addEventListener(
                "click",
                nextChallenge
            );

        }


        /*
           Next level button.
        */

        const nextLevelButton =
            document.getElementById(
                "next-level-button"
            );


        if (nextLevelButton) {

            nextLevelButton.addEventListener(
                "click",
                startNextLevel
            );

        }


        /*
           Return to Math Lab.
        */

        const homeButton =
            document.getElementById(
                "return-home-button"
            );


        if (homeButton) {

            homeButton.addEventListener(
                "click",
                returnToMathHome
            );

        }

    }
);
```
