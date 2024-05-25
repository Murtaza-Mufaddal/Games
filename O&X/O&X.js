console.log("murtaza")

let boxs = document.querySelectorAll('.box');
let reset = document.querySelector('#Reset');
let turn0 = true; //playerx , player0;
let turnX = false; //X , O

 userScore = 0;
 compScore = 0;

const winPatterns  = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];



const cheakWinner  = () =>{

    for(patterns of winPatterns){
        console.log(patterns[0] , patterns[1] , patterns[2]);
        console.log(boxs[patterns[0]].innerText , boxs[patterns[1]].innerText , boxs[patterns[2]].innerText);

        let pos1 =  boxs[patterns[0]].innerText
        let pos2 = boxs[patterns[1]].innerText
        let pos3 = boxs[patterns[2]].innerText

        

if(pos1 != "" && pos2 != "" && pos3 != "" ){

            if(pos1 === pos2 && pos2 === pos3){

                boxs.forEach(box  => {
                    box.innerText = '';
                    box.disabled = false; 
                });

                
                console.log('winner is ' + pos1);

        alert("winer" + pos1);
        newDiv(`The Winner is "${pos1}"`)

    }
        }

    }
            
 }

 //random genrate




const genrate = () => {
    let play = true;
    setTimeout(() => {
    do {
        const random =  Math.floor(Math.random() * 9);
        const randomBox = boxs[random];
        console.log(randomBox , random);
        if(randomBox.innerText === ""){
            randomBox.innerText = "X";
            cheakWinner();
            randomBox.disabled = true;
            play = false;
        }  
    } while (play);
}, 500); 
    turn0 = true;
    cheakWinner();
    
};


    
  

//  genrate();


genrate();

 boxs.forEach((box , idx) => {
    box.addEventListener('click', () => {

        console.log('clicked ' + idx);

        

        if(turn0){ //always true
            box.innerText = '0';
            turn0 = false;
            box.disabled = true; 
        } 
        genrate();
        // else { // always false
        //     // box.innerText = 'X';
        //     genrate();
        //     turn0 = true;
        // }
        box.disabled = true;  

        cheakWinner();

    });
 });






               //   reset button
               boxs.forEach((box , idx) => {
                reset.addEventListener('click' , function(){
          
                        box.innerText = "";
                        box.disabled = false;
                        console.clear();
                        turn0 = true;
                        location.reload();
                        });
                });
        



                function newDiv(Text) {
                    let body = document.querySelector('body');
                    let div = document.createElement('div');
                    div.innerText = Text;
                    body.prepend(div);
                    div.setAttribute('class' , 'winner')
                }
