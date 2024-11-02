// Script for Etch-a-Sketch

//Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const button = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.querySelector('input');


button.addEventListener("click", function () {

    // Clear the current grid
    const grid = document.querySelector('#container');
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

    // Look at all boxes made 
    const targets = document.querySelectorAll('.box')

    // Event listener for hover action for any box 
    targets.forEach(target => {
        target.addEventListener("mouseover", function () {

            target.addEventListener("mouseover", function () {
            // set attribute of the box to a different color 
            // adds class "hover" to your new div
            target.classList.add("hover");

            // removes "noHover" class from div
            target.classList.remove("noHover");

            });
        });
    });

});