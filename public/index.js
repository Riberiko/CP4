/**
 * Name : Riberiko Niyomwungere
 * Date : November 29, 2023
 *
 * This is the main script for the pokemon app
 */
'use strict';
(()=>{
  let allPokemon, pokemonListContainer, modal, btn, span

  window.onload = init

  function init()
  {
    pokemonListContainer = document.getElementById('pokemon-list');
    modal = document.getElementById("myModal");
    btn = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];
    setupSearchBar()

    window.onclick = function(event) { //closing
      const errorM = document.getElementById('errorM')
      if (event.target == modal) {
        modal.style.display = "none";
      }
      if (event.target == errorM)
      {
        errorM.style.display = 'none'
      }
    }

    span.onclick = function() { //closing
      modal.style.display = "none";
    }

    document.getElementById('update').onclick = () => {
      // Fetch Pokémon data from the backend API
      fetch('/api/pokemon')
      .then(res => statusCheck(res))
      .then((response) => response.json())
      .then((responseData) => {
        pokemonListContainer.innerHTML = ''
        responseData.data.forEach((pokemon) => {
          createCard(pokemon)
          allPokemon = responseData.data
        });
      })
      .catch(e => { // handling error
        document.getElementById('errorM').onclick = (e) => {
          e.target.display = 'block'
        }
      })
    }
  }

  function setupSearchBar()
  {
    const search = document.querySelector('input[type="search"]')
    search.addEventListener('keyup', ()=>{
      const newList = []
      const lookFor = search.value.toUpperCase()
      for(let poki of allPokemon)
        if(poki.name.toUpperCase().includes(lookFor) || poki.type.toUpperCase().includes(lookFor)) newList.push(poki)
      
      while (pokemonListContainer.lastChild) pokemonListContainer.removeChild(pokemonListContainer.lastChild)
      
      newList.forEach(pokemon => createCard(pokemon))
    })
  }

  function createCard(pokemon)
  {
    const pokemonCard = document.createElement('div');
    pokemonCard.className = 'pokemon-card';
    pokemonCard.innerHTML = `
      <img src=${pokemon.imageUrl}/>
      <h2>${pokemon.name}</h2>
      <p>Type: ${pokemon.type}</p>
    `;
    pokemonCard.onclick = ()=> {
      fetch(`/api/${pokemon.id+30}`)
      .then(res => statusCheck(res))
      .then(res => res.text())
      .then(textData => {
        const pokiClicked = allPokemon.find(poki => poki.id == pokemon.id)
        modal.querySelector('#description').innerText = textData
        modal.querySelector('img').src = pokiClicked.imageUrl
        modal.querySelector('#pokemon-h2').innerText = pokiClicked.name
        modal.querySelector('#pokemon-id').innerText = pokemon.id
        modal.style.display = "block";
      })
      .catch(err => { //handle error
        const errorM = document.getElementById('errorM')
        errorM.querySelector('p').innerText = err

        errorM.querySelector('.close').onclick = () => {
          errorM.style.display = "none";
        }

        errorM.style.display = "block";
        })
    }
    pokemonListContainer.appendChild(pokemonCard);
  }

  function statusCheck(response)
  {
    console.log(response)
    if(!response.ok) throw new Error(`${response.status}, Please make sure that you are connected to internet and/or refresh`)
    else return response
  }
})()
