const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyDMVqtSYxdqgnH_h9KsCtQxUzQfjEq3yK0",
    authDomain: "fire-c8b57.firebaseapp.com",
    databaseURL: "https://fire-c8b57.firebaseio.com",
    projectId: "fire-c8b57",
    storageBucket: "fire-c8b57.appspot.com",
    messagingSenderId: "683165546854"
};

firebase.initializeApp(config);
firebase.database().ref()
    .child('/chats')
    .child('-Kf9kfiG0rwnlB1gtquA')
    .once('value').then(function(snapshot) {
        let message = snapshot.val().content;
        console.log(message);
    });

for (var i = 0; i < 100000; i++) {
}