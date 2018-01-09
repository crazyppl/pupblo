/*var logApp = angular.module('myApp');

logApp.controller('usersController', ['userFactory', function(userFactory){
    console.log('user controller loaded');
}])*/

/*
(function () {
    'use strict';
    var logApp = angular.module('myApp');
    logApp.controller('usersController', ['userFactory', function(userFactory){
        console.log("controller loaded");
    }]);
}());*/
angular.module('myApp').controller('usersController', ['userFactory', '$location', function(userFactory, $location){
    // console.log('hello how are you?');
    // $location.html5Mode(true);
    if(userFactory.loggedUser._id){
        console.log("user is logged in");
    }
    else {
        console.log("not logged in");
        $location.url('/');
    }
    var self = this;
    this.validationErrors;
    this.register = function () {
        console.log(self.reg);
        userFactory.register(self.reg, function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            self.validationErrors = error.data.errors;
        })
    }
    this.login = function () {
        console.log(self.logUser);
        userFactory.login(self.logUser, function (data) {
            console.log("first callback, everything is good");
            console.log(data);
            userFactory.setLogin(data);
            $location.path('/blog');
        }, function (error) {
            console.log("second callback");
            console.log(error);
            self.validationErrors = error.data.data.errors;
        })
    }
}]);