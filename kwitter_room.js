
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       message_date = childData;
      //Start code
      console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like  = message_data['like'];
name_with_tag = " <h4> " = name = "</h4> "; 
message_with_tag = "<h4 class='message_h4'>" = message + "</h4>";
like_buttom = "<button class='btn btn-warning' id="+firebase_message_id+ "value"+like+ "onclick+'updateLike(this.id)'>Likes :"+ like + "</button>"

row= name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  
  }