import styles from './textbox-item.style.css';

class TextboxItemController {
  constructor (Textboxes) {
    this.styles = styles;
    this.Textboxes = Textboxes;
    this.add = this.Textboxes.addTextbox.bind(Textboxes);
    this.remove = this.Textboxes.removeTextbox.bind(Textboxes);
    this.save = this.Textboxes.saveTextbox.bind(Textboxes);
  }

  removeItem () {
    this.remove(this.model);
  }

  addItem () {
    this.add(this.index);
  }

  saveItem(){
    this.save(this.model);
  }

}

TextboxItemController.$inject = [ 'Textboxes' ];

export default TextboxItemController;