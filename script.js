prompt('enter your username')

// random value generated
let y = Math.floor(Math.random() * 2 + 1)

// counting the number of guesses
// made for correct Guess
let guess = 1
let level = 1

// prompt('OOPS SORRY!! TRY A SMALLER NUMBER')

document.getElementById('submitguess').onclick = function() {
    // number guessed by user
    let x = document.getElementById('guessField').value

    if (x == y) {
        alert(
            'YOU HAVE WON A POINT!!! YOU GUESSED IT RIGHT IN ' + guess + ' GUESS '
        )
        alert(`LEVEL ${level} COMPLETED`)
        level++
        y++
    } else if (x > y) {
        /* if guessed number is greater than actual number*/
        guess++
        alert('OOPS SORRY!! TRY A SMALLER NUMBER')
    } else {
        guess++
        alert('OOPS SORRY!! TRY A GREATER NUMBER')
    }
}