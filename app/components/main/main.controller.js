class MainController {
  constructor (Textboxes) {
    this.textboxes = Textboxes.getTextboxes();
  }
}

MainController.$inject = ['Textboxes'];

export default MainController;