var appControllers = angular.module('appControllers', ['ngCookies']);

appControllers.controller('LoginController', ['$scope', '$cookieStore', '$location', '$http', function ($scope, $cookieStore, $location, $http) {
	 if($cookieStore.get('email') != undefined){
		$location.path( "/dashboard" );
	 }
	$scope.pageClass = 'page-login';
	$scope.loginstat = '';
	$scope.login = function() {
		var url = '/exam/public/auth';
	    $http.post(url, 
	      {
	        email: $scope.email,
	        password: $scope.password
	      })
	      .success(function(response) {
	      	console.log(response);
	        //$scope.success = '';
			if(response == 0){
				$scope.loginstat = 'Incorrect Email or password';
				console.log($scope.loginstat);
				$scope.email = null;
				$scope.password = null;
			}else{
			  $cookieStore.put('email', response.email);
			  $cookieStore.put('id', response.id);
			  $cookieStore.put('firstname', response.firstname);
			  $cookieStore.put('lastname', response.lastname);
			  $location.path( "/dashboard" );
			 }
			  
	      })
	      .error(function(response) {
	        console.log(response);
	      });
    };
}]);

appControllers.controller('RegisterController', ['$scope', '$cookieStore', '$location',  '$http', function ($scope, $cookieStore, $location,  $http) {
	 if($cookieStore.get('email') != undefined){
		$location.path( "/dashboard" );
	 }
	$scope.pageClass = 'page-register';
	$scope.register = function() {
		var url = '/exam/public/users';
	    $http.post(url, 
	      {
	        firstname: $scope.firstname,
	        lastname: $scope.lastname,
	        email: $scope.email,
	        password: $scope.password,
	        password_confirmation: $scope.password_confirmation

	      })
	      .success(function(response) {
	        $scope.accounts = response;
	        $scope.success = '';
			
			if(response.success == undefined) {
				$scope.email_error = response.email[0];
				$scope.password_error = response.password[0];
				$scope.firstname_error = response.firstname[0];
				$scope.lastname_error = response.lastname[0];
			}
			else{
				$location.path( "/" );
			}
	      })
	      .error(function(response) {
	        console.log(response);
	      });
		  
		   /*  $scope.firstname = null;
	       $scope.lastname = null;
	       $scope.email = null;
	       $scope.password = null;
	       $scope.password_confirmation = null; */
		   //alert('Registration Successful');
		   //document.location.href = '/exam/public'; 

    };
}]);

appControllers.controller('MainController', ['$scope', '$cookieStore', '$location', '$http', function ($scope, $cookieStore, $location, $http) {
	 if($cookieStore.get('email') != undefined){
		$location.path( "/dashboard" );
	 }
    
}]);

appControllers.controller('DashboardController', ['$scope', '$cookieStore', '$location', '$http', function ($scope, $cookieStore, $location, $http) {
	//console.log($cookieStore.get('email'));
     if($cookieStore.get('email') == undefined){
		$location.path( "/" );
	 }
		$scope.logout = function() {
			  $cookieStore.remove('email');
			  $cookieStore.remove('id');
			  $cookieStore.remove('firstname');
			  $cookieStore.remove('lastname');
			  $location.path( "/" );
    };
}]);
