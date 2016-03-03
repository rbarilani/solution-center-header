var app = angular.module('demo', ['solutionCenter']).controller('demoController', [ '$q',
  function($q) {
    var vm = this;
    vm.brand = { name: "Lacoste", id: 19 };
    vm.user = { name: "Colin Howald" };
    vm.modules = [];

    var modules = [
      {
        "id": 1,
        "name": "CMS",
        "url": "cms"
      },
      {
        "id": 3,
        "name": "Users",
        "url": "#/"
      },
      {
        "id": 5,
        "name": "ZMS",
        "url": "zms"
      },
      {
        "id": 6,
        "name": "Analytics",
        "url": "analytics"
      },
      {
        "id": 7,
        "name": "Google",
        "url": "https://www.google.com/"
      }
    ];
    vm.url = "/";
    vm.logout = function() {
      console.log('logout clicked');
    };

    vm.getModules = function () {
      return $q(function(resolve) {
        setTimeout(function() {
          resolve(modules);
        }, 1000);
      });
    };

    vm.getModules().then(function(response) {
      vm.modules = response;
    });
  }
]);