// I like parentheticals (a lot).

// "Sometimes (when I nest them (my parentheticals)
// too much (like this (and this))) they get confusing."


// Write a function that, given a sentence like the one above,
// along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis),
// the output should be 79 (position of the last parenthesis).

// input: string and number
// output: number

const sampleText = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
const samplePosition = 10;

// questions:
// - can there be an opening parenthesis without a closing one?

// loop through the string
// keep track of opening and closing parentheses encountered
// keep track of the position in the string
// keep track of the last closing parenthesis you saw

// better way but still easy: with a stack

function naive(sampleText, samplePosition) {
  let stack = 0;

  for (let i = samplePosition; i < sampleText.length; i++) {

    if (sampleText[i] === ')') {
      stack--;
    } else if (sampleText[i] === '(') {
      stack++;
    }

    if (stack === 0) {
      return i;
    }

  }
}

console.log(naive(sampleText, samplePosition));