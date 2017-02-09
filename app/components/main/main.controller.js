import styles from './main.style.css';

class MainController {
  constructor (Textboxes) {
    this.textboxes = Textboxes.getTextboxes();
    this.styles = styles;
  }
}

MainController.$inject = ['Textboxes'];

export default MainController;