document.getElementById('open-thickbox').addEventListener('click', function() {
    document.getElementById('thickbox').style.display = 'flex';
});

document.getElementById('close-thickbox').addEventListener('click', function() {
    document.getElementById('thickbox').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('thickbox')) {
        document.getElementById('thickbox').style.display = 'none';
    }
});

document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const embed = document.getElementById('pdf-embed');
    if (embed.requestFullscreen) {
        embed.requestFullscreen();
    } else if (embed.mozRequestFullScreen) { // Firefox
        embed.mozRequestFullScreen();
    } else if (embed.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        embed.webkitRequestFullscreen();
    } else if (embed.msRequestFullscreen) { // IE/Edge
        embed.msRequestFullscreen();
    }
});
