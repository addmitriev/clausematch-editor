const ContentEditable = ($parse) => {
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

      ngModel.$render = ()=> {
        let html = ngModel.$viewValue || '';
        element.html(html);
      }
    }
  }
};

ContentEditable.$inject = [ '$parse' ];

export default ContentEditable;