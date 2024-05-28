console.log("Murtaza");

let tic = document.querySelector("#tic");
let sps = document.querySelector("#sps");
let OandX = document.querySelector("#OandX");
let sudoku = document.querySelector("#sudoku");
let cal = document.querySelector("#cal");
let cricket = document.querySelector("#cricket");

tic.addEventListener("click", () => {
  console.log("tic");
  window.location.href = "Tic-Tac-Toe/Tic-Tac-Toe.html";
});

sps.addEventListener("click", () => {
  console.log("spc");
  window.location.href = "Stone-Paper-Seasor/Stone-Paper-Seasor.html";
});

OandX.addEventListener("click", () => {
  console.log("O&X");
  window.location.href = "O&X/O&X.html";
});

sudoku.addEventListener("click", function () {
  console.log("sudoku");
  window.location.href = "Sudoku/Sudoku.html";
});

cal.addEventListener("click", function () {
  console.log("calculator");
  window.location.href = "calculator/calculator.html";
});

cricket.addEventListener("click", function () {
  console.log("cricket");
  window.location.href = "cricket/cricket.html";
});

//search function
function searchKey() {
  let filter = document.querySelector("#search").value.toUpperCase();
  let searchBtn = document.querySelector(".search-btn");
  let container = document.querySelector(".container");
  let buttons = container.querySelectorAll(".search-button");

  // console.log(filter);

  // for(let i=0; i<=buttons.length; i++){
  buttons.forEach((btn, idx) => {
    let a = btn;
    let textValue = a.textContent || a.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  });

  {
    // search icon function

    let searchIcon = document.querySelector(".search-btn");
    let search_div = document.querySelector(".search-div");
    document.querySelector(".search-btn").addEventListener("click", searchKey);
    searchIcon.addEventListener("click", function () {
      console.log(search_div.classList.contains("active"));
    });
  }
}

{
  let searchIcon = document.querySelector("#search-img");
  let search_div = document.querySelector(".search-div");
  console.log(search_div.classList.contains("active-div"));
  searchIcon.addEventListener("click", function () {
    search_div.style.transition = "3s";

    if (search_div.classList.contains("active-div")) {
      search_div.classList.remove("active-div");
      searchIcon.src = "images/x-bold.svg";
    } else {
      search_div.classList.add("active-div");
      searchIcon.src = "images/search.svg";
    }
    // search_div.classList.remove("active-div");
    // console.log(search_div.classList.contains("active-div"));
  });
}
//
//
//

//theme

let theme = document.querySelector("#theme");
let body = document.querySelector("body");
let footer = document.querySelector(".footer");

theme.addEventListener("click", () => {
  console.log("theme change");

  // if(body.style.backgroundColor = 'whitesmoke'){
  //     body.style.backgroundColor = 'black'
  // } else if(body.style.backgroundColor = 'black'){
  //     body.style.backgroundColor = 'whitesmoke'
  // }else{
  //     body.style.backgroundColor = 'whitesmoke'
  // }

  switch (body.style.backgroundColor) {
    case "whitesmoke":
      body.style.backgroundColor = "black";
      footer.style.color = "white";
      break;
    case "black":
      body.style.backgroundColor = "whitesmoke";
      footer.style.color = "black";
      break;
    default:
      body.style.backgroundColor = "whitesmoke";
  }
});
