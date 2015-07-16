(function(){
    'use strict';

    angular
        .module('app.pagination')
        .directive('pagination', pagination);

    function pagination(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                items: '=',
                currentPage: '=',
                itemsPerPage: '='
            },
            bindToController: true,
            templateUrl: 'app/pagination/pagination.html',
            controller: function(){
                /*this.currentPage = 0;
                this.itemsPerPage = 5;*/

                this.firstPage = function() {
                    return this.currentPage == 0;
                };

                this.lastPage = function() {
                    var lastPageNum = Math.ceil(this.items.length / this.itemsPerPage - 1);
                    return this.currentPage == lastPageNum;
                };

                this.numberOfPages = function(){
                    var a = Math.ceil(this.items.length / this.itemsPerPage);
                    //debugger;
                    return Math.ceil(this.items.length / this.itemsPerPage);
                };

                this.pageBack = function() {
                    this.currentPage = this.currentPage - 1;
                };

                this.pageForward = function() {
                    this.currentPage = this.currentPage + 1;
                }
            },
            controllerAs: 'paginationCtrl'
        }
    }
})();