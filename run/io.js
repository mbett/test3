//For realtime

import { getDatabase, ref, set, update, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


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


// Get a pointer to the database
const db = getDatabase();

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
const dbLocation = {};

// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation['/deck/flashcards/'] = myFlashcards;
update (ref(db), dbLocation)
 
