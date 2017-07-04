angular.module('ecrmApp', ['ui.router', 'ngResource', 'ngTable', 'angularModalService', 'ecrmApp.controllers', 'ecrmApp.services']);

angular.module('ecrmApp').config(function($stateProvider) {
  $stateProvider.state('customers', { // state for showing all customers..
    url: '/customers',
    templateUrl: 'partials/customer/customers.html',
    controller: 'CustomerListController'
  }).state('viewCustomer', { //state for showing single customer.
    url: '/customers/:id/view',
    templateUrl: 'partials/customer/customer-view.html',
    controller: 'CustomerViewController'
  }).state('newCustomer', { //state for adding a new customer.
    url: '/customers/new',
    templateUrl: 'partials/customer/customer-add.html',
    controller: 'CustomerCreateController'
  }).state('editCustomer', { //state for updating a customer.
    url: '/customers/:id/edit',
    templateUrl: 'partials/customer/customer-edit.html',
    controller: 'CustomerEditController'
  }).state('contacts', { // state for showing all contacts..
    url: '/contacts',
    templateUrl: 'partials/contact/contacts.html',
    controller: 'ContactListController'
  }).state('viewContact', { //state for showing single contact.
    url: '/contacts/:id/view',
    templateUrl: 'partials/contact/contact-view.html',
    controller: 'ContactViewController'
  }).state('newContact', { //state for adding a new contact.
    url: '/contacts/new',
    templateUrl: 'partials/contact/contact-add.html',
    controller: 'ContactCreateController'
  }).state('editContact', { //state for updating a contact.
    url: '/contacts/:id/edit',
    templateUrl: 'partials/contact/contact-edit.html',
    controller: 'ContactEditController'
  }).state('menu', { //state for adding a new customer.
    url: '/menu',
    templateUrl: 'partials/menu.html',
  });
}).run(function($state) {
  $state.go('menu'); //make a transition to customers state when app starts.
});
