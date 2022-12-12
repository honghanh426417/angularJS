var app = angular.module("App", []);

app.controller('ContactController', function ($scope) {
    var uid = 1;
    $scope.contacts = [
        { id: 0, 'name' : 'Ngo Anh Tuan', 'email': 'tuananhngo@gmail.com', 'phone': '111-222-333'
          
    },
    { id: 1, 'name' : 'Ngo Thanh Thao', 'email': 'thanhthao@gmail.com', 'phone': '123445'
          
    },
    { id: 2, 'name' : 'Nguyen Duc Tho', 'email': 'duc tho@gmail.com', 'phone': '4578349'
          
    },
    { id: 3, 'name' : 'Do Thi Hong Hanh', 'email': 'honghanh@gmail.com', 'phone': '534739'
          
    },
    { id: 4, 'name' : 'Van Toan', 'email': 'vantoan@gmail.com', 'phone': '0987656'
          
    },
    ];

    $scope.saveContact = function () {
        if ($scope.newcontact.id == null) {
            $scope.newcontact.id = uid++;
            $scope.contacts.push($scope.newcontact);
        } else {
            for(i in $scope.contacts) {
                if($scope.contacts[i].id == $scope.newcontact.id) {
                    $scope.contacts[i] =$scope.newcontact;
                }
            }
        }
        $scope.newcontact = {};
    }

    $scope.delete = function (id) {
        for(i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.contacts.splice(i, 1);
                $scope.newcontact = {};
            }
        }
    }

    $scope.edit = function (id) {
        for (i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.newcontact =angular.copy($scope.contacts[i]);
            }
        }
    }
});