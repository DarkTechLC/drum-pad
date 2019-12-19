const body = document.querySelector('body')

const KeyboardPlaySong = (event) => {
  var keyPress = event.key;
  switch (keyPress) {
    case 'a':
    case 'A':
      console.log('A');
      break;
    case 's':
    case 'S':
      console.log('S');
      break;
    case 'd':
    case 'D':
      console.log('D');
      break;
    case 'f':
    case 'F':
      console.log('F');
      break;
    case 'g':
    case 'G':
      console.log('G');
      break;
    case 'h':
    case 'H':
      console.log('H');
      break;
    case 'j':
    case 'J':
      console.log('J');
      break;
    case 'k':
    case 'K':
      console.log('K');
      break;
    default:
      console.log('Pressione uma tecla válida!');
  }
}

const ClickPlaySong = () => {

}

body.addEventListener('keypress', KeyboardPlaySong)
