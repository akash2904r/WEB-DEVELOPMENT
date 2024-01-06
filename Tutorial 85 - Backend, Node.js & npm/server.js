// Slugifies any string i.e., converts a string into a valid URL

var slugify = require('slugify')

// Defaultly uses '-' as the separator
let a = slugify('some string')
console.log(a)

// If you prefer something other than '-' as separator
let b = slugify('some st&&&*(#^^$$ing', '_')
console.log(b)