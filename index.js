let searchField = document.querySelector("#search");
let show = document.querySelectorAll(".movie");
searchField.addEventListener("keyup", function(event) {
  const word = event.target.value.toLowerCase();

  show.forEach(function(item) {
    item.querySelector("p").textContent.toLowerCase.includes(word)
      ? (item.style.display = "block")
      : (item.style.display = "none");
  });
});
