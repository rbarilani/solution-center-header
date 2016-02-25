/*!
 * solution-center-header
 * https://github.com/zalando/solution-center-header
 * Version: 0.0.1 - 2016-02-25T08:42:17.859Z
 * License: MIT
 */


'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function ($templateCache) {
  return {
    scope: {
      brand: '=',
      user: '=',
      modules: '=',
      logout: '&',
      solutionCenterUrl: '@'
    },
    restrict: 'E',
    template: $templateCache.get('solution-center-header.html'),
    controller: 'SolutionCenterHeaderController',
    controllerAs: 'headerCtrl',
    bindToController: true
  };
});
'use strict';

angular.module('solutionCenter').directive('clickOutside', ['$parse', '$document', function($parse, $document) {
  return {
    link: function(scope, element, attrs) {

      registerListener();

      scope.$on('$destroy', function() {
        unregisterListener();
      });


      // ---------- private methods ----------

      function eventHandler(ev) {
        if (!(element[0].contains(ev.target) || element[0] === ev.target)) {
          scope.$apply(attrs.clickOutside);
        }
      }

      function registerListener() {
        $document.bind('click', eventHandler);
        $document.bind('touchstart', eventHandler);
      }

      function unregisterListener() {
        $document.unbind('click', eventHandler);
        $document.unbind('touchstart', eventHandler);
      }

    }
  };
}]);
'use strict';

angular.module('solutionCenter')
  .controller('SolutionCenterHeaderController', [
    function() {

      var vm = this;

      vm.SOLUTION_CENTER_URL = vm.solutionCenterUrl || "https://solutions.zalando.com/#/";
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
angular.module("solutionCenter").run(["$templateCache", function($templateCache) {$templateCache.put("solution-center-header.html","<header class=\"header\" click-outside=\"headerCtrl.modulesMenuVisible=false; headerCtrl.brandSwitcherVisible=false; headerCtrl.userMenuVisible=false\"><div class=\"logo-container\"><div alt=\"Logo\" class=\"logo logo--large\"></div><div alt=\"Logo\" class=\"logo logo--small\"></div></div><div class=\"menu-toggle\" ng-click=\"headerCtrl.toggleMenu(\'modules\')\" ng-if=\"headerCtrl.modules\"><i class=\"dc-icon dc-icon--menu dc-icon--interactive\"></i></div><nav class=\"navigation navigation--global navigation--sub navigation--left\" ng-class=\"{\'shown-mobile\': headerCtrl.modulesMenuVisible}\"><ul class=\"menu\"><li class=\"menu__item\" ng-repeat=\"module in headerCtrl.modules\"><a ng-href=\"{{module.url}}\" class=\"menu__link\">{{module.name}}</a></li></ul></nav><a href=\"\" ng-click=\"headerCtrl.toggleMenu(\'brand\')\" class=\"brand-switcher\" title=\"Switch Brand\"><span class=\"brand-switcher__brand-name\">{{headerCtrl.brand.name}}</span></a><nav class=\"navigation navigation--sub navigation--right\" ng-show=\"headerCtrl.brandSwitcherVisible\" ng-class=\"{shown: headerCtrl.brandSwitcherVisible}\"><ul class=\"menu\"><li class=\"menu__item\"><a ng-href=\"{{headerCtrl.SOLUTION_CENTER_URL}}brands/{{headerCtrl.brand.id}}\" class=\"menu__link\">{{headerCtrl.brand.name}} Account</a></li><li class=\"menu__item\"><a href=\"{{headerCtrl.SOLUTION_CENTER_URL}}brands\" class=\"menu__link\">Switch Brand</a></li></ul></nav><div class=\"toggle\" ng-click=\"headerCtrl.toggleMenu(\'user\')\" ng-if=\"headerCtrl.user.name\"><span class=\"user-name\">{{headerCtrl.user.name}}</span> <i class=\"dc-icon dc-icon--user dc-icon--interactive\"></i></div><nav class=\"navigation navigation--sub navigation--right\" ng-show=\"headerCtrl.userMenuVisible\" ng-class=\"{shown: headerCtrl.userMenuVisible}\"><ul class=\"menu\"><li class=\"menu__item\"><a href=\"{{headerCtrl.SOLUTION_CENTER_URL}}account\" class=\"menu__link\">My Account</a></li><li class=\"menu__item\"><a href=\"\" ng-click=\"headerCtrl.logout()\" class=\"menu__link\">Logout</a></li></ul></nav><div class=\"dc-btn-dropdown\" data-click-outside=\"headerCtrl.helpWidgetVisible=false\"><div href=\"\" class=\"toggle\" ng-click=\"headerCtrl.helpWidgetVisible=!headerCtrl.helpWidgetVisible\"><i class=\"dc-icon dc-icon--help dc-icon--interactive\"></i></div><div aria-live=\"polite\" id=\"nanoRepEmbedContainer\" class=\"dc-btn-dropdown__list dc-btn-dropdown__list--down help-widget\" ng-class=\"{ \'visible\': headerCtrl.helpWidgetVisible }\"><i class=\"dc-icon dc-icon--close dc-icon--interactive\" ng-click=\"headerCtrl.helpWidgetVisible=false\"></i></div></div></header>");}]);