
      var randomNumber1, randomNumber2;
    
      function randomNumber() {
        // Generate two random numbers between 1 and 6 (like dice rolls)
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
        // Set the images based on the random number
        var image1 = document.getElementsByClassName("img1")[0];
        var image2 = document.getElementsByClassName("img2")[0];
    
        // Assuming you have images named "dice1.png", "dice2.png", etc.
        image1.src = "images/dice" + randomNumber1 + ".png";
        image2.src = "images/dice" + randomNumber2 + ".png";
    
        // Call winLost to determine the winner
        winLost(randomNumber1, randomNumber2);
      }
    
      function changeImage1() {
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var image1 = document.getElementsByClassName("img1")[0];
        image1.src = "images/dice" + randomNumber1 + ".png";
    
        // Check winner after updating Player 1's image
        winLost(randomNumber1, randomNumber2);
      }
    
      function changeImage2() {
        randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var image2 = document.getElementsByClassName("img2")[0];
        image2.src = "images/dice" + randomNumber2 + ".png";
    
        // Check winner after updating Player 2's image
        winLost(randomNumber1, randomNumber2);
      }
    
      function winLost(randomNumber1, randomNumber2) {
        var nameTag = document.getElementsByClassName("nametag")[0];
    
        if (randomNumber1 === randomNumber2) {
          nameTag.textContent = "It's a tie!";
        } else if (randomNumber1 > randomNumber2) {
          nameTag.textContent = "Player 1 wins!";
        } else if(randomNumber1 < randomNumber2){
          nameTag.textContent = "Player 2 wins!";
        }
        else{
            nameTag.textContent="Click The Dice"
        }
      }
    
      // Set up the page when it loads
      window.onload = function() {
        var image1 = document.getElementsByClassName("img1")[0];
        var image2 = document.getElementsByClassName("img2")[0];
    
        // Assign the onclick events
        image1.onclick = changeImage1;
        image2.onclick = changeImage2;
    
        // Initialize with random numbers and images
        // randomNumber();
      }
