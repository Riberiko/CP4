# Pokemon API Documentation
The Pokemon API provides information about the various pokemon

## Get a list of all pokemon's in this service.
**Request Format:** /api/pokemon

**Request Type:** GET

**Returned Data Format**: Application/JSON

**Description:** Return a list of all of the Pokemon that you can look up in this API.

**Example Request:** /api/pokemon

**Example Response:**
``` json
{data : [
  {
    id: 1,
    name: 'Flameon',
    type: 'Fire',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Aquaflare',
    type: 'Water',
    imageUrl: 'https://via.placeholder.com/150',
  },
  ...
]}
```

**Error Handling:**
- N/A

## Lookup a Pony's Information
**Request Format:** /api/:id

**Request Type:** GET

**Returned Data Format**: TEXT

**Description:** Given a pokemon id, it returns a test of the basic pokemon description

**Example Request:** /api/2

**Example Response:**
```text
A water-themed Pokémon that creates powerful water jets to navigate and attack.
```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If passed in an invalid pony id, returns an error with the message: `no pokemon found with the id of ${id}`
  - If id is not passed in: `Please Provide the id of the pokemon`