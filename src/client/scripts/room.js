document.getElementById('notebook').addEventListener('click', function() {
    window.location.href = '/src/client/notebook.html'; 
});

document.getElementById('wardrobe').addEventListener('click', function() {
    window.location.href = '/src/client/wardrobe.html'; 
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = '/src/client/index.html'; 
});

document.addEventListener('DOMContentLoaded', function() {
    let isPlaying = false;

    document.getElementById('music-button').addEventListener('click', function() {
        const audio = document.getElementById('study-music');
        const musicButton = document.getElementById('music-button');
        
        if (isPlaying) {
            audio.pause();
            musicButton.innerHTML = "Play Music";
        } else {
            audio.play();
            musicButton.innerHTML = "Stop Music";
        }
        isPlaying = !isPlaying;
    });
});
