// Reverse words in a sentence without reversing the actual words

// example input: "Coding is so much fun"
// output: "Fun much so is coding"

const sample = "Coding is so much fun";

// plan
// loop through the string
// break it up into words
  // see a space, that's a word
// push the words into an array as you go
// once yuo've hit the end of the input string, starting "popping" off the array

// things to remember:
// capitalize the first item popped off.
// lower case the last item popped off

function reverser(sentence) {
  let newString = '';

  let currentWord = '';

  for (let i = 0; i < sentence.length; i++) {
    // check if it's a space
    if (sentence[i] === ' ' || sentence[i + 1] === undefined) {
      let spacer = '';
      if (sentence[i + 1] === undefined) {
        spacer = ' ';
      }
      currentWord += sentence[i] + spacer;
      newString = `${currentWord}${newString}`;
      currentWord = '';
    } else {
      // keep building the current word
      currentWord += sentence[i];
    }
  }
  // fix the capitalization
  newString = newString.toLowerCase();

  return newString;

}

console.log(reverser(sample));