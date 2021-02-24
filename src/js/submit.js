
const submitButton = document.querySelector(".submit");

/*function onclickFunction(){
	const textField = document.querySelector('#name');
	//textField.value = 'Hendrik';
	const content = textField.value;
	alert(content.toString());
	if (content.toString().localeCompare('null')){
		alert('Richtig')
	}
	else{
		alert('Falsch')
	}
}*/

const submit = document.querySelector(`.submit`);
function submitValid () {
	const name = document.querySelector(`#name`);
	if (name.value.length ===0){
		alert (`whats ur name`)
	} else {
		alert (`cool name`)
	}
}
submitButton.addEventListener("click",onclickFunction);
