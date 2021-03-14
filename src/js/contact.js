// Vn erstellen die den submit button ansteuert
// const button = document.querySelector(`.submit`);
// // für namen, email + agb einen reminder wenn leer
// function nameInvalid() {
//   const name = document.querySelector(`#name`);
//   // nameContent = name.nodeValue;
//   // alert(`bitte gib deinen Namen an`);
//   // console.log(nameContent);
//   if (name === ``) {
//     alert(`bla`);
//   } else {
//     alert(`nicerdicer`);
//   }
// }
// button.addEventListener(`click`, nameInvalid);

// auf submit drücken soll jetzt diese function ausführen

/*eslint-disable*/

//1 wo muss das prevent defult hin?
//2. warum ist der inputCheckbox.value = on?
//3. warumg eht bei checkboxLabel nicht getElementsByClassName?

function test () {
function invalidInput(event1) {
  log.textContent=`Form NOT submitted! Time stamp: whatever`;
  event1.preventDefault();
  if (inputMail.value === "") {
    alert("Bitte geben Sie Ihre Email Adresse an!")
    inputMail.classList.add("form-validation");
  }
    else if (inputName.value ===""){
      alert("Bitte geben Sie Ihren Namen an!");
      inputName.classList.add("form-validation");
    } 
    else if (inputCheckbox.checked === false){
      alert("Bitte stimmen Sie der Datenschutzerklärung zu");
      inputCheckboxLabel.classList.add("form-validation--checkbox");
    }
    else {
    console.log("all good, all valid");
    console.log(inputMail.value, inputName.value, inputCheckbox.value);
  }
}
// function validInput (event){
//   log.textContent=`Form Submitted! Time stamp: ${event.timeStamp}`;
//   event.preventDefault();
// }
const inputMail = document.querySelector("#mail");
const inputName = document.querySelector("#name");
const inputCheckbox = document.getElementById("pp-accept");
const inputCheckboxLabel = document.querySelector(".pp-label"); 
const form = document.querySelector(".form__form-elmnt");
const log = document.getElementById("log");
//form.addEventListener(`submit`, validInput);
form.addEventListener(`submit`, invalidInput);

}
//müsste jetzt auch ohne gehen
test();

// function formValid() {
//     const conForm = document.querySelector(".form__form-elmnt");
//     const inputName = document.querySelector("#name");
//     const inputMail = document.getElementById("mail");
//     console.log(inputMail);
//     console.log(conForm);
//     conForm.addEventListener("submit", function checkInputs(){
//       console.log("checkInputs function");
//     }
//     );
// }
//   formValid();





export default test;