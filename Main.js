console.log("Murtaza")

let tic = document.querySelector('#tic');
let sps = document.querySelector('#sps');
let OandX = document.querySelector('#OandX'); 

tic.addEventListener('click' , () =>{
    console.log('tic');
    window.location.href = "Tic-Tac-Toe/Tic-Tac-Toe.html"
})

sps.addEventListener('click' , () =>{
    console.log('spc');
    window.location.href = "Stone-Paper-Seasor/Stone-Paper-Seasor.html"
    });

    OandX.addEventListener('click', () => {
        console.log('O&X');
        window.location.href = "O&X/O&X.html"
    });   