import styles from './preview.style.css';

class PreviewController {
  constructor ($scope) {
    this.styles = styles;

    $scope.$watch('preview.items', ()=> {
      this.data = JSON.stringify({
        data: this.items.map(i => i.text)
      }, null, 2);
    }, true);
  }

  onClick (event) {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(event.target);
    selection.removeAllRanges();
    selection.addRange(range);
  }

}

PreviewController.$inject = ['$scope'];

export default PreviewController;