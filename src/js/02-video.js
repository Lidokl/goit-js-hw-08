const iFrame = document.querySelector('#vimeo-player');
import throttle from 'lodash.throttle';

//const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iFrame);
function savedCurrentTime(date) {
    localStorage.setItem('videoplayer-current-time', Math.round(date.seconds));
   
}
const throttleSavedCurrentTime = throttle(savedCurrentTime, 1000);
player.on('timeupdate', throttleSavedCurrentTime );

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime).then(function (seconds) { })
.catch(function (error) {
switch (error.name) {
    case 'RangeError':
        break;
    default:
        break;
}
});