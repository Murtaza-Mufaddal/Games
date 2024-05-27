console.log("Murtaza")

let tic = document.querySelector('#tic');
let sps = document.querySelector('#sps');
let OandX = document.querySelector('#OandX');
let sudoku = document.querySelector('#sudoku') 
let cal = document.querySelector('#cal')
let cricket = document.querySelector('#cricket')

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

sudoku.addEventListener('click' , function(){
    console.log('sudoku');
    window.location.href = "Sudoku/Sudoku.html"
});   


cal.addEventListener('click' , function(){
    console.log('calculator');
    window.location.href = "calculator/calculator.html"
});   

cricket.addEventListener('click' , function(){
    console.log('cricket');
    window.location.href = "cricket/cricket.html"
}); 





















{   //theme

    let theme = document.querySelector('#theme');
    let body = document.querySelector('body');
    let footer = document.querySelector('.footer')

    theme.addEventListener('click' , () =>{
        console.log("theme change")
 
    // if(body.style.backgroundColor = 'whitesmoke'){
    //     body.style.backgroundColor = 'black'
    // } else if(body.style.backgroundColor = 'black'){
    //     body.style.backgroundColor = 'whitesmoke'
    // }else{
    //     body.style.backgroundColor = 'whitesmoke'
    // }

    switch(body.style.backgroundColor){
        case 'whitesmoke':
            body.style.backgroundColor = 'black'
            footer.style.color = 'white'
            break;
        case 'black':
            body.style.backgroundColor = 'whitesmoke'
            footer.style.color = 'black'
            break;
        default:
            body.style.backgroundColor = 'whitesmoke'
            
    }


});

}