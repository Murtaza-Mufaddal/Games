console.log("murtaza");
console.clear();
let boxs = document.querySelectorAll('.box');





boxs.forEach((box , idx) => {

    // box.innerText = idx;

    let randomIdx = Math.floor(Math.random() * 81);
    let randomNumber = Math.floor(Math.random() * 10);
    let randomIdxNo = boxs[randomIdx];
    console.log(randomIdxNo)

    randomIdxNo.innerText = randomNumber;

    
});
// console.clear();

// for(let i=0; i<10; i++){
//     let randomIdx = Math.floor(Math.random() * 10);
//     console.log(randomIdx)
// }
