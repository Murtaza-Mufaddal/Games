console.log("Murtaza");

let heightFeet = document.querySelector("#hei-feet1");
let heightInches = document.querySelector("#hei-feet2");
let weight = document.querySelector("#weight");
let submit = document.querySelector("#submit");
let display = document.querySelector("#display");

submit.addEventListener("click", function () {
  // convert the height input values to a number
  let heightFeetNum = parseFloat(heightFeet.value) * 0.3048;
  let heightInchesNum = parseFloat(heightInches.value) * 0.0254;
  let height = heightFeetNum + heightInchesNum;
  let heightsq = height * height;
  console.log(height);
  console.log(heightsq);
  console.log(weight.value);

  let bmi = weight.value / heightsq;
  console.log(bmi);
  display.style.color = "black";

  if (bmi < 18.5) {
    display.innerText = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    display.innerText = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    display.innerText = "Overweight";
  } else {
    display.innerText = "Obese";
  }
});

//form submit

const scriptURL = 'https://script.google.com/macros/s/AKfycbxQdehlnBDATSXseNMLPeA0MtUCBuzvnIoaQ8vM4kC-L96ugBUTvZxvdKpzlgLvUACIfg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .then(response => alert('Sucessfully Registerd'))
    .catch(error => console.error('Error!', error.message))
    .catch(error => alert('SomeThing Wrong Try Again'))
    form.reset();
})