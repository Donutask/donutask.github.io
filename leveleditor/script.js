//After everything loads, inject the youtube video player (it's slow loading with everything else)
window.onload = function() {
    document.getElementById('video_holder').innerHTML = `<iframe width="356" height="200" src="https://www.youtube-nocookie.com/embed/RIH7p7Bcm9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};