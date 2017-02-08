import angular from 'angular';
import AppModule from './app.module';

angular.bootstrap(document.getElementById('app'), [ AppModule ]);

if (module.hot){
  module.hot.accept();
}
