const mainFormElement = document.getElementById('main-form');
if (mainFormElement) {
    mainFormElement.addEventListener('submit', userForm);
}
function userForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const fullname = `${firstname} ${lastname}`;
    // Afficher les informations récupérées
    const output = `
        <p>Full name: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>City: ${city}</p>
        <p>Province: ${province}</p>
        <p>Membership: ${membership}</p>
    `;
    document.getElementById('output').innerHTML = output;
}


const excelFormElement = document.getElementById('excel-form');

// Vérifier si l'élément n'est pas null
if (excelFormElement) {
    excelFormElement.addEventListener('submit', excelForm);
}

function excelForm(event) {
    event.preventDefault();
    let result;
    let numberStr = document.getElementById("numbers").value;
    if (!numberStr) {
        alert("Please enter some numbers.");
        console.log("Please enter some numbers.");
        return;
    } else {
        numberStr = numberStr.trim();
        const numbers = numberStr.split(" ").map(Number);
        console.log(numbers);
        if(document.getElementById("sum").checked) {
            result = numbers.reduce((acc, curr) => acc + curr, 0);
            document.getElementById("output").innerHTML = `The sum of the numbers is: ${result}`;
        } else if(document.getElementById("average").checked) {
            result = numbers.reduce((acc, curr) => acc + curr, 0)/ numbers.length;
            document.getElementById("output").innerHTML = `The average of the numbers is: ${result}`;
        } else if(document.getElementById("max").checked) {
            result = Math.max(...numbers);
            document.getElementById("output").innerHTML = `The max of the numbers is: ${result}`;
        } else if(document.getElementById("min").checked) {
            result = Math.min(...numbers);
            document.getElementById("output").innerHTML = `The min of the numbers is: ${result}`;
        }
    }
}



document.getElementById('changeThemeButton1').addEventListener('click', function() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
});

document.getElementById('changeThemeButton2').addEventListener('click', function() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
});
