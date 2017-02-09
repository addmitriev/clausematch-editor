import styles from './main.style.css';
import preloaderStyles from './preloader.style.css';

class MainController {
  constructor (Textboxes) {
    this.textboxes = Textboxes.getTextboxes();
    this.styles = styles;
    this.preloaderStyles = preloaderStyles;
  }
}

MainController.$inject = ['Textboxes'];

export default MainController;