import angular from 'angular';
import Textboxes from './textboxes.service';
import 'angularfire';

export default angular.module('app.services', ['firebase'])
  .service('Textboxes', Textboxes)
  .name;