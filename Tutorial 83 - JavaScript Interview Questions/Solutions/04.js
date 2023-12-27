// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validate(password) {
    if(password.length < 8) {
        console.log("Not valid... Password too short !!!")
        return
    }

    let up = false, low = false, digit = false

    for (let i = 0; i < password.length; i++) {
        const element = password.charCodeAt(i);
        
        if(element >= 65 && element <= 90)
            up = true
        else if(element >= 97 && element <= 122)
            low = true
        else if(element >= 48 && element <= 57)
            digit = true
    }

    if(up == true && low == true && digit == true)
        console.log("Password set...")
    else 
        console.log("Invalid password... Try again !!!")
}

let password = "Zorojuro#2"
validate(password)