// Your web app's Firebase configuration
    var firebaseConfig = {
            apiKey: "AIzaSyArtXNUYSpDd3sOUOO5AvrmGXv_x3sBdqU",
            authDomain: "floatanomers.firebaseapp.com",
            databaseURL: "https://floatanomers.firebaseio.com",
            projectId: "floatanomers",
            storageBucket: "floatanomers.appspot.com",
            messagingSenderId: "688686259687",
            appId: "1:688686259687:web:1054a8a57e0ca144b4f142",
            measurementId: "G-BRHD9DHBTZ"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


rootRef = firebase.database().ref().child('News');


rootRef.on("child_added", snap => {

    var title = snap.child("title").val();
    var img_src = snap.child("img_src").val();

    $("#title").append(title);

});