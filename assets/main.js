document.getElementById("head").addEventListener("click", (e) => {
    document.getElementById("userChoice").innerHTML =
      document.getElementById("head").innerHTML;
  });
  document.getElementById("tail").addEventListener("click", (e) => {
    document.getElementById("userChoice").innerHTML =
      document.getElementById("tail").innerHTML;
  });
  
  function compChoice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function theAnswer(head, tail) {
    return Math.floor(Math.random() * (tail - head)) + head;
  }
  
  function findWinner() {
    let userCount = 0;
    let compCount = 0;
    if (useranswer !== answer) {
      if (useranswer < compChoice) {
        compCount += 1;
      } else if (useranswer > compChoice) {
        userCount += 1;
      }
    } else {
      userCount += 0;
      compCount += 0;
    }
  
    if (userCount > compCount) {
      document.getElementById("winner").innerHTML = "You Win!";
    } else if (userCount < compCount) {
      document.getElementById("winner").innerHTML = "You Loose!";
    } else {
      document.getElementById("winner").innerHTML = "Its A Tie!";
    }
    console.log(userCount, compCount);
    return userCount, compCount;
  }
  
  function guess() {
    // user choice
    useranswer = document.getElementById("userChoice").innerHTML;
    // Computer Choice
    compChoice();
    let cChoice = compChoice(1, 3);
    switch (cChoice) {
      case 1:
        comp = "Head";
        break;
      case 3:
        comp = "Tail";
        break;
    }
    document.getElementById("compChoice").innerHTML = comp;
    // Correct Answer
    theAnswer();
    let ans = theAnswer(3, 5);
    switch (ans) {
      case 3:
        answer = "Head";
        break;
      case 5:
        answer = "Tail";
        break;
    }
    document.getElementById("answer").innerHTML = answer;
  
    return useranswer, compChoice, theAnswer;
  }
  
  function coinToss() {
    guess();
    //   calculate winner
    findWinner();
  }