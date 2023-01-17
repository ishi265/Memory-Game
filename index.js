document.addEventListener("DOMContentLoaded", () => {
  const gameCards = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  let cardChosenID = []
  let cardChosenNAme = []
  let cardsWon = []
  const grid = document.querySelector(".grid");
  let myScore = document.querySelector(".score")
  let score = 0;


  function displayCards() {

    let sorted = gameCards.sort(() => 0.5 - Math.random());

    console.log(sorted)

    for (let i = 0; i < gameCards.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "/images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  function flipcard() {
    let cardID = this.getAttribute("data-id");

    cardChosenID.push(cardID)
    cardChosenNAme.push(gameCards[cardID].name)
    this.setAttribute("src", gameCards[cardID].img);

    if (cardChosenID.length == 2){
        setTimeout(checkSameCard, 400)
    }
    console.log(cardChosenID)
    console.log(cardChosenNAme)
  }

  function checkSameCard() {

    let selectCard = document.querySelectorAll('img')

    if (cardChosenID[0] == cardChosenID[1]){
        alert('you have chosen the same card')
        selectCard[cardChosenID[0]].setAttribute("src", "/images/blank.png")

    } else if (cardChosenNAme[0] == cardChosenNAme[1]){
        alert('they matched yey!!')
        selectCard[cardChosenID[0]].setAttribute("src", "/images/white.png")
        selectCard[cardChosenID[1]].setAttribute("src", "/images/white.png")
        selectCard[cardChosenID[0]].removeEventListener('click', flipcard)
        selectCard[cardChosenID[1]].removeEventListener('click', flipcard)
        score += 1; 
        cardsWon.push(cardChosenNAme)

        myScore.textContent = cardsWon.length;
    } else {
        alert('they are not a match!!!')
        selectCard[cardChosenID[0]].setAttribute("src", "/images/blank.png")
        selectCard[cardChosenID[1]].setAttribute("src", "/images/blank.png")
    }

    if(cardsWon.length === gameCards.length/2){
        alert('you have won ')
    }

    cardChosenID = []
    cardChosenNAme = []
  } 

  displayCards();
});
