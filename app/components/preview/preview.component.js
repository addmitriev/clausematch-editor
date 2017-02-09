import PreviewController from './preview.controller';

const PreviewComponent = {
  template: require('./preview.view.html'),
  controller: PreviewController,
  controllerAs: 'preview',
  bindings: {
    items: '<'
  }
};

export default PreviewComponent;