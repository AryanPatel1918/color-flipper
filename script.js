function changeColour() {
    const button = document.querySelector('.button-container button');
    button.disabled = true;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let a = Math.random().toFixed(1);

    let randomColor = `rgba(${red}, ${green}, ${blue}, ${a})`;
    document.body.style.backgroundColor = randomColor;

    let currentColour = document.getElementById('currentColour');
    currentColour.style.opacity = 0; // opacity takes 1s to change

    // After the opacity transition (1s), update the text and make it fade in
    setTimeout(function() {
        currentColour.textContent = randomColor; // Change the text content
        currentColour.style.opacity = 1;  // Fade the text back in
        button.disabled = false;
    }, 1000);  // Match the 1s transition time
}

function applyHexColour() {
    const input = document.getElementById('hexInput');
    const hex = input.value.trim();
    const currentColour = document.getElementById('currentColour');

    const regex = /^#([0-9A-Fa-f]{6})$/;
    const isValidHex = regex.test(hex);

    if (isValidHex) {
        document.body.style.backgroundColor = hex;
        currentColour.textContent = hex;
    } else {
        alert("Please enter a valid 6-digit hex color code starting with #");
    }
}



