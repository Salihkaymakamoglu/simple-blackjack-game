
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard() {
    
    let randomNumber=Math.floor(Math.random()*13) + 1
    if(randomNumber>10){
        return 10
    }
    else if (randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }
}
if(isAlive===false){
    function startGame(){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards=[firstCard,secondCard]
        sum=firstCard+secondCard
        isAlive=true
        hasBlackjack=false
        renderGame()
    }
}


function renderGame(){

    cardEl.textContent = "CARDS: "

    for(let i=0 ; i<cards.length ; i+=1){
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "SUM: " + sum
    

    if(sum <= 20) {
        message ="do you want to draw a new card?"
    } 

    else if(sum === 21){
        message="BLACKJACK!!!"
        hasBlackjack = true
        isAlive=false
    } 

    else {
        message="you are out of the game :("
        isAlive = false
    }

    messageEl.textContent = message 

}

function newCard(){
    
    if( isAlive=== true && hasBlackjack === false){
        console.log("drawing new card")
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
    renderGame()
}
}
