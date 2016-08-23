$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//// routing/////
var app = angular.module('app',[
	'ngRoute',
	'ngCookies',
	'appControllers'
	],function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    });
	
 app.directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
	}]);


app.config(['$routeProvider',function($routeProvider){
$routeProvider.
  when('/', {
  templateUrl:'partials/index.html',
  controller:'MainController'
  }).
  when('/login', {
  templateUrl:'partials/login.html',
  controller:'LoginController'
  }).
  when('/register', {
  templateUrl:'partials/register.html',
  controller:'RegisterController'
  }).
   when('/dashboard', {
  templateUrl:'partials/dashboard.html',
  controller:'DashboardController'
  }).
   when('/errorPage', {
  templateUrl:'partials/index.html',
  controller:'MainController'
  }).
  otherwise( {
  redirectTo : '/errorPage'
  });
}]);






