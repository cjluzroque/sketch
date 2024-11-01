// Script for Etch-a-Sketch

const grid = document.querySelector('#container');

//Make container attribute flex column 

// Create Row 
for (i = 0; i < 16; i++) {
    // Make a div to append each box to be a row 
    const row = document.createElement("div");
    row.classList.add("row");

    // Create 16 divs in row
    for (j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.classList.add("noHover");

        row.appendChild(box);
    }

// Append to container 
grid.appendChild(row);
}


const targets = document.querySelectorAll('.box')
//Event listener for hover action
targets.forEach(target => {
    target.addEventListener("mouseover", function () {

        target.addEventListener("mouseover", function () {
        //set attribute of the box to a different color 
        // adds class "hover" to your new div
        target.classList.add("hover");

        // removes "noHover" class from div
        target.classList.remove("noHover");

        });
    });
});