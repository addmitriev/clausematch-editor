import PreviewController from './preview.controller';
import './preview.style.css';

const PreviewComponent = {
  template: require('./preview.view.html'),
  controller: PreviewController,
  controllerAs: 'preview',
  bindings: {
    items: '<'
  }
};

export default PreviewComponent;