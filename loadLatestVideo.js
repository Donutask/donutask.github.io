//Code based on 
//https://stackoverflow.com/questions/18267426/html-auto-embedding-recent-uploaded-videos-from-a-youtube-channel/45342740#45342740
//https://stackoverflow.com/questions/35294633/what-is-the-vanilla-js-version-of-jquerys-getjson

const container =  document.getElementById("vidContainer");
// Inserts latest YouTube video to page.
const channelID = "UC0OBisfM_ZRwf0sfDJ1Q0YQ";
const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

const url = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID
let request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        const data = JSON.parse(request.responseText);

        const link = data.items[0].link;
        const id = link.substr(link.indexOf("=") + 1);

        const vidPlayer = document.createElement("iframe");
       container.appendChild(vidPlayer);
        vidPlayer.width = 700;
        vidPlayer.height = 350;
        vidPlayer.frameBorder = 0;
        vidPlayer.allowFullscreen = true;

        const url = "https://youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0";
        vidPlayer.setAttribute("src", url);
        vidPlayer.id = "videoPlayer"

        vidPlayer.title = "Latest YouTube video"
    } else {
        // We reached our target server, but it returned an error, ignore
    }
};

request.onerror = function () {
    // There was a connection error of some sort, ignore it
};

document.onload = new function () {
    //Allow you to add ?hidevideo to not have youtube be annoying
    const urlParams = new URLSearchParams(window.location.search);
    const hideVid = urlParams.has('hidevideo');
    
    if (hideVid) {
        container.hidden = true;
    }else{
        request.send();
    }
}
