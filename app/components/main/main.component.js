import MainController from './main.controller';
import './main.style.css';
import './preloader.style.css';

const Main = {
  template: require('./main.view.html'),
  controller: MainController,
  controllerAs: 'main'
};

export default Main;