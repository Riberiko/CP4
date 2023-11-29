/**
 * Name : Riberiko Niyomwungere
 * Date : November 29, 2023
 *
 * This is the pokemon data for the server to give to the clinet
 */

const pokemonData = [
    { id: 1, name: 'Flameon', type: 'Fire', imageUrl: 'https://via.placeholder.com/150', description: 'A fiery Pokémon with a blazing mane that can melt anything in its path.' },
    { id: 2, name: 'Aquaflare', type: 'Water', imageUrl: 'https://via.placeholder.com/150', description: 'A water-themed Pokémon that creates powerful water jets to navigate and attack.' },
    { id: 3, name: 'Leafquake', type: 'Grass/Ground', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon with control over the earth and plants, causing tremors and manipulating nature.' },
    { id: 4, name: 'Zephyrblade', type: 'Flying/Steel', imageUrl: 'https://via.placeholder.com/150', description: 'A swift and steel-winged Pokémon that soars through the skies with precision and grace.' },
    { id: 5, name: 'Electroflare', type: 'Electric', imageUrl: 'https://via.placeholder.com/150', description: 'An electrically charged Pokémon capable of generating powerful lightning bolts.' },
    { id: 6, name: 'Rockblast', type: 'Rock', imageUrl: 'https://via.placeholder.com/150', description: 'A sturdy Pokémon with a rocky exterior, using boulders as both defense and offense.' },
    { id: 7, name: 'Frostbite', type: 'Ice', imageUrl: 'https://via.placeholder.com/150', description: 'An ice-cold Pokémon with the ability to freeze its surroundings and foes.' },
    { id: 8, name: 'Phantomshadow', type: 'Ghost', imageUrl: 'https://via.placeholder.com/150', description: 'A mysterious Pokémon that moves through the shadows, unseen and haunting.' },
    { id: 9, name: 'Psyburst', type: 'Psychic', imageUrl: 'https://via.placeholder.com/150', description: 'A psychic Pokémon with powerful mind-bending abilities and telekinetic prowess.' },
    { id: 10, name: 'Mysticbolt', type: 'Electric/Psychic', imageUrl: 'https://via.placeholder.com/150', description: 'A mystical Pokémon with the combined powers of electricity and psychic energy.' },
    { id: 11, name: 'Venomstrike', type: 'Poison', imageUrl: 'https://via.placeholder.com/150', description: 'A venomous Pokémon that uses toxic stingers and poisons to incapacitate its foes.' },
    { id: 12, name: 'Duskhowl', type: 'Dark', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon associated with the darkness, striking fear into the hearts of its adversaries.' },
    { id: 13, name: 'Solarflare', type: 'Fire/Flying', imageUrl: 'https://via.placeholder.com/150', description: 'A solar-powered Pokémon that harnesses the energy of the sun for intense flames and flight.' },
    { id: 14, name: 'Blizzardwing', type: 'Ice/Flying', imageUrl: 'https://via.placeholder.com/150', description: 'An icy Pokémon with wings that generate freezing winds and blizzards.' },
    { id: 15, name: 'Terraflare', type: 'Ground/Fire', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon with control over both the earth and fire, causing volcanic eruptions.' },
    { id: 16, name: 'Aeroblast', type: 'Flying', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon with the ability to unleash devastating gusts of wind and air-based attacks.' },
    { id: 17, name: 'Cascade', type: 'Water/Fairy', imageUrl: 'https://via.placeholder.com/150', description: 'A graceful Pokémon that manipulates water with a touch of enchanting fairy magic.' },
    { id: 18, name: 'Lunarbeam', type: 'Fairy/Psychic', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon associated with the moon, using psychic and fairy powers to illuminate the night.' },
    { id: 19, name: 'Thunderclaw', type: 'Electric/Fighting', imageUrl: 'https://via.placeholder.com/150', description: 'A fierce Pokémon with lightning-fast reflexes and the power to channel electricity into punches.' },
    { id: 20, name: 'Leafwhisper', type: 'Grass', imageUrl: 'https://via.placeholder.com/150', description: 'A tranquil Pokémon that communicates with nature, using the power of leaves and flora.' },
    { id: 21, name: 'Magmaquake', type: 'Fire/Ground', imageUrl: 'https://via.placeholder.com/150', description: 'A volcanic Pokémon with the ability to cause earthquakes and manipulate molten lava.' },
    { id: 22, name: 'Abyssalstrike', type: 'Water/Dark', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon from the depths of the ocean, striking fear with its dark aquatic powers.' },
    { id: 23, name: 'Radiantwing', type: 'Flying/Fairy', imageUrl: 'https://via.placeholder.com/150', description: 'A radiant Pokémon with wings that emit a dazzling light, symbolizing hope and purity.' },
    { id: 24, name: 'Thunderstorm', type: 'Electric/Flying', imageUrl: 'https://via.placeholder.com/150', description: 'A stormy Pokémon that controls thunder and lightning, unleashing powerful electric storms.' },
    { id: 25, name: 'Leafblaze', type: 'Grass/Fire', imageUrl: 'https://via.placeholder.com/150', description: 'A Pokémon with the dual powers of nature and fire, creating blazing leaf storms.' },
    { id: 26, name: 'Quicksand', type: 'Ground', imageUrl: 'https://via.placeholder.com/150', description: 'A sandy Pokémon with the ability to create quicksand traps and control the earth beneath.' },
    { id: 27, name: 'Frostbite', type: 'Ice', imageUrl: 'https://via.placeholder.com/150', description: 'An ice-cold Pokémon with the ability to freeze its surroundings and foes.' },
    { id: 28, name: 'Shadowstrike', type: 'Dark', imageUrl: 'https://via.placeholder.com/150', description: 'A shadowy Pokémon with swift and precise dark attacks, striking fear into opponents.' },
    { id: 29, name: 'Mysticsurge', type: 'Psychic/Electric', imageUrl: 'https://via.placeholder.com/150', description: 'A mystical Pokémon that combines the powers of psychic energy and electricity for dazzling attacks.' }
]
    
function getPokemonById(id) {
return pokemonData.find(pokemon => pokemon.id == id);
}

function getAllPokemon() {
return pokemonData;
}

module.exports = {
getPokemonById,
getAllPokemon
};