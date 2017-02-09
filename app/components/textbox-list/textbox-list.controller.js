class TextboxListController {
  constructor (Textboxes) {
    this.Textboxes = Textboxes;
  }

  reorder ($indexFrom, $indexTo) {
    let order = this.Textboxes.textboxes[$indexFrom].order;
    this.Textboxes.textboxes[$indexFrom].order = this.Textboxes.textboxes[$indexTo].order;
    this.Textboxes.textboxes[$indexTo].order = order;
    this.Textboxes.saveAll();
  }

}

TextboxListController.$inject = [ 'Textboxes' ];

export default TextboxListController;