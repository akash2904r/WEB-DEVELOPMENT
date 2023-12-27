// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCount(str) {
    let count = 0

    for (const c of str) {
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
           c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U')
               count++
    }

    console.log(count)
}

let str = "Hello there, I am the example THAT HAS BEEN GIVEN fOr the voWel Count ProbleM"
vowelCount(str)