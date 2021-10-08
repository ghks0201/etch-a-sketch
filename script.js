const button = document.querySelector("button")
const container = document.querySelector(".container")

function generateGrid() {
    let numberOfGrid = parseInt(prompt("How many squares per side do you want?"))
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

function changeColor() {
    const grids = document.querySelectorAll(".grid")

    grids.forEach(function(grid) {
        grid.addEventListener("mouseover", () => {
            grid.classList.add("grid-on-hover")
        })
    })
    
}

function resetColor() {
    const grids = document.querySelectorAll(".grid")

    grids.forEach(function(grid) {
        grid.classList.remove("grid-on-hover")
    })
}


button.addEventListener("click", () => {
    generateGrid()
})

