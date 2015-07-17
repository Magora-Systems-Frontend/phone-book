(function(){
    'use strict';

    angular
        .module('app.list')
        .filter('startFrom', startFrom);

    function startFrom(){
        return function(input, start){
            start = +start;
            return input.slice(start);
        }
    }
})();