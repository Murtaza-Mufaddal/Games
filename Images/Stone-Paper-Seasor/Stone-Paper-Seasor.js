console.log("murtaza");

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector('#msg');


            //genrate random numbers(option);
const genCompChoice = () => {
    let option = ['Stone' , 'paper' , 'seasor'];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}



        //call Main logic
choices.forEach((choice , idx) =>{ 
    choice.addEventListener('click' , () => {

        const userChoice = choice.getAttribute('id'); //call our choise with id

        playGame(userChoice)
    })    
});





         

               //Main logic
const playGame = (userChoice) => {

    console.log(`you chouse ${userChoice}`)
    //genrate computer choice
    const compChoice = genCompChoice();
    console.log(`computer chouse ${userChoice}`);

    if(userChoice === compChoice){
        message.innerText = "Game was draw"
    }

    

    if(userChoice === compChoice){
        console.log("Game was draw")
        message.innerText = "Game was draw"
    } else{
        if(userChoice === 'Stone' && compChoice === 'seasor'){
            console.log("user won")
            message.innerText = "user won computer select seasor"
            userScore++;
            } else if(userChoice === 'seasor' && compChoice === 'paper'){
                console.log("user won")
                message.innerText = "user won computer select paper"
                userScore++;
                } else if(userChoice === 'paper' && compChoice === 'Stone'){
                    console.log("user won")
                    message.innerText = "user won computer select Stone"
                    userScore++;
                    } else{
                        console.log("computer won");
                        computerScore++;
                        message.innerText = "computer won"
                        }
                        
    }

                    //update score
    let user_Score = document.querySelector('#user-score');
    let computer_Score = document.querySelector('#comp-score');
    user_Score.innerText = userScore;
    computer_Score.innerText = computerScore;


}






            //reset buttom

reset.addEventListener('click' , () => {
    let reset = document.querySelector('#reset');
 location.href = ''
console.clear();
})




// } else {
//     let userWin = true;
//     if(userChoice === "Stone"){
//        userWin = compChoice === "paper" ? false : true;
//     } else if(userChoice === "paper"){
//         userWin = compChoice === "seasor" ? false : true;
//     } else{
//         userWin = compChoice === "Stone" ? false : true;
//     }
//     showWinner(); 

// }