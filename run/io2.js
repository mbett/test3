// Import functions to get the database root, set a location and update the values
//
import { getDatabase, ref, set, update, child, get, onValue, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];


// Get a pointer to the database root
const db = getDatabase();
 
// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
const dbLocation = {};
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation['/deck/flashcards/'] = myFlashcards;   // Specify a specific location in the database tree
update (ref(db), dbLocation);

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve
const location = ref(db, '/deck/flashcards');

// A variable to store the JSON results in a human readable format
let jsonString;

onValue(location, function(retrieve) {
  
    //Get the raw JSON data back from the database
    let queryData = retrieve.val();
    
    // Turn the data into a JSON String
    jsonString = JSON.stringify(queryData);

 });

// Print the data out as a JSON string or otherwise manipulate it
console.log (' JSON string:' + jsonString )
