angular.module('mIdea')
.service('createServ', function ($http) {


      this.getIdeas = function () {
        return $http.get('/api/ideas').then(function (response) {
            return response.data
          });
      },
      this.postIdea = function (idea) {
        return $http.post('/api/ideas', idea).then(function (response) {
          return response.data
        })
      }

      this.logout = function() {
        return $http({
          method: 'GET',
          url: '/logout',
        }).then(function(response) {
          return response;
        });
      };

})
