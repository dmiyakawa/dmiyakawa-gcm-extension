console.log("start loading background.js");
chrome.pushMessaging.onMessage.addListener(function (message) {
    console.log("pushMessaging callback has come. payload: " + message.payload);
    alert("GCM message: " + message.payload );
});
console.log("finished loading background.js");
