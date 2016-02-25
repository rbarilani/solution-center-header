var app = angular.module('demo', ['solutionCenter']).controller('demoController', [
  function() {
    this.brand = { name: "Lacoste", id: 19 };
    this.user = { name: "Colin Howald" };
    this.modules = [
      {
        "id": 1,
        "name": "CMS",
        "url": "cms",
        "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-cms.svg"
      },
      {
        "id": 3,
        "name": "Users",
        "url": "#/",
        "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-users.svg"
      },
      {
        "id": 5,
        "name": "ZMS",
        "url": "zms",
        "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-zms.svg"
      }
    ];
    this.url = "/";
    this.logout = function() {
      console.log('logout clicked');
    }
  }
]);