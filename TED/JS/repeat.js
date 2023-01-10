(function(){
    'user strict';

    angular 
         .module('app')
         .controller('repeatController', repeatController);

    reapeatController.$inject = ['$location'];

    function reapeatController($location){
        var employees = [
            {firstName: "Ben", lastName: "Has", age: "14"},
            {firstName: "Ben", lastName: "Has", age: "14"},
            {firstName: "Ben", lastName: "Has", age: "14"},
            {firstName: "Ben", lastName: "Has", age: "14"}
        ];
        $scope.employees = employees
    }
})();