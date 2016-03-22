'use strict';

describe('solution-center-header', function () {
  var scope, $compile, $rootScope, element;

  function createDirective() {
    var elm;

    elm = angular.element('<solution-center-header user="user" modules="modules" brand="brand" logout="logout()">' +
      '</solution-center-header>');
    angular.element(document.body).prepend(elm);
    $compile(elm)(scope);
    scope.$digest();

    return elm;
  }

  beforeEach(function() {
    module('solutionCenter');

    inject(function (_$rootScope_, _$compile_) {
      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      scope.user = {name: 'dummyPerson'};
      scope.modules = [{name: "Dummy1", id: 1, url:'http://url1.com'}, {name: "Dummy2", id: 2, url:'http://url2.com'}];
      scope.brand = {name: "dummyBrand", id: 1};
      scope.loggedIn = true;
      scope.logout = function() {
        scope.loggedIn = false;
      };
      $compile = _$compile_;
    });

    element = createDirective();
  });

  afterEach(function () {
    if (element) element.remove();
  });

  describe('initial state', function () {
    describe('the template', function () {
      it('should have been applied ', function () {
        expect(element.html()).not.toEqual('');
      });
      it('should have a header element', function () {
        expect(element.find('header').length).toEqual(1);
      });
      it('should have a logo container', function () {
        expect(element.find('.logo-container').length).toEqual(1);
      });
      it('should have product submenu', function () {
        expect(element.find('.menu-toggle').length).toEqual(1);
      });
      it('should have a link for each module', function () {
        angular.forEach(scope.modules, function (module) {
          expect(element.find('a:contains("' + module.name + '")').length).toEqual(1);
        });
      });
      it('should have a brand switcher with the brand name in it', function () {
        expect(element.find('.brand-switcher').length).toEqual(1);
        expect(element.find('span:contains("' + scope.brand.name + '")').length).toEqual(1);
      });
      it('should have a logo container', function () {
        expect(element.find('.logo-container').length).toEqual(1);
      });
      it('should have a user menu', function () {
        expect(element.find('span:contains(' + scope.user.name + ')').length).toEqual(1);
      });
      it('should have a help widget', function () {
        expect(element.find('#nanoRepEmbedContainer').length).toEqual(1);
      });
    });
    describe('the controller', function() {
      it('has known structure', function () {
        var controller = element.isolateScope().headerCtrl;
        expect(controller.toggleMenu).toBeDefined();
      });
      it('should default all the submenus and help to closed', function() {
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.headerCtrl.brandSwitcherVisible).toEqual(false);
        expect(isolatedScope.headerCtrl.userMenuVisible).toEqual(false);
        expect(isolatedScope.headerCtrl.modulesMenuVisible).toEqual(false);
        expect(isolatedScope.headerCtrl.helpWidgetVisible).toEqual(false);
      });
      it('loads the help widget data', function () {
        expect(window._nRepData).toBeDefined();
      });
      it('calculates products and sets them to the nanorep API', function () {
        expect(window._nRepData.customParams.product).toEqual(['General','Dummy1','Dummy2']);
      });
      it('constructs the user\'s name from the first and last names in the user object', function () {
        scope.user = { firstName: 'John', lastName: 'Doe' };
        element = createDirective();
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.headerCtrl.username).toEqual('John Doe');
      });
      it('falls back to using the name property in the user object if no firstname or lastname', function () {
        scope.user = { firstName: 'John', name: 'John Fallback' }; // no lastname
        element = createDirective();
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.headerCtrl.username).toEqual('John Fallback');
        scope.user = { lastName: 'Doe', name: 'John Fallback' }; // no firstname
        element = createDirective();
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.headerCtrl.username).toEqual('John Fallback');
      });
      it('does not set the username if no first or lastname and no name found in user', function () {
        scope.user = { firstName: 'John' }; // no lastname, no name
        element = createDirective();
        var isolatedScope = element.isolateScope();
        expect(isolatedScope.headerCtrl.username).toBeUndefined();
      });
    });
  });
  describe('interaction', function () {
    it('should call the logout function when logout is clicked', function() {
      expect(scope.loggedIn).toEqual(true);
      var link = element.find('a:contains(Logout)');
      link.triggerHandler('click');
      scope.$digest();
      expect(scope.loggedIn).toEqual(false);
    });
  });
});