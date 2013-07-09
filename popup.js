"use strict";

var base_url = 'http://your-app-here.appspot.com';
// var base_url = 'http://localhost:8080';
var bkg = chrome.extension.getBackgroundPage();
var channel_id;
document.addEventListener('DOMContentLoaded', function () {
    chrome.pushMessaging.getChannelId(false, function (response){
        bkg.console.log("channelId: " + response.channelId);
        channel_id = response.channelId;
        if (typeof channel_id == "undefined") {
            $('#result')[0].innerHTML = 'Channel Id not available';
            return;
        }

        var url = (base_url + '/RegisterChannelId/' + channel_id);
        bkg.console.log('sending id to ' + url);
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            error: function (request, status) {
                bkg.console.log("Failed to send a channel Id");
                $('#result')[0].innerHTML = 'Error';
            },
            success: function (resp) {
                var message;
                if (resp['result'] == 'success') {
                    message = 'Successfully registered';
                } else {
                    message = ('Registration failed ('
                               + resp['message'] + ')');
                }
                $('#result')[0].innerHTML = ('<p>' + message + '</p>');
            }
        });
    });
});
