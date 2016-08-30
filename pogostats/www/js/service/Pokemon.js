var PokemonService = function(){

  var getAll = function() {
    return data;
  };

  var data = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["poison", "grass"]
    },
    {
      id: 2,
      name: "Ivysaur",
      types: ["poison", "grass"]
    },
    {
      id: 3,
      name: "Venusaur",
      types: ["poison", "grass"]
    },
    {
      id: 4,
      name: "Charmander",
      types: ["fire"]
    },
    {
      id: 5,
      name: "Charmeleon",
      types: ["fire"]
    },
    {
      id: 6,
      name: "Charizard",
      types: ["fire", "flying"]
    },
    {
      id: 7,
      name: "Squirtle",
      types: ["water"]
    },
    {
      id: 8,
      name: "Wartortle",
      types: ["water"]
    },
    {
      id: 9,
      name: "Blastoise",
      types: ["water"]
    },
    {
      id: 10,
      name: "Caterpie",
      types: ["bug"]
    },
    {
      id: 11,
      name: "Metapod",
      types: ["bug"]
    },
    {
      id: 12,
      name: "Butterfree",
      types: ["bug", "flying"]
    },
    {
      id: 13,
      name: "Weedle",
      types: ["bug", "poison"]
    }
  ];

  return {
    getAll: getAll
  };


};

