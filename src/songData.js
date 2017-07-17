// import 'prettyWings' from './audio/03 Pretty Wings.mp3';
// import 'shapeOfYou' from './audio/04 - Shape of You.mp3';
// import 'pdf' from './audio/Donovan_Taitt_Resume.pdf';

const prettyWings = require('./audio/03 Pretty Wings.mp3');
const shapeOfYou = require('./audio/04 - Shape of You.mp3');

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
  }
]

export default songData;
