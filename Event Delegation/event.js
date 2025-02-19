// Get a reference to the parent element
const itemList = document.getElementById('itemList');

// Attach a click event listener to the parent element
itemList.addEventListener('click', function(event) {
  // Check if the clicked element is an <li> element
  if (event.target.tagName === 'LI') {
    // Perform some action on the clicked <li>
    console.log(`Clicked: ${event.target.textContent}`);
  }
});
