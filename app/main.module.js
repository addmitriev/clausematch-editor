import angular from 'angular';
import UIRouter from 'angular-ui-router';

import routes from './main.routes';
import Services from './services';
import ContentEditable from './directives/contenteditable';
import Preview from './components/preview/preview.component';
import Main from './components/main/main.component';
import TextboxList from './components/textbox-list/textbox-list.component';
import TextboxItem from './components/textbox-item/textbox-item.component';
import 'angular-sortable-view';

export default angular.module('app.main', [ UIRouter, Services, 'angular-sortable-view' ])
  .directive('contenteditable', ContentEditable)
  .component('main', Main)
  .component('preview', Preview)
  .component('textboxList', TextboxList)
  .component('textboxItem', TextboxItem)
  .config(routes)
  .name;