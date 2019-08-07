const fullname = document.getElementById("fullname");
const email = document.getElementById("email")
const street = document.getElementById("street")
const city = document.getElementById("city")
const state = document.getElementById("state")
const postcode = document.getElementById("postcode")
const phone = document.getElementById("phone")
const cell = document.getElementById('cell')
const dob = document.getElementById('date_of_birth')
const newButton = document.querySelector("button")

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(function(json){
      const result = json.results[0];
      fullname.innerText = `${result.name.first}  ${result.name.last}`;
      email.innerText = result.email;
      street.innerText = result.location.street;
      city.innerText = result.location.city;
      state.innerText = result.location.state;
      postcode.innerText = result.location.postcode;
      phone.innerText = result.phone;
      cell.innerText = result.cell;
      dob.innerText = result.dob.date;
    }) 
});

newButton.addEventListener("click", function(){
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(function(json){
      const result = json.results[0];
      fullname.innerText = `${result.name.first}  ${result.name.last}`;
      email.innerText = result.email;
      street.innerText = result.location.street;
      city.innerText = result.location.city;
      state.innerText = result.location.state;
      postcode.innerText = result.location.postcode;
      phone.innerText = result.phone;
      cell.innerText = result.cell;
      dob.innerText = result.dob.date;
    }) 
})




