const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function addListItems(event) {
    // Prevent the default behavior
    event.preventDefault();

    const shopInput = $('#shopping-input');
  
    const groceryItem = shopInput.val();

    const groceryEl = $('<li>').text(groceryItem);

    shoppingListEl.append(groceryEl);

    shopInput.val('');
}
   
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', addListItems);