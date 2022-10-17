window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
	     closeForm();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
   
      hideRequest();
      document.getElementById("bug").style.bottom = "08px";
    })
  });
});
window.addEventListener("load", function() {
  const form = document.getElementById('my-form2');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
	  closeBug();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      
      hideBug();
    })
  });
});
function hidebyID(idname)
{
  document.querySelectorAll(".tabshow").forEach(e =>  e.classList.remove("tabbuttonactive"));
  localStorage.setItem("show", idname)
  document.querySelector(".tabshow[show='" + idname + "']").classList.add("tabbuttonactive")
  if (idname == "all") {
    var menu = document.querySelectorAll('#random > button')
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "inline"
	}
  } else {
	var menu = document.querySelectorAll('#random > button')
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "none"
	}
	var menu = document.querySelectorAll('#random > .' + idname)
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "inline-grid"
	}
}
}
var show = localStorage.getItem("show") || "none"
document.querySelector(".tabshow[show='" + show + "']").classList.add("tabbuttonactive")
console.log(show)
if (show !== "all") {
  var menu = document.querySelectorAll('#random > button')
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "none"
	}
	var menu = document.querySelectorAll('#random > .' + show)
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "inline-grid"
}
}

function displayQuestion(answer) {

  document.getElementById(answer + 'Question').style.display = "block";
document.getElementById(answer + 'Question2').setAttribute('required', '');
  
  if (answer == "game") { // hide the div that is not selected

    document.getElementById('pr*xyQuestion').style.display = "none";
    document.getElementById('pr*xyQuestion2').removeAttribute('required');
   

  } else if (answer == "pr*xy") {

   document.getElementById('gameQuestion').style.display = "none";
     document.getElementById('gameQuestion2').removeAttribute('required');

  } 

}
function hideQuestion() {

  
    document.getElementById('pr*xyQuestion').style.display = "none";
    document.getElementById('pr*xyQuestion2').removeAttribute('required'); document.getElementById('gameQuestion').style.display = "none";
     document.getElementById('gameQuestion2').removeAttribute('required');


}
function displayQuestionRequest(answer) {

  document.getElementById(answer + 'Question').style.display = "block";
document.getElementById(answer + 'Question2').style.display = "none";
  document.getElementById(answer + 'Question3').setAttribute('required', '');

}
function hideQuestionRequest() {

  
    document.getElementById('emulatorQuestion').style.display = "none";
   document.getElementById('emulatorQuestion2').style.display = "block";
document.getElementById('emulatorQuestion3').removeAttribute('required');  
}
