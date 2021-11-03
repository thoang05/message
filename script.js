const form = document.getElementById('form');

function displayMessage() {
  const writtenName = document.getElementById("name").value;

  form.classList.toggle('hide');

  document.getElementById('message').innerHTML =  "<span style='color: red;'>" + writtenName + "</span>" + " is a stinky poo poo <3";
}