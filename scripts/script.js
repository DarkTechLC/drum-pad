const body = document.querySelector('body');

const selectIdAndSong = (id, song) => {
  let player = document.querySelector(id);
  player.src = `songs/${song}`;
  player.play();
}

const keyboardPlaySong = (event) => {
  let keyPress = event.key;
  switch (keyPress) {
    case 'a':
    case 'A':
      selectIdAndSong('#play1', 'Track01.mp3')
      console.log('A');
      break;
    case 's':
    case 'S':
      selectIdAndSong('#play2', 'Track02.mp3')
      console.log('S');
      break;
    case 'd':
    case 'D':
      selectIdAndSong('#play3', 'Track03.mp3')
      console.log('D');
      break;
    case 'f':
    case 'F':
      selectIdAndSong('#play4', 'Track04.mp3')
      console.log('F');
      break;
    case 'g':
    case 'G':
      selectIdAndSong('#play5', 'Track05.mp3')
      console.log('G');
      break;
    case 'h':
    case 'H':
      selectIdAndSong('#play6', 'Track06.mp3')
      console.log('H');
      break;
    case 'j':
    case 'J':
      selectIdAndSong('#play7', 'Track07.mp3')
      console.log('J');
      break;
    case 'k':
    case 'K':
      selectIdAndSong('#play8', 'Track08.mp3')
      console.log('K');
      break;
    case 'p':
    case 'P':
      let pause = document.querySelectorAll('audio');
      for (let i = 0; i < pause.length; i++) {
        pause[i].pause();
      }
      console.log('P');
      break
    default:
      //document.querySelector('.alert').style.display = 'flex';
      alert('Pressione uma tecla válida!');
  }
}

/*const clickPlaySong = (area, play, music) => {
  let areaClick = document.querySelector(area)
  areaClick.addEventListener('click', selectIdAndSong(play, music));
}

clickPlaySong('#area1', '#play1', 'Track01.mp3')*/

//document.querySelector('#area1').addEventListener('click', selectIdAndSong('#play1', 'Track01.mp3'))

body.addEventListener('keypress', keyboardPlaySong);
