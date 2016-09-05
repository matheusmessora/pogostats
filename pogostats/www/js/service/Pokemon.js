var PokemonService = function () {

  var getAll = function () {
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
      maxCP: 449,
      tier: 0,
      egg: 2
    },
    {
      id: 14,
      name: "Kakuna",
      types: ["bug", "poison"],
      maxCP: 485,
      tier: 0,
      egg: 0
    },
    {
      id: 15,
      name: "Beedrill",
      types: ["bug", "poison"],
      maxCP: 1439,
      tier: 0,
      egg: 2
    },
    {
      id: 16,
      name: "Pidgey",
      types: ["flying", "normal"],
      maxCP: 679,
      tier: 0,
      egg: 2
    },
    {
      id: 17,
      name: "Pidgeotto",
      types: ["flying", "normal"],
      maxCP: 1223,
      tier: 0,
      egg: 0
    },
    {
      id: 18,
      name: "Pidgeot",
      types: ["flying", "normal"],
      maxCP: 2091,
      tier: 0,
      egg: 0
    },
    {
      id: 19,
      name: "Rattata",
      types: ["normal"],
      maxCP: 581,
      tier: 0,
      egg: 2
    },
    {
      id: 20,
      name: "Raticate",
      types: ["normal"],
      maxCP: 1444,
      tier: 0,
      egg: 0
    },
    {
      id: 21,
      name: "Spearow",
      types: ["flying", "normal"],
      maxCP: 686,
      tier: 0,
      egg: 2
    },
    {
      id: 22,
      name: "Fearow",
      types: ["flying", "normal"],
      maxCP: 1746,
      tier: 0,
      egg: 0
    },
    {
      id: 23,
      name: "Ekans",
      types: ["poison"],
      maxCP: 824,
      tier: 0,
      egg: 5
    },
    {
      id: 24,
      name: "Arbok",
      types: ["poison"],
      maxCP: 1767,
      tier: 0,
      egg: 0
    },
    {
      id: 25,
      name: "Pikachu",
      types: ["electric"],
      maxCP: 887,
      tier: 0,
      egg: 2
    },
    {
      id: 26,
      name: "Raichu",
      types: ["electric"],
      maxCP: 2028,
      tier: 0,
      egg: 0
    },
    {
      id: 27,
      name: "Sandshrew",
      types: ["ground"],
      maxCP: 798,
      tier: 0,
      egg: 5
    },
    {
      id: 28,
      name: "Sandslash",
      types: ["ground"],
      maxCP: 1810,
      tier: 0,
      egg: 0
    },
    {
      id: 29,
      name: "Nidoran F!",
      types: ["poison"],
      maxCP: 876,
      tier: 0,
      egg: 5
    },
    {
      id: 30,
      name: "Nidorina",
      types: ["poison"],
      maxCP: 1404,
      tier: 0,
      egg: 0
    },
    {
      id: 31,
      name: "Nidoqueen",
      types: ["ground", "poison"],
      maxCP: 2485,
      tier: 0,
      egg: 0
    },
    {
      id: 32,
      name: "Nidoran M!",
      types: ["poison"],
      maxCP: 843,
      tier: 0,
      egg: 5
    },
    {
      id: 33,
      name: "Nidorino",
      types: ["poison"],
      maxCP: 1372,
      tier: 0,
      egg: 0
    },
    {
      id: 34,
      name: "Nidoking",
      types: ["ground", "poison"],
      maxCP: 2475,
      tier: 0,
      egg: 0
    },
    {
      id: 35,
      name: "Clefairy",
      types: ["fairy"],
      maxCP: 1299,
      tier: 0,
      egg: 2
    },
    {
      id: 36,
      name: "Clefable",
      types: ["fairy"],
      maxCP: 2397,
      tier: 0,
      egg: 0
    },
    {
      id: 37,
      name: "Vulpix",
      types: ["fire"],
      maxCP: 831,
      tier: 0,
      egg: 5
    },
    {
      id: 38,
      name: "Ninetales",
      types: ["fire"],
      maxCP: 2188,
      tier: 0,
      egg: 0
    },
    {
      id: 39,
      name: "Jigglypuff",
      types: ["fairy", "normal"],
      maxCP: 917,
      tier: 0,
      egg: 2
    },
    {
      id: 40,
      name: "Wigglytuff",
      types: ["fairy", "normal"],
      maxCP: 2177,
      tier: 0,
      egg: 0
    },
    {
      id: 41,
      name: "Zubat",
      types: ["flying", "poison"],
      maxCP: 642,
      tier: 0,
      egg: 2
    },
    {
      id: 42,
      name: "Golbat",
      types: ["flying", "poison"],
      maxCP: 1921,
      tier: 0,
      egg: 0
    },
    {
      id: 43,
      name: "Oddish",
      types: ["grass", "poison"],
      maxCP: 1148,
      tier: 0,
      egg: 5
    },
    {
      id: 44,
      name: "Gloom",
      types: ["grass", "poison"],
      maxCP: 1689,
      tier: 0,
      egg: 0
    },
    {
      id: 45,
      name: "Vileplume",
      types: ["grass", "poison"],
      maxCP: 2492,
      tier: 0,
      egg: 0
    },
    {
      id: 46,
      name: "Paras",
      types: ["grass", "bug"],
      maxCP: 916,
      tier: 0,
      egg: 5
    },
    {
      id: 47,
      name: "Parasect",
      types: ["grass", "bug"],
      maxCP: 1747,
      tier: 0,
      egg: 0
    },
    {
      id: 48,
      name: "Venonat",
      types: ["poison", "bug"],
      maxCP: 1029,
      tier: 0,
      egg: 5
    },
    {
      id: 49,
      name: "Venomoth",
      types: ["poison", "bug"],
      maxCP: 1890,
      tier: 0,
      egg: 0
    },
    {
      id: 50,
      name: "Diglett",
      types: ["ground"],
      maxCP: 456,
      tier: 0,
      egg: 5
    },
    {
      id: 51,
      name: "Dugtrio",
      types: ["ground"],
      maxCP: 1168,
      tier: 0,
      egg: 0
    },
    {
      id: 52,
      name: "Meowth",
      types: ["normal"],
      maxCP: 756,
      tier: 0,
      egg: 5
    },
    {
      id: 53,
      name: "Persian",
      types: ["normal"],
      maxCP: 1631,
      tier: 0,
      egg: 0
    },
    {
      id: 54,
      name: "Psyduck",
      types: ["water"],
      maxCP: 1109,
      tier: 0,
      egg: 5
    },
    {
      id: 55,
      name: "Golduck",
      types: ["water"],
      maxCP: 2386,
      tier: 0,
      egg: 0
    },
    {
      id: 56,
      name: "Mankey",
      types: ["fighting"],
      maxCP: 878,
      tier: 0,
      egg: 5
    },
    {
      id: 57,
      name: "Primeape",
      types: ["fighting"],
      maxCP: 1864,
      tier: 0,
      egg: 0
    },
    {
      id: 58,
      name: "Growlithe",
      types: ["fire"],
      maxCP: 1335,
      tier: 0,
      egg: 5
    },
    {
      id: 59,
      name: "Arcanine",
      types: ["fire"],
      maxCP: 2983,
      tier: 0,
      egg: 0
    },
    {
      id: 60,
      name: "Poliwag",
      types: ["water"],
      maxCP: 795,
      tier: 0,
      egg: 5
    },
    {
      id: 61,
      name: "Poliwhirl",
      types: ["water"],
      maxCP: 1340,
      tier: 0,
      egg: 0
    },
    {
      id: 62,
      name: "Poliwrath",
      types: ["water", "fighting"],
      maxCP: 2505,
      tier: 0,
      egg: 0
    },
    {
      id: 63,
      name: "Abra",
      types: ["psychic"],
      maxCP: 600,
      tier: 0,
      egg: 5
    },
    {
      id: 64,
      name: "Kadabra",
      types: ["psychic"],
      maxCP: 1131,
      tier: 0,
      egg: 0
    },
    {
      id: 65,
      name: "Alakazam",
      types: ["psychic"],
      maxCP: 1813,
      tier: 0,
      egg: 0
    },
    {
      id: 66,
      name: "Machop",
      types: ["fighting"],
      maxCP: 1089,
      tier: 0,
      egg: 5
    },
    {
      id: 67,
      name: "Machoke",
      types: ["fighting"],
      maxCP: 1760,
      tier: 0,
      egg: 0
    },
    {
      id: 68,
      name: "Machamp",
      types: ["fighting"],
      maxCP: 2594,
      tier: 0,
      egg: 0
    },
    {
      id: 69,
      name: "Bellsprout",
      types: ["grass", "poison"],
      maxCP: 1117,
      tier: 0,
      egg: 5
    },
    {
      id: 70,
      name: "Weepinbell",
      types: ["grass", "poison"],
      maxCP: 1723,
      tier: 0,
      egg: 0
    },
    {
      id: 71,
      name: "Victreebel",
      types: ["grass", "poison"],
      maxCP: 2530,
      tier: 0,
      egg: 0
    },
    {
      id: 72,
      name: "Tentacool",
      types: ["poison", "water"],
      maxCP: 905,
      tier: 0,
      egg: 5
    },
    {
      id: 73,
      name: "Tentacruel",
      types: ["poison", "water"],
      maxCP: 2220,
      tier: 0,
      egg: 0
    },
    {
      id: 74,
      name: "Geodude",
      types: ["ground", "rock"],
      maxCP: 849,
      tier: 0,
      egg: 2
    },
    {
      id: 75,
      name: "Graveler",
      types: ["ground", "rock"],
      maxCP: 1433,
      tier: 0,
      egg: 0
    },
    {
      id: 76,
      name: "Golem",
      types: ["ground", "rock"],
      maxCP: 2303,
      tier: 0,
      egg: 0
    },
    {
      id: 77,
      name: "Ponyta",
      types: ["fire"],
      maxCP: 1516,
      tier: 0,
      egg: 5
    },
    {
      id: 78,
      name: "Rapidash",
      types: ["fire"],
      maxCP: 2199,
      tier: 0,
      egg: 0
    },
    {
      id: 79,
      name: "Slowpoke",
      types: ["water", "psychic"],
      maxCP: 1218,
      tier: 0,
      egg: 5
    },
    {
      id: 80,
      name: "Slowbro",
      types: ["water", "psychic"],
      maxCP: 2597,
      tier: 0,
      egg: 0
    },
    {
      id: 81,
      name: "Magnemite",
      types: ["electric", "steel"],
      maxCP: 890,
      tier: 0,
      egg: 5
    },
    {
      id: 82,
      name: "Magneton",
      types: ["electric", "steel"],
      maxCP: 1879,
      tier: 0,
      egg: 0
    },
    {
      id: 83,
      name: "Farfetch'd",
      types: ["flying", "normal"],
      maxCP: 1263,
      tier: 0,
      egg: 5
    },
    {
      id: 84,
      name: "Doduo",
      types: ["flying", "normal"],
      maxCP: 855,
      tier: 0,
      egg: 5
    },
    {
      id: 85,
      name: "Dodrio",
      types: ["flying", "normal"],
      maxCP: 1836,
      tier: 0,
      egg: 0
    },
    {
      id: 86,
      name: "Seel",
      types: ["water"],
      maxCP: 1107,
      tier: 0,
      egg: 5
    },
    {
      id: 87,
      name: "Dewgong",
      types: ["ice", "water"],
      maxCP: 2145,
      tier: 0,
      egg: 0
    },
    {
      id: 88,
      name: "Grimer",
      types: ["poison"],
      maxCP: 1284,
      tier: 0,
      egg: 5
    },
    {
      id: 89,
      name: "Muk",
      types: ["poison"],
      maxCP: 2602,
      tier: 0,
      egg: 0
    },
    {
      id: 90,
      name: "Shellder",
      types: ["water"],
      maxCP: 822,
      tier: 0,
      egg: 5
    },
    {
      id: 91,
      name: "Cloyster",
      types: ["ice", "water"],
      maxCP: 2052,
      tier: 0,
      egg: 0
    },
    {
      id: 92,
      name: "Gastly",
      types: ["ghost", "poison"],
      maxCP: 804,
      tier: 0,
      egg: 5
    },
    {
      id: 93,
      name: "Haunter",
      types: ["ghost", "poison"],
      maxCP: 1380,
      tier: 0,
      egg: 0
    },
    {
      id: 94,
      name: "Gengar",
      types: ["ghost", "poison"],
      maxCP: 2078,
      tier: 0,
      egg: 0
    },
    {
      id: 95,
      name: "Onix",
      types: ["ground", "rock"],
      maxCP: 857,
      tier: 0,
      egg: 10
    },
    {
      id: 96,
      name: "Drowzee",
      types: ["psychic"],
      maxCP: 1075,
      tier: 0,
      egg: 5
    },
    {
      id: 97,
      name: "Hypno",
      types: ["psychic"],
      maxCP: 2184,
      tier: 0,
      egg: 0
    },
    {
      id: 98,
      name: "Krabby",
      types: ["water"],
      maxCP: 792,
      tier: 0,
      egg: 5
    },
    {
      id: 99,
      name: "Kingler",
      types: ["water"],
      maxCP: 1823,
      tier: 0,
      egg: 0
    },
    {
      id: 100,
      name: "Voltorb",
      types: ["electric"],
      maxCP: 839,
      tier: 0,
      egg: 5
    },
    {
      id: 101,
      name: "Electrode",
      types: ["electric"],
      maxCP: 1646,
      tier: 0,
      egg: 0
    },
    {
      id: 102,
      name: "Exeggcute",
      types: ["grass", "psychic"],
      maxCP: 1099,
      tier: 0,
      egg: 5
    },
    {
      id: 103,
      name: "Exeggutor",
      types: ["grass", "psychic"],
      maxCP: 2955,
      tier: 0,
      egg: 0
    },
    {
      id: 104,
      name: "Cubone",
      types: ["ground"],
      maxCP: 1006,
      tier: 0,
      egg: 5
    },
    {
      id: 105,
      name: "Marowak",
      types: ["ground"],
      maxCP: 1656,
      tier: 0,
      egg: 0
    },
    {
      id: 106,
      name: "Hitmonlee",
      types: ["fighting"],
      maxCP: 1492,
      tier: 0,
      egg: 10
    },
    {
      id: 107,
      name: "Hitmonchan",
      types: ["fighting"],
      maxCP: 1516,
      tier: 0,
      egg: 10
    },
    {
      id: 108,
      name: "Lickitung",
      types: ["normal"],
      maxCP: 1626,
      tier: 0,
      egg: 5
    },
    {
      id: 109,
      name: "Koffing",
      types: ["poison"],
      maxCP: 1151,
      tier: 0,
      egg: 5
    },
    {
      id: 110,
      name: "Weezing",
      types: ["poison"],
      maxCP: 2250,
      tier: 0,
      egg: 0
    },
    {
      id: 111,
      name: "Rhyhorn",
      types: ["ground", "rock"],
      maxCP: 1182,
      tier: 0,
      egg: 5
    },
    {
      id: 112,
      name: "Rhydon",
      types: ["ground", "rock"],
      maxCP: 2243,
      tier: 0,
      egg: 0
    },
    {
      id: 113,
      name: "Chansey",
      types: ["normal"],
      maxCP: 675,
      tier: 0,
      egg: 10
    },
    {
      id: 114,
      name: "Tangela",
      types: ["grass"],
      maxCP: 1739,
      tier: 0,
      egg: 5
    },
    {
      id: 115,
      name: "Kangaskhan",
      types: ["normal"],
      maxCP: 2043,
      tier: 0,
      egg: 5
    },
    {
      id: 116,
      name: "Horsea",
      types: ["water"],
      maxCP: 794,
      tier: 0,
      egg: 5
    },
    {
      id: 117,
      name: "Seadra",
      types: ["water"],
      maxCP: 1713,
      tier: 0,
      egg: 0
    },
    {
      id: 118,
      name: "Goldeen",
      types: ["water"],
      maxCP: 965,
      tier: 0,
      egg: 5
    },
    {
      id: 119,
      name: "Seaking",
      types: ["water"],
      maxCP: 2043,
      tier: 0,
      egg: 0
    },
    {
      id: 120,
      name: "Staryu",
      types: ["water"],
      maxCP: 937,
      tier: 0,
      egg: 5
    },
    {
      id: 121,
      name: "Starmie",
      types: ["psychic", "water"],
      maxCP: 2182,
      tier: 0,
      egg: 0
    },
    {
      id: 122,
      name: "Mr. Mime",
      types: ["psychic", "fairy"],
      maxCP: 1494,
      tier: 0,
      egg: 10
    },
    {
      id: 123,
      name: "scyther",
      types: ["bug", "flying"],
      maxCP: 2073,
      tier: 0,
      egg: 10
    },
    {
      id: 124,
      name: "Jynx",
      types: ["ice", "psychic"],
      maxCP: 1716,
      tier: 0,
      egg: 10
    },
    {
      id: 125,
      name: "Electabuzz",
      types: ["electric"],
      maxCP: 2119,
      tier: 0,
      egg: 10
    },
    {
      id: 126,
      name: "Magmar",
      types: ["fire"],
      maxCP: 2265,
      tier: 0,
      egg: 10
    },
    {
      id: 127,
      name: "Pinsir",
      types: ["bug"],
      maxCP: 2121,
      tier: 0,
      egg: 10
    },
    {
      id: 128,
      name: "Tauros",
      types: ["normal"],
      maxCP: 1844,
      tier: 0,
      egg: 5
    },
    {
      id: 129,
      name: "Magikarp",
      types: ["water"],
      maxCP: 262,
      tier: 0,
      egg: 2
    },
    {
      id: 130,
      name: "Gyarados",
      types: ["water", "flying"],
      maxCP: 2688,
      tier: 0,
      egg: 0
    },
    {
      id: 131,
      name: "Lapras",
      types: ["ice", "water"],
      maxCP: 2980,
      tier: 0,
      egg: 10
    },
    {
      id: 132,
      name: "Ditto",
      types: ["normal"],
      maxCP: 919,
      tier: 0,
      egg: 0
    },
    {
      id: 133,
      name: "Eevee",
      types: ["normal"],
      maxCP: 1077,
      tier: 0,
      egg: 10
    },
    {
      id: 134,
      name: "Vaporeon",
      types: ["water"],
      maxCP: 2816,
      tier: 0,
      egg: 0
    },
    {
      id: 135,
      name: "Jolteon",
      types: ["electric"],
      maxCP: 2140,
      tier: 0,
      egg: 0
    },
    {
      id: 136,
      name: "Flareon",
      types: ["fire"],
      maxCP: 2643,
      tier: 0,
      egg: 0
    },
    {
      id: 137,
      name: "Porygon",
      types: ["normal"],
      maxCP: 1691,
      tier: 0,
      egg: 5
    },
    {
      id: 138,
      name: "Omanyte",
      types: ["rock", "water"],
      maxCP: 1119,
      tier: 0,
      egg: 10
    },
    {
      id: 139,
      name: "Omastar",
      types: ["rock", "water"],
      maxCP: 2233,
      tier: 0,
      egg: 0
    },
    {
      id: 140,
      name: "Kabuto",
      types: ["rock", "water"],
      maxCP: 1104,
      tier: 0,
      egg: 10
    },
    {
      id: 141,
      name: "Kabutops",
      types: ["rock", "water"],
      maxCP: 2130,
      tier: 0,
      egg: 0
    },
    {
      id: 142,
      name: "Aerodactyl",
      types: ["rock", "flying"],
      maxCP: 2165,
      tier: 0,
      egg: 10
    },
    {
      id: 143,
      name: "Snorlax",
      types: ["normal"],
      maxCP: 3112,
      tier: 0,
      egg: 10
    },
    // {
    //   id: 144,
    //   name: "Articuno",
    //   types: ["rock", "water"],
    //   maxCP: 1119,
    //   tier: 0,
    //   egg: 0
    // }
    {
      id: 147,
      name: "Dratini",
      types: ["dragon"],
      maxCP: 983,
      tier: 0,
      egg: 10
    },
    {
      id: 148,
      name: "Dragonair",
      types: ["dragon"],
      maxCP: 1747,
      tier: 0,
      egg: 0
    },
    {
      id: 149,
      name: "Dragonite",
      types: ["dragon", "flying"],
      maxCP: 3500,
      tier: 0,
      egg: 0
    },

  ];

  return {
    getAll: getAll
  };


};

