import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});
const getTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(getTime, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));
