(function(angular){
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
                deletePerson: '&',
                currentItem: '=',
                editPerson: '&'
            },
            bindToController: true,
            templateUrl: 'app/list/list.html',
            controller: function(){
                var listCtrl = this;
                listCtrl.startingItem = function() {
                    return this.currentPage * this.itemsPerPage;

                };

                listCtrl.currentEditPerson = function(index){
                    this.currentItem = 5;
                    console.log('index ' + index);
                    this.editPerson();
                };

                listCtrl.currentDeletePerson = function(index){
                    this.currentItem = index;
                    this.deletePerson();
                };
            },
            controllerAs: 'listCtrl'
        }
    }
})(angular);