// Select the database to use. Since the database doesn't exist it is created and then used
use('WebDevDatabase');

// Insert a few documents into the courses collection. Since the courses collection doesn't exist it is created first and then inserted
db.getCollection('courses').insertMany([
    {
        "name": "JavaScript",
        "price": 20000,
        "instructor": "Brendan Eich"
    },
    {
        "name": "C++",
        "price": 22000,
        "instructor": "Bjarne Stroustrup"
    },
    {
        "name": "Python",
        "price": 25000,
        "instructor": "Guido van Rossum"
    },
    {
        "name": "Java",
        "price": 18000,
        "instructor": "James Gosling and Mike Sheridan"
    }
]);

// Print a message to the output window.
console.log(`Completed inserting data...`);