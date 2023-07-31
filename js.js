// generate the random number

let randomNumber =  Math.floor(Math.random()*10 + 1 )



const guess = document.getElementById('Guess')
const submit = document.getElementById('submit')
const result = document.getElementById('result')

// let attempt = 0;

submit.addEventListener('click',()=>{
    // attempt <= 3 
    const guessedAns = guess.value
    if(guessedAns == randomNumber){
        result.innerHTML = `${guessedAns} is the Correct Answer`
    }else {
        result.innerHTML = `${guessedAns} is Wrong <p>Try Again</p>`
        // attempt += 1
    }
    
})