angular.module('ecrmApp.controllers', []).controller('CustomerListController', function($rootScope, $scope, $state, popupService, $window, Customer, Contact) {
    $scope.customers = Customer.query(); //fetch all customers. Issues a GET to /api/customers

    $scope.deleteCustomer = function(customer) { // Delete a customer. Issues a DELETE to /api/customers/:id
        if (popupService.showPopup('Really delete this?')) {
            customer.$delete(function() {
                $scope.customers = Customer.query();
            });
        }
    };
}).controller('CustomerViewController', function($scope, $stateParams, Customer, Contact) {
    $scope.customer = Customer.get({
        id: $stateParams.id
    },function(){
      $scope.contact = Contact.get({
        id: $scope.customer.contact_id
      });
    }); //Get a single customer.Issues a GET to /api/customers/:id


}).controller('CustomerCreateController', function($rootScope, $scope, $state, $stateParams, NgTableParams, Customer, Contact, ModalService) {
    $scope.contacts = Contact.query();
    $scope.customer = new Customer(); //create new customer instance. Properties will be set via ng-model on UI
    $scope.addCustomer = function() { //create a new customer. Issues a POST to /api/customers
        $scope.customer.$save(function() {
            $state.go('customers'); // on success go back to home i.e. customers state.
        });
    };
    $scope.assignContact = function(contact) {
      console.log("in assignContact");
      console.log(contact._id);
      $rootScope.contact_id = contact._id;

    };

    //ng-table.
    /*
    var self = this;
    $scope.contactsTable = new NgTableParams({}, {
      dataset: $scope.contacts
    });
    //console.log($scope.customer.contact_id);
    //ModalService

    $scope.showModal = function() {
      console.log("inside show modal");
      console.log(" contact id =" + $rootScope.contact_id);

      ModalService.showModal({
        templateUrl: "partials/contact/contact-search-modal.html",
        controller: "CustomerCreateController"
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {

        });
      });
  };
  */

}).controller('CustomerEditController', function($scope, $state, $stateParams, Customer, Contact) {
    $scope.contacts = Contact.query();
    $scope.updateCustomer = function() { //Update the edited customer. Issues a PUT to /api/customers/:id
        $scope.customer.$update(function() {
            $state.go('customers'); // on success go back to home i.e. customers state.
        });
    };

    $scope.loadCustomer = function() { //Issues a GET request to /api/customers/:id to get a customer to update
        $scope.customer = Customer.get({
            id: $stateParams.id
        });
    };

    $scope.loadCustomer(); // Load a customer which can be edited on UI
}).controller('ContactListController', function($scope, $state, popupService, $window, Contact) {
    $scope.contacts = Contact.query(); //fetch all contacts. Issues a GET to /api/contacts

    $scope.deleteContact = function(contact) { // Delete a contact. Issues a DELETE to /api/contacts/:id
        if (popupService.showPopup('Really delete this?')) {
            contact.$delete(function() {
                $scope.contacts = Contact.query();
            });
        }
    };
}).controller('ContactViewController', function($scope, $stateParams, Contact) {
    $scope.contact = Contact.get({
        id: $stateParams.id
    }); //Get a single contact.Issues a GET to /api/contacts/:id
}).controller('ContactCreateController', function($scope, $state, $stateParams, Contact) {
    $scope.contact = new Contact(); //create new contact instance. Properties will be set via ng-model on UI

    $scope.addContact = function() { //create a new contact. Issues a POST to /api/contacts
        $scope.contact.$save(function() {
            $state.go('contacts'); // on success go back to home i.e. contacts state.
        });
    };
}).controller('ContactEditController', function($scope, $state, $stateParams, Contact) {
    $scope.updateContact = function() { //Update the edited contact. Issues a PUT to /api/contacts/:id
        $scope.contact.$update(function() {
            $state.go('contacts'); // on success go back to home i.e. contacts state.
        });
    };

    $scope.loadContact = function() { //Issues a GET request to /api/contacts/:id to get a contact to update
        $scope.contact = Contact.get({
            id: $stateParams.id
        });
    };

    $scope.loadContact(); // Load a contact which can be edited on UI
}).controller('ContactSearchController', function($scope, $state, $stateParams, Contact) {
    $scope.contacts = Contact.query();
    $scope.text =" some random message";
});
