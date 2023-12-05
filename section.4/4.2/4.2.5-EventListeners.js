// add an event listener to the dog picture that listens for a "click" and gives an alert

document.querySelector("#dog-picture").addEventListener("click", event => {
  console.log("dog picture has been clicked");
});

// add an event listener to the list items in the class schedule that listens for a "mouseover"
// event and changes its background color
const listItems = document.querySelectorAll("#class-schedule-list li")

  for (let item of listItems) {
    item.addEventListener("mouseover", (event) => event.target.style.background-color = "red" );
    item.addEventListener("mouseout", (event) => event.target.style.background-color = "inherit" );
  }

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keyup", (event) => {
    console.log(`the ${event.key} was pressed`)
})
