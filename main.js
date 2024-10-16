// GET THE BUTTONS
const operandBtns = document.querySelectorAll(".operand")
const operatorBtns = document.querySelectorAll(".operator")
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector("#delete")

//SCREENS
const prevScreen = document.querySelector('#prev')
const currentScreen = document.querySelector('#current')



// STATES
let currentScreenValue = ""


// FUNCTIONS
function appendToScreen(e) {
    const key = e.target.innerHTML

    //PREVENT MULTIPLE INITIAL ZEROS
    if(key == "0" && currentScreenValue.length == 1 && currentScreenValue.startsWith("0")) return
   
    // CHANGE TO SECOND NUMBER IF FIRST NUMBER IS ZERO
    if(currentScreenValue.length == 1 && currentScreenValue.startsWith("0") && key !== "0" && key !== ".") {
        currentScreenValue = key
        currentScreen.innerHTML = currentScreenValue
        return
    }

   //PREVENT MULTIPLE .
    if(currentScreenValue.includes(".") && key == ".") return
   




    currentScreenValue += key
    currentScreen.innerHTML = currentScreenValue
}    

function clearScreen() {s

}    


// EVENTS
operandBtns.forEach(btn => {
    //Attach Evenets to it
    btn.addEventListener('click', appendToScreen)
})


clearBtn.addEventListener('click', clearScreen)