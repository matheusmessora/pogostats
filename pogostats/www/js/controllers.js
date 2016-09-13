angular.module('starter.controllers', [])

.filter('eggFilter', function() {
  return function(pokemons, km){
    if(!km) return pokemons;

    var result = [];

    angular.forEach(pokemons, function(pokemon){
      if(pokemon.egg == km){
        result.push(pokemon);
      }
    });

    return result;
  }

})
.filter('nameFilter', function() {
  return function(pokemons, name){
    if(!name) return pokemons;

    var result = [];

    angular.forEach(pokemons, function(pokemon){
      if(pokemon.name == name){
        result.push(pokemon);
      }
    });

    return result;
  }

})

.controller('HomeCtrl', function($scope, $ionicScrollDelegate, $filter, pokemonService) {

  var pokemons = pokemonService.getAll();
  pokemons = preparePokemons(pokemons);

  $scope.selectedEgg = undefined; // (?)
  $scope.nameSearch = "";
  $scope.scrollToTopButton = false;
  $scope.scopefilteredPokemons = pokemons;
  $scope.eggButtonClass = '';

  function preparePokemons(pokemons){
    var result = [];
    angular.forEach(pokemons, function(pokemon){
      var data = {
        id: pokemon.id,
        name: formatName(pokemon.name),
        egg: pokemon.egg,
        img: lowerCase(pokemon.name),
        types: pokemon.types,
        maxCP: pokemon.maxCP,
        hatchable: hatchable(pokemon.egg)
      };
      result.push(data);
    });

    return result;
  }


  $scope.scrollToTop = function() { //ng-click for back to top button
    $ionicScrollDelegate.scrollTop();
    $scope.scrollToTopButton=false;  //hide the button when reached top
  };

  $scope.getScrollPosition = function() {
    var moveData = $ionicScrollDelegate.getScrollPosition().top;
    $scope.$apply(function(){
      $scope.scrollToTopButton = moveData > 150;
    });
  };

  function doFilter() {
    var filtered = $filter('eggFilter')(pokemons, $scope.selectedEgg);
    filtered = $filter('nameFilter')(filtered, $scope.nameSearch);

    $scope.scopefilteredPokemons = preparePokemons(filtered);
  }

  $scope.setEggFilter = function(egg){
    if(egg == $scope.selectedEgg){
      $scope.selectedEgg = undefined;
      $scope.scopefilteredPokemons = pokemons;
      $scope.eggButtonClass = '';
    }else {
      $scope.selectedEgg = egg;
      $scope.eggButtonClass = 'activated-button';
      doFilter();
    }
  };

  $scope.getEggFilter = function(egg){
    if(egg == $scope.selectedEgg){
      return true
    }
    return false;
  };

  $scope.iterate = function(number) {
    return new Array(number);
  };

  function hatchable(distance){
    return distance > 0;
  }

  function lowerCase(name){
    return name.toString().toLowerCase();
  }


  function formatName(name){
    if (name == "Nidoran-f"){
      return 'Nidoran <span class="icon ion-female"></span>';
    }
    if (name == "Nidoran-m"){
      return 'Nidoran <span class="icon ion-male"></span>';
    }
    if (name == "mrmime"){
      return 'Mr. Mime';
    }

    return name;
  };

  preparePokemons(pokemons)

});

