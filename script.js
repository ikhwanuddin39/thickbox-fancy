document.getElementById('attachment_1102').addEventListener('click', function() {
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
    console.log('Fullscreen button clicked'); // Debugging log
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


