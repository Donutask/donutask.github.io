//Code based on 
//https://stackoverflow.com/questions/18267426/html-auto-embedding-recent-uploaded-videos-from-a-youtube-channel/45342740#45342740
//https://stackoverflow.com/questions/35294633/what-is-the-vanilla-js-version-of-jquerys-getjson

var channelID = "UC0OBisfM_ZRwf0sfDJ1Q0YQ";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

let url = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);

        var link = data.items[0].link;
        var id = link.substr(link.indexOf("=") + 1);

        let vidPlayer = document.createElement("iframe");
        document.getElementById("vidContainer").appendChild(vidPlayer);
        vidPlayer.width = 600;
        vidPlayer.height = 340;
        vidPlayer.frameBorder = 0;
        vidPlayer.allowFullscreen = true;

        let url = "https://youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0";
        vidPlayer.setAttribute("src", url);
        vidPlayer.id = "videoPlayer"

        vidPlayer.title = "Latest YouTube video"
    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    // There was a connection error of some sort
};

document.onload = new function () {
    request.send();
}
