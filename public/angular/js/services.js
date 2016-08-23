angular
.module('appServices',[])
.factory('userService', function(){
    function register123(){
		alert('boom');
    }
});


/* var appServices = angular.module('appServices', [
    'LocalStorageModule'
]);

appServices.factory('userService', ['$http', 'localStorageService', function($http, localStorageService){
	
    function checkIfLoggedIn(){

        if(localStorageService.get('token'))
            return true;
        else
            return false;

    }
	
	function register(firstname, lastname, email, password, onSuccess, onError){

        $http.post('/postRegister', 
        {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }).
        then(function(response) {

            localStorageService.set('token', response.data.token);
            onSuccess(response);

        }, function(response) {

            onError(response);

        });

    }
	
	function login(email, password, onSuccess, onError){

        $http.post('/api/auth/login', 
        {
            email: email,
            password: password
        }).
        then(function(response) {

            localStorageService.set('token', response.data.token);
            onSuccess(response);

        }, function(response) {

            onError(response);

        });

    }
	
	 function logout(){

        localStorageService.remove('token');

    }

    function getCurrentToken(){
        return localStorageService.get('token');
    }

    return {
        checkIfLoggedIn: checkIfLoggedIn,
        register: register,
        login: login,
        logout: logout,
        getCurrentToken: getCurrentToken
    }
}]); */