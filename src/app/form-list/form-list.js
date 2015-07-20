(function(angular){

    'use strict';

    angular
        .module('app')
        .controller('PhoneBookController', PhoneBookController)
        .run(cache);

    cache.$inject = ['CacheFactory'];

    function cache(CacheFactory){
        CacheFactory.createCache('phoneBookCache', {
            storageMode: 'localStorage'
        });
    }

    PhoneBookController.$inject = ['CacheFactory'];

    function PhoneBookController(CacheFactory) {
        var phoneBook = this;
        phoneBook.persons = [];
        phoneBook.person = {};

        phoneBook.currentPage = 0;
        phoneBook.itemsPerPage = 5;

        var phoneBookCache = CacheFactory.get('phoneBookCache');
        var persons = phoneBookCache.get('phoneBook');

        phoneBook.persons = (persons) ? persons : [];

        phoneBook.addPerson = function(){
            if(this.isNewRecord()){
                phoneBook.persons.push(phoneBook.person);
                phoneBook.person = {};
            }

            phoneBook._sync();
        };

        phoneBook.deletePerson = function(){
            phoneBook.persons.splice(phoneBook.current, 1);

            phoneBook._sync();
        };

        phoneBook.editPerson = function(){
            console.log('phoneBook.current ' + phoneBook.current);
            this.person = phoneBook.persons[phoneBook.current];

        };

        phoneBook._sync = function(){
            phoneBookCache.put('phoneBook', phoneBook.persons);
        };

        phoneBook.isNewRecord = function(){
            return this.persons.indexOf(this.person) === -1;
        };
    }

})(angular);