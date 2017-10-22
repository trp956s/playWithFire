const firebase = require('firebase');
const co = require('co');

var config = {see:'add firebase to your web app'};
firebase.initializeApp(config);
firebase.database().ref()
    .child('/chats')
    .on('value', snapshot => {
        let value = snapshot.val();
        let contentArray = Object.keys(value).map(key=>value[key].content);

        console.log(Date.now(), contentArray);
    });

co(function*(){
    yield new Promise(resolve => setTimeout(resolve, 1000));
});
