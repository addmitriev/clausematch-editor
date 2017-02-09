import firebase from 'firebase';

class Textboxes {
  constructor ($firebaseArray) {
    let ref = firebase.database().ref().child("data");
    this.ref = ref;
    this.textboxes = $firebaseArray(ref);
    this.textboxes.$loaded().then(()=>{
      if (this.textboxes.length === 0) {
        this.textboxes.$add({ text: 'type here', order: 0 });
      }
    });
  }

  getTextboxes () {
    return this.textboxes;
  }

  addTextbox(index){
    let order = parseInt(this.textboxes[index].order, 10) + 1;
    this.textboxes.$add({text: '', order}).then(()=>{
      this.saveAll();
    });
  }

  removeTextbox (item) {
    if (this.textboxes.length > 1) {
      this.textboxes.$remove(item);
    }
  }

  saveTextbox (item) {
    this.textboxes.$save(item);
  }

  saveAll(){
    this.textboxes.sort((a,b) => a.order - b.order ).forEach((item, index)=>{
      item.order = index * 10;
      this.textboxes.$save(item);
    });
  }

}

Textboxes.$inject = [ '$firebaseArray' ];

export default Textboxes;