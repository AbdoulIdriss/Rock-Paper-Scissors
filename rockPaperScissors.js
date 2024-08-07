// creat the user choice function
const getUserChoice = (userInput) => {
    userInput = userInput.toLoweCase()

    if (userInput==='rock' || userInput==='paper' || userInput==='scissors') {
        return userInput
    } else {
        console.log( 'Not a valid choice')
    }
    if (userInput === 'subarashi') {
        return 'wow, combo unlucked you won'
    }

}
// create the computer choice function
const getComputerChoice = () => { 
    Math.floor(Math.random()*3);
    switch (random) {

        case 0:
           return 'paper'
        case 1:
            return 'rock'
        case 0:
            return 'scissors'

    } 
}

// create function that determines the winner
const compareChoices = (userChoice,computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Same result for both. tie'
    }
    //if you choose rock
    if (userChoice === 'rock') {

        if (computerChoice === 'scissors') {
            return 'you won'
        }else {
            return 'computer won'
        }
    }
    //if you choose paper
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won'
        }else if (computerChoice === 'rock') {
            return 'you won'
        }
    }
    // if you choose scissors
    if (userChoice==='scissors') {
        if (computerChoice==='paper') {
            return 'you won'
        } else if (computerChoice==='rock') {
            'computer won'
        }
    }

}
// create a function tHat dtermines the winner
const determineWinner = () => {

    const person = getUserChoice()
    console.log('your choosed ' + person)

    const computer = getComputerChoice()
    console.log('The machine choosed' + computer)

    const result = determineWinner(person,computer)
    console.log(result)
}