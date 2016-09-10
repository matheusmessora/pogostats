angular.module('starter.controllers', [])

.filter('eggFilter', function() {
  return function(pokemons, km){
    if(!km){
      return pokemons;
    }
    var result = [];

    angular.forEach(pokemons, function(pokemon){
      if(pokemon.egg == km){
        result.push(pokemon);
      }
    });

    return result;
  }

})

.controller('HomeCtrl', function($scope, $ionicScrollDelegate, pokemonService) {

  $scope.selectedEgg = undefined; // (?)
  $scope.scrollToTopButton = false;


  $scope.scrollToTop = function() { //ng-click for back to top button
    console.log("OPA scrolltoTop");
    $ionicScrollDelegate.scrollTop();
    $scope.scrollToTopButton=false;  //hide the button when reached top
  };

  $scope.getScrollPosition = function() {
    var moveData = $ionicScrollDelegate.getScrollPosition().top;
    $scope.$apply(function(){
      $scope.scrollToTopButton = moveData > 150;
    });
  };

  $scope.setEggFilter = function(egg){
    if(egg == $scope.selectedEgg){
      $scope.selectedEgg = undefined;
    }else {
      $scope.selectedEgg = egg;
    }

  };

  $scope.pokemons = pokemonService.getAll();


  $scope.iterate = function(number) {
    return new Array(number);
  };

  $scope.hatchable = function(distance){
    return distance > 0;
  };


  $scope.formatName = function(name){
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

});

