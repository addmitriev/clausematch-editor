import angular from 'angular';
import UIRouter from 'angular-ui-router';

import routes from './main.routes';
import Preview from './components/preview/preview.component';
import Main from './components/main/main.component';

export default angular.module('app.main', [ UIRouter ])
  .component('main', Main)
  .component('preview', Preview)
  .config(routes)
  .name;