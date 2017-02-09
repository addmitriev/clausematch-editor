class Textboxes {
  constructor () {
    this.textboxes = [
      {id: 2, text: "text 1"},
      {id: 0, text: "text 2"},
      {id: 1, text: "text 3"}
    ];
  }

  getTextboxes(){
    return this.textboxes;
  }

  getTextbox(index){
    return this.textboxes[index];
  }

  addTextbox(index){
    let id = Math.max.apply(null, this.textboxes.map(i => i.id)) + 1;
    this.textboxes.splice(index + 1, 0, {id, text: ''});
  }

  removeTextbox(index){
    if (this.textboxes.length > 1){
      this.textboxes.splice(index, 1);
    }
  }
}

export default Textboxes;