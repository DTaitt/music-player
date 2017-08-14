import { prettyWings } from './../audio/03 Pretty Wings.mp3';
import { shapeOfYou } from './../audio/04 - Shape of You.mp3';
import { fuGeeLa } from './../audio/06. Fu-Gee-La.mp3';
import { luv } from './../audio/14. Luv.mp3';
import { someoneLikeYou } from './../audio/17 Adele - Someone Like You (Live Acoustic).mp3';

const songData = [
  {
    'id': 1,
    'artist': 'Maxwell',
    'title': 'Pretty Wings',
    'album': 'BLACKsummers\'night',
    'audio': prettyWings,
    'filetype': 'mp3',
  },
  {
    'id': 2,
    'artist': 'Ed Sheeran',
    'title': 'Shape of You',
    'album': '÷',
    'audio': shapeOfYou,
    'filetype': 'mp3',
  },
  {
    'id': 3,
    'artist': 'The Fugees',
    'title': 'Fu-Gee-La',
    'album': 'The Score',
    'audio': fuGeeLa,
    'filetype': 'mp3',
  },
  {
    'id': 4,
    'artist': 'Tory Lanez',
    'title': 'Luv',
    'album': 'I Told You',
    'audio': luv,
    'filetype': 'mp3',
  },
  {
    'id': 5,
    'artist': 'Adele',
    'title': 'Someone Like You',
    'album': '21',
    'audio': someoneLikeYou,
    'filetype': 'mp3',
  },
]

export default songData;
