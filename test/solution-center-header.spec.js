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
      scope.modules = [{name: "dummy1", id: 1, url:'http://url1.com'}, {name: "dummy2", id: 2, url:'http://url2.com'}];
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
    it('should have applied the template ', function () {
      expect(element.html()).not.toEqual('');
    });
    it('should have a header element', function () {
      expect(element.find('header').length).toEqual(1);
    });
    it('should have a logo container', function() {
      expect(element.find('.logo-container').length).toEqual(1);
    });
    it('should have product submenu', function() {
      expect(element.find('.menu-toggle').length).toEqual(1);
    });
    it('should have a link for each module', function() {
      angular.forEach(scope.modules, function(module) {
        expect(element.find('a[href="' + module.url + '"]').length).toEqual(1);
      });
    });
    it('should have a brand switcher with the brand name in it', function() {
      expect(element.find('.brand-switcher').length).toEqual(1);
      expect(element.find('span:contains(' + scope.brand.name + ')').length).toEqual(1);
    });
    it('should have a logo container', function() {
      expect(element.find('.logo-container').length).toEqual(1);
    });
    it('should have a user menu', function() {
      expect(element.find('span:contains(' + scope.user.name + ')').length).toEqual(1);
    });
    it('should have a help widget', function() {
      expect(element.find('#nanoRepEmbedContainer').length).toEqual(1);
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