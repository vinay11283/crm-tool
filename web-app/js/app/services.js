angular.module('ecrmApp.services', []).factory('Customer', function($resource) {
  return $resource('http://localhost:5000/api/customers/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Contact', function($resource) {
  return $resource('http://localhost:5000/api/contacts/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
