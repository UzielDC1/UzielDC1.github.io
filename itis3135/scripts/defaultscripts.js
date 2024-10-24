const datedisplay = document.getElementById("date");

datedisplay.innerHTML = "Date : " + Date();

function displayName() {
    const nameInput = document.getElementById('name').value; 
    const feelinginput = document.getElementById('feeling').value; 
    const display = document.getElementById("name-display");
    display.innerText = `The Unforgiving Dullahan welcomes you, ${nameInput} !
We're glad you are feeling ${feelinginput}!`; 
}

function findPolygon() {
    let number = parseFloat(document.getElementById('favoriteNumber').value);

    number = Math.abs(Math.round(number));

    const polygonNames = {
        0: "Monogon",
        1: "Henagon",
        2: "Bigon",
        3: "Triangle",
        4: "Quadrilateral",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Nonagon",
        10: "Decagon",
    };

    let polygonName = polygonNames[number];

    alert(`${polygonName}`);
}