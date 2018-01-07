// You want to build a word cloud, an infographic where the size of a
// word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string
// and builds its word cloud data in a dictionary ↴ , where the keys
// are words and the values are the number of times the words occurred.

// Think about capitalized words. For example, look at these sentences:

const data =  'After beating the eggs, Dana read the next step: ' +
'Add milk and eggs, then add flour and sugar.'


const mapper = data => {
  let resultsMap = new Map();

  // Loop through the string
    // make all letters lowercase
    // break on spaces to form words
      // if you've seen it before, iterate the value in the map
      // if not, add it to the map with value 1

  let currentWord = '';

  for (let i = 0; i < data.length; i++) {
    // Lowercase the letter
    let letter = data[i].toLowerCase();
    // Check if it's a space
    if (letter === ' ') {
      // DO THE MAP STUFF
      // Check if we have it in the map already
      let currentValue = resultsMap.get(currentWord);

      if (currentValue !== undefined) {
        // iterate the value
        resultsMap.set(currentWord, ++currentValue);
      } else {
        // Set the new word value to 1
        resultsMap.set(currentWord, 1);
      }
      // reset the current word
      currentWord = '';
    } else {
      // Add to the current word
      currentWord = currentWord + letter;
    }
  }

  return resultsMap;
}

console.log(mapper(data));

let henry = new Map();
henry.set('me', 1);
// console.log(henry.get('u') === undefined);