var app = angular.module('demo', ['ngSanitize', 'solutionCenter']).controller('demoController', [
  function() {
    this.brand = { name: "Lacoste", id: 19 };
    //this.data = { modules: [
    //  {
    //    "id": 1,
    //    "name": "CMS",
    //    "url": "https://frontend-stage.codebrewers.zalan.do",
    //    "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-cms.svg"
    //  }, {
    //    "id": 2,
    //    "name": "Analytics",
    //    "url": "https://insights-frontend-test.adventure.zalan.do",
    //    "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-analytics.svg"
    //  }, {
    //    "id": 3,
    //    "name": "Users",
    //    "url": "https://usf-stage.norris.zalan.do",
    //    "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-users.svg"
    //  }, {
    //    "id": 5,
    //    "name": "ZMS",
    //    "url": "zms",
    //    "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-zms.svg"
    //  }
    //]};
  }
]);