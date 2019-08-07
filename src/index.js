const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function buttonClicked(){

  fetch("https://randomuser.me/api/")
  .then (response => response.json())
  .then(function(json){
    document.getElementById("street").innerText = json.results[0].location.street;
    document.getElementById("city").innerText = json.results[0].location.city;
    document.getElementById("state").innerText = json.results[0].location.state;
    document.getElementById("postcode").innerText = json.results[0].location.postcode;
    document.getElementById("email").innerText = json.results[0].email;
    document.getElementById("phone").innerText = json.results[0].phone;
    document.getElementById("cell").innerText = json.results[0].cell;
    document.getElementById("fullname").innerText = `${json.results[0].name.title}. ${json.results[0].name.first} ${json.results[0].name.last}`;
    document.getElementById("date_of_birth").innerText = json.results[0].dob.date;
    document.getElementById("profile_picture").innerText = json.results[0].picture.large;
  })

}

document.addEventListener("DOMContentLoaded",function(){
  const button = document.querySelector(".btn")
  button.addEventListener("click",buttonClicked)
});
