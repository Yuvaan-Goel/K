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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData(){
   firebase.database().ref("/").on('value', function(snapshot) {
     document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name: " + Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";

       document.getElementById("output").innerHTML += row;
      });});}
getData();

function add_room() 
{
  room_name = document.getElementById("addroom").value;
  firebase.database().ref("/").child(room_name).update({

    purpose: "Adding Room Name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("Room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}