'use strict';

angular.module('solutionCenter')
  .controller('solutionCenterHeaderController', [
    function() {

      var vm = this;

      // TODO: remove this
      vm.user = { name: 'Colin Howald' };
      vm.modules = [
        {
          "id": 1,
          "name": "CMS",
          "url": "https://frontend-stage.codebrewers.zalan.do",
          "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-cms.svg"
        },
        {
          "id": 2,
          "name": "Analytics",
          "url": "https://insights-frontend-test.adventure.zalan.do",
          "icon": "https://s3-eu-west-1.amazonaws.com/solution-center-cdn/module-icons/icon-analytics.svg"
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
      vm.brand = { name: "Hugo Boss", id: 1 };




      vm.PRODUCT_GENERAL = 'General';

      //vm.user = security.user();
      vm.brandswitcherVisible = false;
      vm.usermenuVisible = false;
      vm.modulesMenuVisible = true;
      vm.helpWidgetVisible = false;

      //vm.modules = '';

      //vm.session = session;

      //modulesService.getModules()
      //  .then(function (response) {
      //      vm.modules = response.data;
      //    },
      //    function () {
      //      vm.modules = [];
      //    })
      //  .then(function() {
      //    nanorepService.loadHelpWidget(vm.modules);
      //  });

      //if ($routeParams.extId) {
      //  brandService.getMerchant($routeParams.extId)
      //    .then(function (response) {
      //      vm.brand = response.data;
      //      if (window.innerWidth > 480) {
      //        vm.modulesVisible = true;
      //      }
      //    });
      //}

      vm.logout = function () {
        //security.logout();
      };

      vm.toggleMenu = function (menuToToggle) {
        if (menuToToggle === 'brand') {
          vm.brandswitcherVisible = !vm.brandswitcherVisible;
          vm.usermenuVisible = false;
          vm.modulesMenuVisible = false;
        }
        else if (menuToToggle === 'user') {
          vm.usermenuVisible = !vm.usermenuVisible;
          vm.brandswitcherVisible = false;
          vm.modulesMenuVisible = false;
        }
        else if (menuToToggle === 'modules') {
          vm.modulesMenuVisible = !vm.modulesMenuVisible;
          vm.usermenuVisible = false;
          vm.brandswitcherVisible = false;
        }
      };

      var loadHelpWidget = function(modules) {
        // NANOREP EMBEDDED WIDGET -- DO NOT MODIFY CODE (except API section)
        // generated at my.nanorep.com > gear > widget > embedded widget > get the code
        var _nRepData = window._nRepData || [];
        _nRepData['kb'] = '70732382';
        // API Start
        _nRepData["customParams"] =
        {
          product: calcProducts(modules)
        };
        // End API
        _nRepData['embed'] = {
          account: 'zalandobrands',
          container: 'nanoRepEmbedContainer',
          width: 400,
          maxHeight: 500,
          dynamicSize: true,
          cdcFrame: '',
          cdcVersion: 3,
          scriptVersion: '2.74.7.3'
        };
        (function () {
          var windowLoadFunc = function () {
            var _nRepData = window._nRepData || [];
            _nRepData['windowLoaded'] = true;
            if (typeof(_nRepData['windowOnload']) === 'function') _nRepData['windowOnload']();
          };
          if (window.attachEvent)window.attachEvent('onload', windowLoadFunc);
          else if (window.addEventListener)window.addEventListener('load', windowLoadFunc, false);
          var sc = document.createElement('script');
          sc.type = 'text/javascript';
          sc.async = true;
          sc.defer = true;
          sc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
            'my.nanorep.com/widget/scripts/embed.js?account=zalandobrands';
          var _head = document.getElementsByTagName('head')[0];
          _head.appendChild(sc);
        })();
        // added this to generate code so we can run this outside the global scope
        window._nRepData = _nRepData;
      };

      var calcProducts = function (modules) {
        var products = [vm.PRODUCT_GENERAL];
        angular.forEach(modules, function(module) {
          if (module.name) {
            products.push(module.name);
          }
        });
        return products;
      };

      loadHelpWidget(vm.modules);
    }
  ]);