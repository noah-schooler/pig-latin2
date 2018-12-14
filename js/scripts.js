function translateSentence(sentence) {
  var words = sentence.toLowerCase().split(" ")
  var pigLatinWords = []
  words.forEach(function(word) {
    pigLatinWords.push(translateWord(word))
  });
  return pigLatinWords.join(" ")
}

// This code contains two potential bugs: if the letter following "qu" in an initail consonant string is not a vowel, the code will fail; if "y" is the first letter of a word and the letter following "y" is a consonant, the code will fail.

var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function translateWord(word) {
  var firstLetter = word.slice(0, 1)
  var counter = 0
  var consonants = []
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return word.concat("way")
  } else if (firstLetter === "y") {
    return word.slice(1) + "yay"
  } else {
    for (var i = 0; i < word.length - 1; i ++) {
      if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") {
        counter += 1
      }
      if (counter === 0) {
        if (word[i] === "q") {
          consonants.push(word[i])
          consonants.push(word[i + 1])
        }
        else {
          consonants.push(word[i])
        }
      }
    }
  }
  newWord = word.slice(consonants.length)
  return newWord.concat(consonants.join("") + "ay")
}

function findVowels(word) {
  var counter = 0
  var vowels = []
  var splitWord = word.split("")
  splitWord.forEach(function(letter) {
    if (letter === "a" || "e" || "i" || "o" || "u") {
      vowels.push(letter)
    } else {
      vowels.push("-")
    }
  });
  return vowels
}
