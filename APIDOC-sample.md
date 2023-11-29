# Pokemon API Documentation
The Pokemon API provides information about the various pokemon

## Get a list of all Pony's in this service.
**Request Format:** /api/pokemon

**Request Type:** GET

**Returned Data Format**: Application/JSON

**Description:** Return a list of all of the Pokemon that you can look up in this API.

**Example Request:** /api/pokemon

**Example Response:**
```
[
  {

  }
  ...
]
...
```

**Error Handling:**
- N/A

## Lookup a Pony's Information
**Request Format:** /api/:id

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Given a pokemon id, it returns a JSON of the basic pokemon information. returning the name, id, imageUrl and decription

**Example Request:** /api/2

**Example Response:**
```json
{
    "name": "Rainbow Dash",
    "kind": "Pegasus",
    "residence": "Cloudominium over Ponyville",
    "quotes": [
        "It needs to be about twenty-percent cooler.",
        "You can't be tied for the most daring pony!"
    ]
}
```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If passed in an invalid pony name, returns an error with the message: `Given name {name} is not a valid citizen of Equestria!`

## Talk to a Pony
**Request Format:** /conversation endpoint with POST parameters of `name` and `message`

**Request Type**: POST

**Returned Data Format**: Plain Text

**Description:** Given a valid pony `name` and a `message` to send, the pony will reply with a plain text message response.

**Example Request:** /conversation with POST parameters of `name=RainbowDash` and `message=hello`

**Example Response:**
```
LOOOUUUUUDDEEEEEEEERRRR!!!
```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If missing the pony name, an error is returned with the message: `Please pass in a pony name to talk to!`
  - If passed in an invalid pony name, an error is returned with: `Given name {name} is not a valid citizen of Equestria!`
  - If missing the message or if the message is empty, an error is returned with: `{name} is confused by your silence. Perhaps try providing a message?`
