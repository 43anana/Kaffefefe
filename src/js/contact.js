// Vn erstellen die den submit button ansteuert
const button = document.querySelector(`.submit`);
// für namen, email + agb einen reminder wenn leer
function nameInvalid() {
  const name = document.querySelector(`#name`);
  // nameContent = name.nodeValue;
  // alert(`bitte gib deinen Namen an`);
  // console.log(nameContent);
  if (name === ``) {
    alert(`bla`);
  } else {
    alert(`nicerdicer`);
  }
}
button.addEventListener(`click`, nameInvalid);
 