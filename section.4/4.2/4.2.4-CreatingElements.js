// create a new unordered list (ul) element
const newul = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove;

// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newul);

// create two new list item (li) elements, and add some text to them
const li1 = document.createElement("li");
const li2 = document.createElement("li");

li1.textContent = "first list element";
li2.textContent = "second list element";

// add the li elements to the ul in the nav-bar
newul.appendChild(li1);
newul.appendChild(li2);
