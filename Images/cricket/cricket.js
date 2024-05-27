console.log("created by murtaza");

let buttons = document.querySelectorAll('.btn'); 
let comp_score = 0;
let user_score = 0;

let userScore = document.querySelector('#user');
let computerScore = document.querySelector('#comp');

let my_choice = document.querySelector('#my-choice');
let comp_choice = document.querySelector('#comp-choice');  

let high = document.querySelector('.high');
let reset = document.querySelector('#reset');



    


  buttons.forEach((button , idx) => {

    button.addEventListener('click', function(e) {

        randomNumber =  Math.floor(Math.random() * 11);

        my_choice.innerText = button.innerHTML;
        comp_choice.innerText = randomNumber;

        console.log(`you chouse ${button.innerHTML}`);
        console.log(`computer number is ${randomNumber}`)

        let turn0 = true;
        




        if (button.innerHTML != randomNumber) {

            console.log("you win");
            let num = e.target.innerText;
            user_score += parseInt(num); // add num to user_score
            console.log("Updated user score: ", user_score);
            userScore.innerText = user_score;
            
            

            }else{
                console.log("you lose");
                
                buttons.forEach((button) => {
                    button.disabled = true;
                });
    
            }




                    //reset function




                    let score = 0;

                    reset.addEventListener('click' , function(){
                    
                        if(score<user_score){
                            score = user_score;
                            high.innerText = score;
                        }else{}
                        
                        user_score = 0;
                        userScore.innerText = 0;
                        buttons.forEach((button) => {
                            button.disabled = false;
                        });
                    });




        })
    });
 


 




 

 

 

