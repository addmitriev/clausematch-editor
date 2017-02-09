class TextboxListController {
  constructor (Textboxes) {
    this.Textboxes = Textboxes;
  }

  reorder ($partTo) {
    $partTo.forEach((item, index) => {
      $partTo[index].order = index * 10;
    });

    this.Textboxes.textboxes = $partTo;
    this.Textboxes.saveAll();
  }
}

TextboxListController.$inject = [ 'Textboxes' ];

export default TextboxListController;