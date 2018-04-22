 const _video = document.getElementById('video-player'),
      _play = document.getElementById('play-video'),
      _mute = document.getElementById('play-sound'),
   _list = document.getElementsByClassName('video-list')[0],
   _mp4 = document.getElementById('mp4-source'),
   _webm = document.getElementById('webm-source'),
       _playicon = document.getElementById('playicon'),
       _muteicon = document.getElementById('muteicon');

_play.addEventListener('click', function(e) {
    if (_video.paused) {
      _video.play();
        _playicon.src = "img/pausebutton.png";
        
    } else {
      _video.pause();
        _playicon.src = "img/playbutton.png";
    }
});

_mute.addEventListener('click', function(e) {
    if (_video.muted) {
      _video.muted = false;
        _muteicon.src = "img/unmutedbutton.png";
        
    } else {
      _video.muted = true;
        _muteicon.src = "img/mutebutton.png";
    }
});



_list.addEventListener('click', function(e) {
    console.log(e);
    if (e.target.classList.contains("video-list-item")){
         
        let _othervideo = e.target.getAttribute("data-src"),
            _videomp4 = 'video/' + _othervideo + '.mp4',
            _videowebm = 'video/' + _othervideo + '.webm',
            poster = 'img/' + _othervideo + '.jpg';
        
        _video.setAttribute('poster', poster);
        _mp4.setAttribute('src', _videomp4);
        _webm.setAttribute('src', _videowebm);
        _playicon.src = "img/playbutton.png";
        
        _video.load();
    }

}); 

