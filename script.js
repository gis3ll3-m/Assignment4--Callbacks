document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll("figure");
    const computerImg = document.getElementById("comp-image");
    const resultText = document.getElementById("result-txt");

    const choices = ["rock", "paper", "scissors"];

    figures.forEach(figure => {
        figure.addEventListener("click", () => {

            clearSelection();
            figure.classList.add("selected");

            const playerChoice = figure.dataset.choice;
            startCompTurn(playerChoice);
        })
    })

    function clearSelection() {
        figures.forEach(fig => fig.classList.remove("selected"));
    }

    function startCompTurn(playerChoice) {

        let shuffleInterval = setInterval(() => {
            const randomI = Math.floor(Math.random() * 3);
            computerImg.src = `images/${choices[randomI]}.PNG`;
        }, 500);


        setTimeout(() => {
            clearInterval(shuffleInterval);

            const compChoice = choices[Math.floor(Math.random() * 3)];

            computerImg.src = `images/${compChoice}.PNG`;
            winner(playerChoice, compChoice);
        }, 3000);
    }
    function winner(player, comp) {

        if (player == comp) {
            resultText.textContent = "Tie! - Nobody wins :("
        } else if (
            (player == "rock" && comp == "scissors") ||
            (player == "scissors" && comp == "paper") ||
            (player == "paper" && comp == "rock")
        ) {
            resultText.textContent = "YOU WIN! :)"
        } else {
            resultText.textContent = "Computer Wins! :O"
        }
    }

})



