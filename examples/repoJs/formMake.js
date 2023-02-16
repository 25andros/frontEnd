
//FORMS!!!!!

//attempting to create a box where I can grab text
function makeBOX() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  //x.setAttribute("value", "Hello World!");
  document.body.appendChild(x);
}

function gform() {
  grabTxt("frm1");
}

function rform() {
  clearTxt("frm1");
}

function grabTxt(formName) {
  document.getElementById(formName).submit();
}
function clearTxt() {
  document.getElementById(formName).reset();
}

function formReset() {
  sendIt.user_name.value = "";
  sendIt.user_email.value = "";
  sendIt.user_message.value = "";
}

const eatValue = document.getElementById("sendIt");

//let formValue = document.forms[0].value;
let sisi = sendIt.name.value;
let shishi = sendIt.email.value;


