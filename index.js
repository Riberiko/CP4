// index.js
const express = require('express');
const app = express();
const port = 3001; // Choose any available port
const pokemonData = require('./pokimonData')
  

app.use(express.static('public'));

app.get('/api/pokemon', (req, res) => {
  const allPoki = pokemonData.getAllPokemon()
  const toReturn = []
  allPoki.forEach(poki => {
    Object.fromEntries( Object.entries(poki).filter(([key]) => key !== 'description'))
    toReturn.push(poki)
})
  console.log(toReturn)
  res.json(toReturn)
});

app.get('/api/:id', (req, res)=>{
    //res.json(pokemonData.getPokemonById(req.params(':id')))
    const id = req.params.id
    if(!id) return res.status(404).json({message: `id was not prodived`})
    const toReturn = pokemonData.getPokemonById(id)
    console.log(toReturn)
  return (toReturn) ? res.send(toReturn.description) : res.status(400).json({message: `no pokemon found with the id of ${id}`})
})

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
