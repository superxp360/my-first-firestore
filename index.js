// import tools we need from firebase-admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore";

// import our credentials from secrets.js
import { creds } from "./secrets.js";


//connect to our firebase project (need credentials)
initializeApp({
    credential: cert(creds),
});


//connect to the Firestore database (just ask)
const db = getFirestore();

// CRUD 

// const shirt = {
//     brand: 'Jordan',
//     style: 'shirt',
//     color: 'red',
//     size: 'M',
//     price: 39.99
// }

//let's add a shirt to our clothing collection 
// db.collection('clothing').add(shirt)
//  .then(doc =>{
//     console.log("Clothing added: " + doc.id);
//  })
//  .catch(console.error);

//now that we have some data, let's READ(get) them
db.collection('clothing').get()
.then(collection => {
const clothing = collection.docs.map(doc => ({...doc.data(), id:doc.id}));
console.table(clothing);
})
.catch(console.error)
 
