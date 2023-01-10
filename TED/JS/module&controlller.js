//Create a module
var myApp = angular.module("myModule", []);
                        //tên module  // chuỗi gtri
//Create the controller and registering with the module all done in one line
myApp.controller("myController", function($scope){
    $scope.message = "AngularJS Tutorial"
});
            //tên controller // tên function
