(function(){
    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/form-list/form-list.html',
                controller: 'PhoneBookController',
                controllerAs: 'phoneBook'
            });

        $locationProvider.html5Mode(true);
    }
})();