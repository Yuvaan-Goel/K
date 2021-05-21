var firebaseConfig = {
    apiKey: "AIzaSyCGubSn8vwSXj-PqGOjIZ2Ce2318M6yQGc",
    authDomain: "kwitter-a245f.firebaseapp.com",
    databaseURL: "https://kwitter-a245f-default-rtdb.firebaseio.com",
    projectId: "kwitter-a245f",
    storageBucket: "kwitter-a245f.appspot.com",
    messagingSenderId: "417919027511",
    appId: "1:417919027511:web:6f43ce778cf49e425ff2b2",
    measurementId: "G-JHY6QBKE80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}