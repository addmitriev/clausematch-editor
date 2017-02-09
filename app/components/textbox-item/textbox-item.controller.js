import styles from './textbox-item.style.css';

class TextboxItemController {
  constructor (Textboxes) {
    this.styles = styles;
    this.Textboxes = Textboxes;
    this.add = this.Textboxes.addTextbox.bind(Textboxes);
    this.remove = this.Textboxes.removeTextbox.bind(Textboxes);
  }

  removeItem () {
    this.remove(this.index);
  }

  addItem () {
    this.add(this.index);
  }
}

TextboxItemController.$inject = [ 'Textboxes' ];

export default TextboxItemController;