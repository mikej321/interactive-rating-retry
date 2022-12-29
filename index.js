console.log('it works');

// Step 1. Target the values as well as the span tags and submit
const ratingsContainer = document.querySelector('.ratings-container');
const buttons = document.querySelectorAll('.selection-value');
const submit = document.querySelector('.submit');
const selectionContainer = document.querySelector('.selection-container');
const selection = document.querySelector('.selection');

// Step 2. Capture the value of the clicked button

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    selection.textContent = this.value;
  })
})

submit.addEventListener('click', function() {
  if (selection.textContent == "" ) {
    alert('Please select a number first!');
  } else {
    ratingsContainer.classList.add('none');
    selectionContainer.classList.remove('hidden');
  }
})


// Step 3. Store that value in a variable

// Step 4. Place the value variable into selection

// Step 5. Toggle the hidden class on ratingsContainer / selectionContainer

// Step 6. Add an event listener that listens for the click of submit button

  