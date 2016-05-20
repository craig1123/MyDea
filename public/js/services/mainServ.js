angular.module('mIdea')
.service('mainServ', function ($http) {


  //local Auth
  this.login = function(user) {
   return $http({
     method: 'POST',
     url: '/login',
     data: user
   }).then(function(response) {
     return response;
   });
 };

 this.getUser = function() {
   return $http({
     method: 'GET',
     url: '/me'
   }).then(function(response) {
     return response;
   });
 };

 this.register = function(user) {
   return $http({
     method: 'POST',
     url: '/users',
     data: user
   }).then(function(response) {
     return response;
   });
 };

 this.logout = function() {
   return $http({
     method: 'GET',
     url: '/logout',
   }).then(function(response) {
     return response;
   });
 };

 this.getIdeas = function () {
   return $http.get('/api/ideas?viewable=true').then(function (response) {
       return response.data
     });
 };
 this.getIdeasQuery = function (search) {
   return $http.get('/api/ideas/query/?search=' + search).then(function (res) {
     return res.data
   })
 }
 this.updateIdea = function (id, rating) {
   return $http({
     method: "PUT",
     url: "/api/ideas/" + id,
     data: {rating:rating}
   }).then(function (res) {
     return res.data
   })
 };

})
