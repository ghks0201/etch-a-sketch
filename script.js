const button = document.querySelector("button")
const container = document.querySelector(".container")
const colorPicker = document.querySelector("#color")


// Generate new grid based on number of squares per side user entered
function generateGrid() {

    let numberOfGrid = parseInt(prompt("How many squares per side do you want?"))

    while (numberOfGrid > 100) {
        numberOfGrid = parseInt(prompt("Number of squares per side must not exceed 100. Please reenter a number."))
    }

    let classDivs = document.querySelectorAll(".grid")

    if (classDivs.length > 0) {
        for (let i = 0; i < classDivs.length; i++) {
            container.removeChild(classDivs[i])
        }
    }

    resetColor()

    container.style.gridTemplateColumns = `repeat(${numberOfGrid}, 1fr)`
    container.style.gridTemplateRows = `repeat(${numberOfGrid}, 1fr)`

    for (let i = 0; i < numberOfGrid; i++) {
        for (let j = 0; j < numberOfGrid; j++) {
            const div = document.createElement("div")
            div.classList.add("grid")
            
            container.appendChild(div)
        }   
    }

    changeColor()
    
}

// Change the color on hover
function changeColor() {
    const grids = document.querySelectorAll(".grid")

    // const rgbRed = Math.floor(Math.random() * 256)
    // const rgbGreen = Math.floor(Math.random() * 256)
    // const rgbBlue = Math.floor(Math.random() * 256)

    // const rgbColor = `rgba(${rgbRed}, ${rgbGreen}, ${rgbBlue})`


    grids.forEach(function(grid) {
        grid.addEventListener("mouseover", () => {
            grid.classList.add("grid-on-hover")
            
            grid.style.backgroundColor = colorPicker.value
        })
    })
}

// Reset color when new grid is created
function resetColor() {
    const grids = document.querySelectorAll(".grid")

    grids.forEach(function(grid) {
        grid.classList.remove("grid-on-hover")
    })
}


// Event listener for button to generate new grid
button.addEventListener("click", () => {
    generateGrid()
})
