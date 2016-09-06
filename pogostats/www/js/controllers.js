angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, pokemonService) {

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

