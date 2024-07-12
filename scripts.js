document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Create a new list item with the form data
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Email: ${email}, Age: ${age}`;

    // Append the new list item to the data list
    document.getElementById('dataList').appendChild(li);

    // Clear the form fields
    document.getElementById('registrationForm').reset();
});
