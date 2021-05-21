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
    room_name = localStorage.getItem("room_name");
    console.log(user_name);
    console.log(room_name);

    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }

    function send() 
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value= "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(message_data);
         console.log(firebase_message_id);

         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];

         namewithtag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
         messagewithtag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
         span = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
         row = namewithtag + messagewithtag + like_button + span;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

