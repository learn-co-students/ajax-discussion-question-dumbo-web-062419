const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
function fetchPerson() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(function(json) {
      // console.log(json.results[0].gender);
      document.getElementById("street").innerText = json.results[0].location.street;
      document.getElementById("")
    });
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    fetchPerson()
  });
});
