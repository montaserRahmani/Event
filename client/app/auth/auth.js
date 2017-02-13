// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('event.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.org ={};

  // $scope.signin = function () {
  //   Auth.signin($scope.user)
  //     .then(function (token) {
  //       $window.localStorage.setItem('com.shortly', token);
  //       $location.path('/links');
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  $scope.userSignup = function () {
    console.log(";dc;")
    var temp=$scope.user
    console.log(temp)
    Auth.userSignup(temp)
      .then(function () {
        // $window.localStorage.setItem('com.shortly', token);
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.OrgnizerSignup = function () {
    var temp=$scope.org
    console.log(temp)
    Auth.OrgSignup(temp)
      .then(function () {
        // $window.localStorage.setItem('com.shortly', token);
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});