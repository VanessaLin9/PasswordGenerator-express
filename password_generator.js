//generate random number
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}


function passwordGenerator(options) {

  //define things user might want

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetter = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'


  //create a collection to store thing user picked up

  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetter.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }


  //remove thing user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  if (collection.length === 0) {
    return "There is no valid character in your selection."
  }

  //start generating password
  let password = ''

  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }

  //return the generated password
  return password
}

module.exports = passwordGenerator