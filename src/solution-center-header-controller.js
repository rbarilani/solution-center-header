'use strict';

angular.module('solutionCenter')
  .controller('SolutionCenterHeaderController', [
    function() {

      var vm = this;

      vm.SOLUTION_CENTER_URL = vm.solutionCenterUrl || "https://www.solutions.zalando.com/#/";
      vm.HELP_PRODUCT_GENERAL = 'General';
      vm.brandSwitcherVisible = false;
      vm.userMenuVisible = false;
      vm.modulesMenuVisible = false;
      vm.helpWidgetVisible = false;

      vm.toggleMenu = function (menuToToggle) {
        if (menuToToggle === 'brand') {
          vm.brandSwitcherVisible = !vm.brandSwitcherVisible;
          vm.userMenuVisible = false;
          vm.modulesMenuVisible = false;
        }
        else if (menuToToggle === 'user') {
          vm.userMenuVisible = !vm.userMenuVisible;
          vm.brandSwitcherVisible = false;
          vm.modulesMenuVisible = false;
        }
        else if (menuToToggle === 'modules') {
          vm.modulesMenuVisible = !vm.modulesMenuVisible;
          vm.userMenuVisible = false;
          vm.brandSwitcherVisible = false;
        }
      };

      var loadHelpWidget = function(modules) {
        // NANOREP EMBEDDED WIDGET -- DO NOT MODIFY CODE (except API section)
        // generated at my.nanorep.com > Guided Journeys > Touchpoints > Embedded Widget > get the code
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
        var products = [vm.HELP_PRODUCT_GENERAL];
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