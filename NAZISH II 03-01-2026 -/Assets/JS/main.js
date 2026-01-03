 function rollDice() {
      const dice = document.getElementById("dice");

      // Rolling animation
      dice.textContent = "🎲";
      
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.textContent = randomNumber;
      }, 300);
    }