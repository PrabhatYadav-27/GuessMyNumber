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
const SecretNumber =Math.trunc(Math.random() *20 +1);
//keep the score 
let Score =20; 
//below line to show the secret number
document.querySelector('.number').textContent =SecretNumber;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number((document.querySelector('.guess').value));
    console.log(guess);

    if(!guess){
         document.querySelector('.message').textContent ='No Number ! Please Provide a Input.';
    }else if(guess===SecretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
    }else if( guess > SecretNumber){
        if(Score > 0){
            document.querySelector('.message').textContent ='Number Is Too High!';
            Score--;
            document.querySelector('.score').textContent= Score;
        }else{
            document.querySelector('.message').textContent='You Lost The Game';
        }
       
    }else if(guess < SecretNumber){
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

