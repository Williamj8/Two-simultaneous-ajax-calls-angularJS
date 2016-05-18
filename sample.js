// Code goes here
var app = angular.module('myApp', []);

app.controller('PromiseCtrl', function ($scope, $q, $http) {

    async1 = function (headers, sampleurl1, id) {
        console.log(headers)
        return $http({
            method: "GET"
            , url: sampleurl1
            , headers
            , params: {
                id: id
            }
        }).then(response => {
            //Ideally return response but this call goes to catch block
            return response;
        }).catch(error => {
            //Ideally return response but we will return string instead
            //return $q.reject(error);
            return 'Promise#1';
        });
    };
    async2 = function (headers, sampleurl2, id) {
        console.log(headers)
        return $http({
            method: "GET"
            , url: sampleurl2
            , headers
            , params: {
                id: id
            }
        }).then(response => {
            //Ideally return response but this call goes to catch block
            return response;
        }).catch(error => {
            //Ideally return response but we will return string instead
            //return $q.reject(error);
            return 'Promise#2';
        });
    };

    var allPromise = $q.all([
    async1({}, 'first/url', 123)
    , async2({}, 'second/url', 789)
  ]);

    allPromise.then(function (values) {
        $scope.value1 = values[0]
            , $scope.value2 = values[1]
    });

});