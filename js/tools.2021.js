console.log("youtube addons");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getAllButtons() {
    var list = document.querySelectorAll('#items.playlist-items')[0];
    return list.querySelectorAll('ytd-menu-renderer > yt-icon-button.dropdown-trigger > button[aria-label]');
}

function getOneButton() {
    return getAllButtons()[0];
}

async function playlistVideosRemove(count) {

    for (var i = 0; i < count; i++) {
        console.log("removing video " + (i + 1) + " of " + count);

        var item = getOneButton()
        item.click();

        out = setTimeout(function () {
            var menu = document.querySelector('tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer').lastElementChild
            if (menu) {
                // make sure its the delete button "Remove from playlist"
                if (menu.innerHTML.includes("from playlist")) {
                    menu.click();
                }
            }

        }, 100);
        await sleep(300); // sleep cause browser can not handle the process
        clearTimeout(out);
    }
    console.log("done");
}
