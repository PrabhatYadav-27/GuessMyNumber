'use strict';
/*
console.log(document.querySelector('.message').textContent); //getting the context of element
document.querySelector('.message').textContent = 'Correct Number!';

//manipulating the score and number
document.querySelector('.number').textContent  ='15';
document.querySelector('.score').textContent = '25';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// define a secret number
let SecretNumber =Math.trunc(Math.random() *20 +1);
//keep the score 
let Score =20;
let HighScore = 0; 
//below line to show the secret number

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number((document.querySelector('.guess').value));
    console.log(guess);

//when no input
    if(!guess){
         document.querySelector('.message').textContent ='No Number ! Please Provide a Input.';
    }
    //winning time
    else if(guess===SecretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('.number').textContent =SecretNumber;
        //changing bg color while player win
        document.querySelector('body').style.backgroundColor ='#60b347';

        document.querySelector('.number').style.width='30 rem';

        //setting the hight score
        if(Score > HighScore){
            HighScore =Score;
            document.querySelector('.highscore').textContent = HighScore;
        }
    }
    //number is greater than expected
    else if( guess > SecretNumber){
        if(Score > 0){
            document.querySelector('.message').textContent ='Number Is Too High!';
            Score--;
            document.querySelector('.score').textContent= Score;
        }else{
            document.querySelector('.message').textContent='You Lost The Game';
        }
       
    }
    //number is less than expected
    else if(guess < SecretNumber){
        if(Score > 1){
            document.querySelector('.message').textContent ='Number Is Too Low!';
        Score--;
        document.querySelector('.score').textContent =Score;

        }else{
            document.querySelector('.message').textContent='You Lost The Game';
            document.querySelector('.score').textContent=0;
        }
        
    }

});

//reseting the game

document.querySelector('.again').addEventListener('click',function(){
    Score = 20;
    SecretNumber =Math.trunc(Math.random() *20 +1);

    document.querySelector('.message').textContent ='Start Guessing...';
    document.querySelector('.score').textContent = Score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value ='';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

