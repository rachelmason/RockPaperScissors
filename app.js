var pImage;
var cImage;
var choices=[
'rock',
'paper',
'scissors'
]
function randomChoice(){
    var randomDec= Math.random()*3
   var randomIndex= Math.floor(randomDec)
    return choices[randomIndex]
}
function play(playerChoice){
    var comChoice=randomChoice()
    picture(playerChoice,comChoice)
    var winner = false
if (playerChoice == 'paper' && comChoice == 'rock'){
    winner = true
}else if (playerChoice == 'rock' && comChoice == 'scissors'){
    winner=true
}else if(playerChoice == 'scissors' && comChoice == "paper"){
    winner = true
}

if (playerChoice == comChoice){
document.getElementById('outcome').innerHTML= "TIE"
winner = 'tie'
}

if(winner==true){
   document.getElementById('outcome').innerHTML= "WINNER"
}else if(winner==false){
   document.getElementById('outcome').innerHTML= "LOSER"
}

document.getElementById('player-choice').innerHTML= pImage
document.getElementById('com-choice').innerHTML= cImage

}

function picture(playerChoice,comChoice){
    if (playerChoice == 'rock'){
        pImage = `<i class="fa fa-hand-rock-o fa-2x" aria-hidden="true"></i>`
    }else if (playerChoice == 'scissors'){
        pImage = `<i class="fa fa-hand-scissors-o fa-2x" aria-hidden="true"></i>`
    }else if (playerChoice == 'paper'){
        pImage = `<i class="fa fa-hand-paper-o fa-2x" aria-hidden="true"></i>`
    }
    
    if (comChoice == 'rock'){
        cImage = `<i class="fa fa-hand-rock-o fa-2x" aria-hidden="true"></i>`
    }else if (comChoice == 'scissors'){
        cImage = `<i class="fa fa-hand-scissors-o fa-2x" aria-hidden="true"></i>`
    }else if (comChoice == 'paper'){
        cImage = `<i class="fa fa-hand-paper-o fa-2x" aria-hidden="true"></i>`
    }
    
}







