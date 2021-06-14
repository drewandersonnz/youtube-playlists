console.log("youtube addons");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getVideoRemoveButton() {
    return document.querySelector('ytd-playlist-panel-video-renderer.style-scope:nth-child(1) > div:nth-child(2) > ytd-menu-renderer:nth-child(1) > div:nth-child(1) > ytd-button-renderer:nth-child(1) > a:nth-child(1) > yt-icon-button:nth-child(1)');
}

async function playlistVideosRemove(count, delay = 0.4) {
    for (var i = 0; i < count; i++) {
        console.log("removing video " + (i + 1) + " of " + count);

        var removeButton = getVideoRemoveButton();
        if (removeButton) {
            removeButton.click();
        }

        await sleep(100 * delay);
    }
    console.log("done");
}
