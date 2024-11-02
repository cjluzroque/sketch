// Script for Etch-a-Sketch

//Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const button = document.querySelector('#create');
const list = document.querySelector('ul');
const input = document.querySelector('input');

let currentColor = "Black";
let randomize = false;

button.addEventListener("click", function () {

    // Clear the current grid
    const grid = document.querySelector('#container');
    grid.classList.add("grid");
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    // Check input and then if under 100, set as the size
    if (input.value == '') return;
    if (input.value > 100) {
        input.value == '';
        input.focus();
        alert("Keep below 100");
        return;
    }
    const size = input.value;

    // Grid Creation
    // Create Row 
    for (i = 0; i < size; i++) {
        // Make a div to append each box to be a row 
        const row = document.createElement("div");
        row.classList.add("row");

        // Create 16 divs in row
        for (j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.classList.add("noHover");

            row.appendChild(box);
        }

    // Append to grid 
    grid.appendChild(row);
    }

    // Choose Color
    const colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        color.addEventListener("click", function () {
            randomize = false;
            currentColor = color.textContent;
            console.log(currentColor);
            console.log(randomize);
        });
    });

    // RANDOM BUTTON
    const random = document.querySelector('.random');
    random.addEventListener("click", function () {
        randomize = true;
        console.log(randomize);
    });

    // Look at all boxes made 
    const targets = document.querySelectorAll('.box');

    // Check if holding down mouse
    let isMouseDown = false;
    targets.forEach(target => {
        target.addEventListener('mousedown', () => {
            isMouseDown = true;
        });
        
        target.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    });

    // Event listener for hover action for any box 
    targets.forEach(target => {
        target.addEventListener("mouseover", function () {
            if (isMouseDown) {
                // set attribute of the box to a different color 
                // removes all class from div

                // adds class to your new div
                if (randomize) {
                    let choice = Math.floor(Math.random() * 3);
                    switch (choice) {
                        case 0:
                            currentColor = "Red";
                            break;
                        case 1:
                            currentColor = "Blue";
                            break;
                        case 2:
                            currentColor = "Green";
                            break;
                        default:
                            break;
                    }
                }
                console.log(currentColor);
                if (currentColor == "Black") {
                    target.classList.remove("noHover");
                    target.classList.remove("blue");
                    target.classList.remove("green");
                    target.classList.remove("red");
                    target.classList.add("black");
                    return;
                }
                if (currentColor == "Red") {
                    target.classList.remove("noHover");
                    target.classList.remove("blue");
                    target.classList.remove("green");
                    target.classList.remove("black");
                    target.classList.add("red");
                    return;
                }
                if (currentColor == "Green") {
                    target.classList.remove("noHover");
                    target.classList.remove("blue");
                    target.classList.remove("red");
                    target.classList.remove("black");
                    target.classList.add("green");
                    return;
                }
                if (currentColor == "Blue") {
                    target.classList.remove("noHover");
                    target.classList.remove("green");
                    target.classList.remove("red");
                    target.classList.remove("black");
                    target.classList.add("blue");
                    return;
                }
                if (currentColor == "Eraser") {
                    target.classList.add("noHover");
                    target.classList.remove("blue");
                    target.classList.remove("green");
                    target.classList.remove("red");
                    target.classList.remove("black");
                    return;
                }      
            }      
        });
    });

    // Clear button
    const clear = document.querySelector('#clear');
    clear.addEventListener("click", function() {
        targets.forEach(target => {
            target.classList.add("noHover");
            target.classList.remove("blue");
            target.classList.remove("green");
            target.classList.remove("red");
        });
    });
});