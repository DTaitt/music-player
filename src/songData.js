// import 'prettyWings' from './audio/03 Pretty Wings.mp3';
// import 'shapeOfYou' from './audio/04 - Shape of You.mp3';
// import 'pdf' from './audio/Donovan_Taitt_Resume.pdf';

const prettyWings = require('./audio/03 Pretty Wings.mp3');
const shapeOfYou = require('./audio/04 - Shape of You.mp3');
const fuGeeLa = require('./audio/06. Fu-Gee-La.mp3');
const luv = require('./audio/14. Luv.mp3');
const someoneLikeYou = require('./audio/17 Adele - Someone Like You (Live Acoustic).mp3');

const songData = [
  {
    'title': 'Pretty Wings',
    'album': 'BLACKsummers\'night',
    'audio': prettyWings
  },
  {
    'title': 'Shape of You',
    'album': '÷',
    'audio': shapeOfYou
  },
  {
    'title': 'Fu-Gee-La',
    'album': 'The Score',
    'audio': fuGeeLa
  },
  {
    'title': 'Luv',
    'album': 'I Told You',
    'audio': luv
  },
  {
    'title': 'Someone Like You',
    'album': '21',
    'audio': someoneLikeYou
  },
]

export default songData;
