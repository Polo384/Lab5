const mainFormElement = document.getElementById('main-form');
if (mainFormElement) { 
    mainFormElement.addEventListener('submit', userForm);
}

function userForm(event) {
    event.preventDefault(); // Prevent the page from reloading

    // Get the values of the form fields
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value; 
    const membership = document.querySelector('input[name="membership"]:checked').value; // Get the value of the checked radio button with name 'membership'

    const fullname = `${firstname} ${lastname}`; // Combine firstname and lastname to create fullname
    // Display the retrieved information
    const output = `
        <p>Full name: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>City: ${city}</p>
        <p>Province: ${province}</p>
        <p>Membership: ${membership}</p>
    `;
    document.getElementById('output').innerHTML = output; // Set the inner HTML of the element with ID 'output'
}

const excelFormElement = document.getElementById('excel-form'); // Get the element with ID 'excel-form'


if (excelFormElement) { // Check if the element exists
    excelFormElement.addEventListener('submit', excelForm);
}

function excelForm(event) {
    event.preventDefault(); // Prevent the page from reloading
    let result;
    let numberStr = document.getElementById("numbers").value; // Get the value of the element with ID 'numbers'
    if (!numberStr) {
        alert("Please enter some numbers.");
        console.log("Please enter some numbers.");
        return;
    } else {
        numberStr = numberStr.trim(); // Trim any leading or trailing whitespace from the input
        const numbers = numberStr.split(" ").map(Number); // Split the input string by spaces and convert each part to a number
        if(document.getElementById("sum").checked) {
            result = numbers.reduce((acc, curr) => acc + curr, 0); // Calculate the sum of the numbers
            document.getElementById("output").innerHTML = `The sum of the numbers is: ${result}`; // Set the inner HTML of the element with ID 'output' to display the sum
        } else if(document.getElementById("average").checked) {
            result = numbers.reduce((acc, curr) => acc + curr, 0)/ numbers.length; // Calculate the average of the numbers
            document.getElementById("output").innerHTML = `The average of the numbers is: ${result}`; // Set the inner HTML of the element with ID 'output' to display the average
        } else if(document.getElementById("max").checked) {
            result = Math.max(...numbers); // Find the maximum number in the array
            document.getElementById("output").innerHTML = `The max of the numbers is: ${result}`; // Set the inner HTML of the element with ID 'output' to display the maximum number
        } else if(document.getElementById("min").checked) {
            result = Math.min(...numbers); // Find the minimum number in the array
            document.getElementById("output").innerHTML = `The min of the numbers is: ${result}`; // Set the inner HTML of the element with ID 'output' to display the minimum number
        }
    }
}

document.getElementById('changeThemeButton1').addEventListener('click', function() {
    document.body.classList.remove('dark-theme'); // Remove the 'dark-theme' class from the body element
    document.body.classList.add('light-theme'); // Add the 'light-theme' class to the body element
});

document.getElementById('changeThemeButton2').addEventListener('click', function() {
    document.body.classList.remove('light-theme'); // Remove the 'light-theme' class from the body element
    document.body.classList.add('dark-theme'); // Add the 'dark-theme' class to the body element
});
