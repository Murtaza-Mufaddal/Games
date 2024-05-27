console.log('murtaza');

let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
display.innerText = "created by Murtaza"



buttons.forEach((button , idx) => {
 

    button.addEventListener('click', () => {

        if(display.innerText === "created by Murtaza"){
            display.innerText = "";
        }

        
        if(idx === 0){
            display.innerHTML = ''
            console.clear();
    }else if(idx === 1){
        display.innerText = display.innerText.slice(0, -1);
    }else if(idx === 19){
        display.innerHTML = eval(display.innerText);
    }else{
            display.innerHTML += button.innerHTML
        }

        console.log(display.innerText)
        if(display.innerText === "1427"){
            display.innerHTML = "created by Murtaza"
        }
        console.log(button,idx);
        // display.innerHTML += button.innerHTML;
        console.log(display.innerHTM);

    });
});