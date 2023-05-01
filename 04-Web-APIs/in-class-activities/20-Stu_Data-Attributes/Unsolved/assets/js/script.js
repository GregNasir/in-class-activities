const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  const element = event.target;

  // TODO: Complete function
  // Check if the clicked element was an image
  if (element.matches('.box')) {
    // Get the current value of the image's data-state attribute
    // const state = element.getAttribute("date-state");
    const state = element.dataset.state;

    if (state === "hidden") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      // element.dataset.state = "show";
      // element.setAttribute("data-state", "show");
      element.textContent = element.dataset.number;
      element.dataset.state = "show";

      // Update the image's source to the string being stored in the data-animate attribute
      // element.setAttribute("src", element.dataset.visible);
    } else {
      // Change the attributes back to their non-animated values
      element.textContent = "";
      element.dataset.state = "hidden";
      
    }
  }
});


