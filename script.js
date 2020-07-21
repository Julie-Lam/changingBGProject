const clickMeButton = document.querySelector('button'); 
const container = document.querySelector('#container')

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'pink']

clickMeButton.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * colors.length);  
    console.log(colorIndex)
    container.style.backgroundColor = colors[colorIndex]; 
})

//Math.random() generates a random number that is equal to or greater than 0, but always less than 1. 
//parseInt() converts the variable into a string, and outputs an integer (a whole number).  