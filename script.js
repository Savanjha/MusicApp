document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        {
            title: 'Song 1',
            artist: 'Artist 1',
            url: 'path/to/song1.mp3'
        },
        {
            title: 'Song 2',
            artist: 'Artist 2',
            url: 'path/to/song2.mp3'
        },
        {
            title: 'Song 3',
            artist: 'Artist 3',
            url: 'path/to/song3.mp3'
        }
    ];

    let currentSongIndex = 0;

    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const playlist = document.getElementById('playlist');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function loadSong(index) {
        const song = songs[index];
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        audioPlayer.src = song.url;
    }

    function playSong() {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    }

    function pauseSong() {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }

    function playPauseSong() {
        if (audioPlayer.paused) {
            playSong();
        } else {
            pauseSong();
        }
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    playBtn.addEventListener('click', playPauseSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        playlist.appendChild(li);
    });

    loadSong(currentSongIndex);
});
