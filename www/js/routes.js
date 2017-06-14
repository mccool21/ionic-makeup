angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.makeupList', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/makeupList.html',
        controller: 'makeupListCtrl'
      }
    }
  })

  .state('makeupAtTheStores', {
    url: '/page10',
    templateUrl: 'templates/makeupAtTheStores.html',
    controller: 'makeupAtTheStoresCtrl'
  })

  .state('addNewMakeup', {
    url: '/page8',
    templateUrl: 'templates/addNewMakeup.html',
    controller: 'addNewMakeupCtrl'
  })

  .state('tabsController.yourMakeup', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/yourMakeup.html',
        controller: 'yourMakeupCtrl'
      }
    }
  })

  .state('tabsController.cameraUpload', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cameraUpload.html',
        controller: 'cameraUploadCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});