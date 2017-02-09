class PreviewController {
  constructor ($scope) {

    $scope.$watch('preview.items', ()=> {
      let items = this.items.sort((a,b) => a.order - b.order);

      this.data = JSON.stringify({
        data: items.map(i => i.text)
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