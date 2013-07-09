console.log("Start loading background.js");
chrome.pushMessaging.onMessage.addListener(function (message) {
    console.log("onMessage: " + message.payload);
    alert("GCM message: " + message.payload );
});
