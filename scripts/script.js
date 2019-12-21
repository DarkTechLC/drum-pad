const body = document.querySelector('body');

/// Selecionar a tag de áudio e definir o som.
const selectPlayerAndSong = (play, song, key) => {
  let player = document.querySelector(play);
  player.src = `songs/${song}`;
  player.play();
  console.log(`Tecla ou área clicada: "${key}"`);
}

/// Mapear as teclas de ativação e definir o som de cada uma delas.
const keyboardPlaySong = (event) => {
  let keyPress = event.key;

  switch (keyPress) {
    case 'a':
    case 'A':
      selectPlayerAndSong('#play1', 'Track01.mp3', 'A');
      break;
    case 's':
    case 'S':
      selectPlayerAndSong('#play2', 'Track02.mp3', 'S');
      break;
    case 'd':
    case 'D':
      selectPlayerAndSong('#play3', 'Track03.mp3', 'D');
      break;
    case 'f':
    case 'F':
      selectPlayerAndSong('#play4', 'Track04.mp3', 'F');
      break;
    case 'g':
    case 'G':
      selectPlayerAndSong('#play5', 'Track05.mp3', 'G');
      break;
    case 'h':
    case 'H':
      selectPlayerAndSong('#play6', 'Track06.mp3', 'H');
      break;
    case 'j':
    case 'J':
      selectPlayerAndSong('#play7', 'Track07.mp3', 'J');
      break;
    case 'k':
    case 'K':
      selectPlayerAndSong('#play8', 'Track08.mp3', 'K');
      break;
    case 'p':
    case 'P':
      let stopSongs = document.querySelectorAll('audio');
      for (let i = 0; i < stopSongs.length; i++) {
        stopSongs[i].pause();
      }
      console.log('P');
      break
    default:
      //document.querySelector('.alert').style.display = 'flex';
      alert('Pressione uma tecla válida!');
  }
}

/// Fazer com que a área clicada reproduza um determinado som.
const playSongWithClick = (area, play, song) => {
  let areaClick = document.querySelector(area);
  areaClick.addEventListener('click', function () {
    selectPlayerAndSong(play, song, area);
  })
}

/// Definir o som de cada área clicada.
const playSongs = () => {
  playSongWithClick('#area1', '#play1', 'Track01.mp3');
  playSongWithClick('#area2', '#play2', 'Track02.mp3');
  playSongWithClick('#area3', '#play3', 'Track03.mp3');
  playSongWithClick('#area4', '#play4', 'Track04.mp3');
  playSongWithClick('#area5', '#play5', 'Track05.mp3');
  playSongWithClick('#area6', '#play6', 'Track06.mp3');
  playSongWithClick('#area7', '#play7', 'Track07.mp3');
  playSongWithClick('#area8', '#play8', 'Track08.mp3');
}

/// Chamada de funções.
body.addEventListener('keypress', keyboardPlaySong);
playSongs();
