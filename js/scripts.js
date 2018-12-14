// This code contains two potential bugs: if the letter following "qu" in an initail consonant string is not a vowel, the code will fail; if "y" is the first letter of a word and the letter following "y" is a consonant, the code will fail. The code will correctly return words if the first letter is capitazlied, but cannot handle embedded punctuation or capitalization. Extra whitespace and punctuation outside of a word are not accounted for.

function translateSentence(sentence) {
  var lowercaseWords = sentence.toLowerCase().split(" ")
  var regularWords = sentence.split(" ")
  var pigLatinWords = []
  lowercaseWords.forEach(function(word) {
    pigLatinWords.push(translateWord(word))
  });
  var capitalizedWords = capitalize(regularWords, pigLatinWords)
  return punctuateSentence(capitalizedWords)
}

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

function capitalize(regularWords, pigLatinWords) {
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var counter = 0
  var capitalizedWords = []
  regularWords.forEach(function(word) {
    if (uppercaseLetters.includes(word[0])) {
      capitalizedWords.push(pigLatinWords[counter][0].toUpperCase() + pigLatinWords[counter].slice(1))
    } else {
      capitalizedWords.push(pigLatinWords[counter])
    }
    counter += 1
  });
  return capitalizedWords
}

function punctuateSentence(sentence) {
  joinedWords = []
  sentence.forEach(function(word) {
    joinedWords.push(punctuateWord(word))
  });
  return joinedWords.join(" ")
}

function punctuateWord(word) {
  var punctuation = ['.', ',', '?', '!', ':', ';']
  var endPunc = []
  var strippedWord = []
  chars = word.split("")
  chars.forEach(function(char) {
    if (punctuation.includes(char)) {
      endPunc.push(char)
    } else {
      strippedWord.push(char)
    }
  });
  return strippedWord.join("") + endPunc.join("")
}

function findVowels(word) {
  var counter = 0
  var vowels = []
  var splitWord = word.split("")
  splitWord.forEach(function(letter) {
    console.log(vowels);
    // Why does this evaluate to true for consonants?
    if (letter === "a" || "e" || "i" || "o" || "u") {
      vowels.push(letter)
    } else {
      vowels.push("-")
    }
  });
  return vowels.join(" ")
}
