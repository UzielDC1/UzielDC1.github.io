const datedisplay = document.getElementById("date");

datedisplay.innerHTML = "Date : " + Date();

function displayName() {
    const nameInput = document.getElementById('name').value; 
    const feelinginput = document.getElementById('feeling').value; 
    const display = document.getElementById("name-display");
    display.innerText = `The Unforgiving Dullahan welcomes you, ${nameInput}!
We're glad you are feeling ${feelinginput}!`; 
}

function findPolygon() {
    let number = parseFloat(document.getElementById('favorite-number').value);

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
        10: "Decagon"
    };

    if(polygonNames[number]) {
        let polygonName = polygonNames[number];
        alert(`${polygonName}`);
    } else {
        alert("Please enter a valid number.");
    }
}

function summonCurse() {
    const curses = [
        "Curse of the Hollow Eyes",
        "Curse of Eternal Shadows",
        "Curse of the Whispering Winds",
        "Curse of the Unearthly Chill"
    ];
    const randomCurse = curses[Math.floor(Math.random() * curses.length)];
    document.getElementById("curse").innerHTML = randomCurse;
}

function decodeMessage() {
    const messages = [
      "I am not alive, but I can grow. I have no lungs, yet I need air. What am I?",
      "The more you take, the more you leave behind. What am I?",
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      "I am always hungry and must be fed. The finger I touch will soon turn red. What am I?",
      "In the dead of night, I come to life. You cannot see me, but I chill your bones. What am I?",
      "A box without hinges, key, or lid, yet golden treasure inside is hid. What am I?"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerHTML = randomMessage;
}

function invokeNightmare() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lightgray";
    document.getElementById("curseMessage").innerHTML = "The Nightmare Curse has been cast.";
}

function undoCurse() {
    document.body.style.backgroundColor = "#ccdce3";
    document.body.style.color = "#4d4f5f";
    document.getElementById("curse-message").innerHTML = "The curse has been lifted... for now.";
}

document.getElementById("display-name").addEventListener("click", displayName);
document.getElementById("find-polygon").addEventListener("click", findPolygon);
document.getElementById("summon-curse").addEventListener("click", summonCurse);
document.getElementById("decode-message").addEventListener("click", decodeMessage);
document.getElementById("invoke-nightmare").addEventListener("click", invokeNightmare);
document.getElementById("undo-curse").addEventListener("click", undoCurse);