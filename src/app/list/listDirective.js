(function(){
    'use strict';

    angular
        .module('app.list')
        .directive('list', list);

    function list(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                items: '=',
                currentPage: '=',
                itemsPerPage: '=',
                editPerson: '&',
                deletePerson: '&'
            },
            bindToController: true,
            templateUrl: 'app/list/list.html',
            controller: function(){
                var listPersons = this;

                listPersones.startingItem = function() {
                    return listPersons.currentPage * listPersons.itemsPerPage;
                };
            },
            controllerAs: 'listCtrl'
        }
    }
})();