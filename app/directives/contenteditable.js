const ContentEditable = ($parse) => {
  'ngInject';
  return {
    restrict: 'A',
    require: '?ngModel',
    link: ($scope, element, attrs, ngModel)=> {
      if (!ngModel) {
        return;
      }

      element.html($parse(attrs.ngModel)($scope));

      element.bind('input', () => {
        let html = element.html();
        ngModel.$setViewValue(html);
      });
    }
  }
};

export default ContentEditable;