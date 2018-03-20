var app = angular.module('myApp', []);
app.controller("FormController", function($scope, $http) {
    $scope.email = {
        text: 'me@example.com'
      },
        $scope.userfirstname = {
          text: 'Firstname'
      },
        $scope.userlastname = {
          text: 'Lastname'
      },
        $scope.userphone = {
            text: 'Phone Number'
        },
        $scope.userpassword = {
          text: 'password'
      };
	
});

app.directive('pwCheck', function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {
			scope.$watch(attrs.pwCheck, function (confirmPassword) {
    			var isValid = ctrl.$viewValue === confirmPassword;
    			ctrl.$setValidity('pwmatch', isValid);
            });
		}
	}
});