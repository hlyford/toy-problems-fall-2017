// url: https://www.interviewcake.com/question/python/recursive-string-permutations?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email

// Write a recursive function for generating all permutations of an input string. Return them as a set. (object?)
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.

const sampleString = "hiu";
// output: {"hiu", "hui", "ihu", "iuh", "uhi", "uih"}

// base case?? ideas:
// when the last letter is the first letter and first letter is last letter?
//

function naive(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let submission = string[i];

    for (let p = 0; p < string.length; p++) {
      if (submission.indexOf(string[p]) === -1) {
        submission = submission + string[p];
      }

      for (let q = 0; q < string.length; q++) {
        if (submission.length === 3) {
          result.push(submission);
          submission = '';
        } else {
          if (submission.indexOf(string[q]) === -1)
          submission = submission + string[q];
        }
      }
    }
  }
  return result;
}

function better(string) {

  let result = [];

  function inner(currently) {
    // if it's reached the length; push it to result
    if (currently.length === string.length) {
      result.push(currently);
    } else {
    // if not, loop through again, adding to the string
      for (let i = 0; i < string.length; i++) {
        let newLetter = string[i];
        // check to make sure that characters not already in it
        if (currently.indexOf(newLetter) === -1) {
          inner(currently + newLetter);
        }
      }
    }
  }

  // start it off
  if (string.length > 0) {
    for (let i = 0; i < string.length; i++) {
      let submission = string[i];
      inner(submission);
    }
    return result;
  }

}

// console.log(naive(sampleString));
console.log(better(sampleString));