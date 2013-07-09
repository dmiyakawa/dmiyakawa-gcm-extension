var bkg = chrome.extension.getBackgroundPage();
document.addEventListener('DOMContentLoaded', function () {
    chrome.pushMessaging.getChannelId(false, function (response){
        bkg.console.log("channelId: " + response.channelId);
        // alert("channelId=" + response.channelId);
    });
});
