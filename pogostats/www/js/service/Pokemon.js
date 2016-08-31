var PokemonService = function(){

  var getAll = function() {
    return data;
  };

  var data = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["poison", "grass"],
      maxCP: 1071,
      tier: 0,
      egg: 2
    },
    {
      id: 2,
      name: "Ivysaur",
      types: ["poison", "grass"],
      maxCP: 1632,
      tier: 1,
      egg: 0
    },
    {
      id: 3,
      name: "Venusaur",
      types: ["poison", "grass"],
      maxCP: 2580,
      tier: 5,
      egg: 0
    },
    {
      id: 4,
      name: "Charmander",
      types: ["fire"],
      maxCP: 955,
      tier: 0,
      egg: 2
    },
    {
      id: 5,
      name: "Charmeleon",
      types: ["fire"],
      maxCP: 1557,
      tier: 1,
      egg: 0
    },
    {
      id: 6,
      name: "Charizard",
      types: ["fire", "flying"],
      maxCP: 2602,
      tier: 5,
      egg: 0
    },
    {
      id: 7,
      name: "Squirtle",
      types: ["water"],
      maxCP: 1008,
      tier: 0,
      egg: 2
    },
    {
      id: 8,
      name: "Wartortle",
      types: ["water"],
      maxCP: 1582,
      tier: 1,
      egg: 0
    },
    {
      id: 9,
      name: "Blastoise",
      types: ["water"],
      maxCP: 2542,
      tier: 5,
      egg: 0
    },
    {
      id: 10,
      name: "Caterpie",
      types: ["bug"],
      maxCP: 1300,
      tier: 0,
      egg: 2
    },
    {
      id: 11,
      name: "Metapod",
      types: ["bug"],
      maxCP: 1300,
      tier: 0,
      egg: 0
    },
    {
      id: 12,
      name: "Butterfree",
      types: ["bug", "flying"],
      maxCP: 1300,
      tier: 1,
      egg: 0
    },
    {
      id: 13,
      name: "Weedle",
      types: ["bug", "poison"],
      maxCP: 1300,
      tier: 0,
      egg: 2
    },












    {
      id: 23,
      name: "Ekans",
      types: ["poison"],
      maxCP: 824,
      tier: 0,
      egg: 5
    }
  ];

  return {
    getAll: getAll
  };


};

