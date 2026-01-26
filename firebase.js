// Include Firebase SDK in your HTML pages before this script:
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

/* =========================
   STEP 1: Replace below config
   ========================= */
const firebaseConfig = {
  apiKey: "AIzaSyDkdTTdK1Tp3oT5ff--GqYqwHMJHegKV8s",
  authDomain: "ais-alumni-uobd.firebaseapp.com",
  projectId: "ais-alumni-uobd",
  storageBucket: "ais-alumni-uobd.firebasestorage.app",
  messagingSenderId: "215592148913",
  appId: "1:215592148913:web:658d23339c62e1a4d82790",
  measurementId: "G-TF9S5SEVRQ"
};
/* =========================
   STEP 2: Initialize Firebase
   ========================= */
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* =========================
   STEP 3: Usage Examples
   ========================= */

/* --- Registration Page --- */
function registerAlumni(data){
  return db.collection("alumni").add(data);
}

/* --- Fetch Alumni --- */
function fetchAlumni(callback){
  db.collection("alumni").orderBy("batch","asc").get()
    .then(snapshot=>{
      const alumni = [];
      snapshot.forEach(doc => alumni.push({id: doc.id, ...doc.data()}));
      callback(alumni);
    }).catch(err=>console.error(err));
}

/* --- Fetch Notices --- */
function fetchNotices(callback){
  db.collection("notices").orderBy("date","desc").get()
    .then(snapshot=>{
      const notices = [];
      snapshot.forEach(doc => notices.push({id: doc.id, ...doc.data()}));
      callback(notices);
    }).catch(err=>console.error(err));
}

/* --- Fetch Events --- */
function fetchEvents(callback){
  db.collection("events").orderBy("date","asc").get()
    .then(snapshot=>{
      const events = [];
      snapshot.forEach(doc => events.push({id: doc.id, ...doc.data()}));
      callback(events);
    }).catch(err=>console.error(err));
}
