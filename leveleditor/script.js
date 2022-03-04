//After everything loads, inject the youtube video player (it's slow loading with everything else)
window.onload = function() {
    document.getElementById('video_holder').innerHTML = `<iframe width="550" height="309" src="https://www.youtube-nocookie.com/embed/RIH7p7Bcm9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

// Try to respect privacy (and load times) by putting social share buttons in later
let allowSocial = false;

function MakeSocialButtons() {
    const scriptArea = document.getElementById("socialScripts");

    scriptArea.innerHTML = `
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0" nonce="AyxNcbHf"></script>
    `
}

function CheckDoNotTrack() {
    //https://globalprivacycontrol.org/
    if (navigator.globalPrivacyControl) {
        // signal detected, do something
        allowSocial = false;
    } else {
        if (navigator.doNotTrack == "1") {
            allowSocial = false;
        } else {
            allowSocial = true;
        }
    }

    if (allowSocial)
        MakeSocialButtons()
}

//maybe later
// CheckDoNotTrack()