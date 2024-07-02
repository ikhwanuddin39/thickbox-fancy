const wpCaptions = document.querySelectorAll('.wp-caption');

wpCaptions.forEach(function(wpCaption) {
    // get a href link of wp-caption
    wpCaption.addEventListener('click', function() {
        // embed pdf by a href link of wp-caption
        const pdfLink = wpCaption.querySelector('a').href;
        const embedFull = document.getElementById('pdf-full-embed');
        embedFull.src = pdfLink;

        // show full screen thickbox
            const embed = document.getElementById('pdf-full');
            if (embed.requestFullscreen) {
                embed.requestFullscreen();
            } else if (embed.mozRequestFullScreen) { // Firefox
                embed.mozRequestFullScreen();
            } else if (embed.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                embed.webkitRequestFullscreen();
            } else if (embed.msRequestFullscreen) { // IE/Edge
                embed.msRequestFullscreen();
            }
            embed.classList.remove('hidden');
    });
});

document.getElementById('close-fullscreen-btn').addEventListener('click', function() {
    const embed = document.getElementById('pdf-full');
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
    embed.classList.add('hidden');
});

// check if not in fullscreen mode add hidden class on close-fullscreen-btn
document.addEventListener('fullscreenchange', function() {
    const embed = document.getElementById('pdf-full');
    if (!document.fullscreenElement) {
        embed.classList.add('hidden');
    }
});


