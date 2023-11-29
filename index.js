/**
 * Name : Riberiko Niyomwungere
 * Date : November 29, 2023
 *
 * This is the server
 */
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
  res.json({'data' : toReturn})
});

app.get('/api/:id', (req, res)=>{
  //res.json(pokemonData.getPokemonById(req.params(':id')))
  const id = req.params.id
  if(!id) return res.status(400).send('Please Provide the id of the pokemon')
  const toReturn = pokemonData.getPokemonById(id)
  return (toReturn) ? res.send(toReturn.description) : res.status(400).send(`no pokemon found with the id of ${id}`)
})

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
