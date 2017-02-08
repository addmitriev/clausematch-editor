import angular from 'angular';
import UIRouter from 'angular-ui-router';

import routing from './routing';
import Main from './main.module';

export default angular.module('app', [UIRouter, Main])
  .config(routing)
  .name;
