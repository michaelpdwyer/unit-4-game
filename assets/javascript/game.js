var targetScore = 0; // Target score
var pointsSoFar = 0; // Running total
var bluePoints = 0; // Blue gem points
var redPoints = 0; // Red gem points
var purplePoints = 0; // Purple gem points
var greenPoints = 0; // Green gem points
var numWins = 0; // Total wins
var numLosses = 0; // Total losses
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Game logic
$(document).ready(function () {
    // Display a random target score (between 19 and 120)
    targetScore = getRandomNum(19, 120);
    $("#targetScore").text(targetScore);
    // Start the game
    function startGame() {
        pointsSoFar = 0;
        $("#runningScore").text(pointsSoFar);
        targetScore = getRandomNum(19, 120);
        $("#targetScore").text(targetScore);
        bluePoints = 0;
        redPoints = 0;
        purplePoints = 0;
        greenPoints = 0;
    }
    startGame();

    function checkWin() {
        if (pointsSoFar === targetScore) {
            alert("You won! Well done.");
            numWins++;
            $("#wins").text("Wins: " + numWins);
            startGame();
        } else if (pointsSoFar > targetScore) {
            alert("You lost. Play again!");
            numLosses++;
            $("#losses").text("Losses: " + numLosses);
            startGame();
        }
    }
    // Assign a random value between 1 and 12 to each gem
    // Click event for red gem
    $("#red").on("click", function () {
        if (redPoints === 0) {
            redPoints = getRandomNum(1, 12);
        }
        pointsSoFar += redPoints;
        $("#runningScore").text(pointsSoFar);
        checkWin();
    });
    // Click event for blue gem
    $("#blue").on("click", function () {
        if (bluePoints === 0) {
            bluePoints = getRandomNum(1, 12);
        }
        pointsSoFar += bluePoints;
        $("#runningScore").text(pointsSoFar);
        checkWin();
    });
    // Click event for green gem
    $("#green").on("click", function () {
        if (greenPoints === 0) {
            greenPoints = getRandomNum(1, 12);
        }
        pointsSoFar += greenPoints;
        $("#runningScore").text(pointsSoFar);
        checkWin();
    });
    // Click event for purple gem
    $("#purple").on("click", function () {
        if (purplePoints === 0) {
            purplePoints = getRandomNum(1, 12);
        }
        pointsSoFar += purplePoints;
        $("#runningScore").text(pointsSoFar);
        checkWin();
    });
});