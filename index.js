const checkValid = (phrase) => {
  if (typeof phrase !== "string")
    throw new Error("Please provide a string to chkchar.");
};

const caps_values = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers_values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols_values = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "/",
  "?",
  "'",
  '"',
  ":",
  ";",
  ">",
  "<",
  ".",
  ",",
  "|",
  "£",
];

module.exports.caps = (phrase) => {
  checkValid(phrase);
  let cap_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let cap of caps_values) {
      if (char === cap) {
        cap_count++;
        if (!found.includes(cap)) found.push(cap);
      }
    }
  }
  if (cap_count === 0) {
    return {
      status: false,
      count: 0,
      found,
    };
  } else {
    return {
      status: true,
      count: cap_count,
      found,
    };
  }
};
module.exports.numbers = (phrase) => {
  checkValid(phrase);
  let number_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let number of numbers_values) {
      if (char === number) {
        number_count++;
        if (!found.includes(number)) {
          found.push(number);
        }
      }
    }
  }
  if (number_count === 0) {
    return {
      status: false,
      count: 0,
      found: [],
    };
  } else {
    return {
      status: true,
      count: number_count,
      found,
    };
  }
};
module.exports.symbols = (phrase) => {
  checkValid(phrase);
  let sign_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let sign of symbols_values) {
      if (char === sign) {
        sign_count++;
        if (!found.includes(sign)) found.push(sign);
      }
    }
  }
  if (sign_count === 0) {
    return {
      status: false,
      count: 0,
      found: [],
    };
  } else {
    return {
      status: true,
      count: sign_count,
      found,
    };
  }
};

module.exports.isEnglish = (phrase) => {
  checkValid(phrase);
  const converted = phrase.toUpperCase();
  for (let char of converted) {
    for (let cap of caps_values) {
      if (char !== cap) return false;
    }
  }
  return true;
};

module.exports.allNums = (phrase) => {
  checkValid(phrase);
  const { count } = this.numbers(phrase);
  if (count === phrase.length) return true;
  else return false;
};

module.exports.allSymbols = (phrase) => {
  checkValid(phrase);
  const { count } = this.symbols(phrase);
  if (count === phrase.length) return true;
  else return false;
};

module.exports.allCaps = (phrase) => {
  checkValid(phrase);
  const { count } = this.caps(phrase);
  if (count === phrase.length) return true;
  else return false;
};

module.exports.fullCount = (phrase) => {
  checkValid(phrase);
  const { count: cap_count } = this.caps(phrase);
  const { count: num_count } = this.numbers(phrase);
  const { count: sign_count } = this.symbols(phrase);

  return {
    caps: cap_count,
    numbers: num_count,
    symbols: sign_count,
  };
};

module.exports.sliceToChunks = (phrase, number) => {
  checkValid(phrase);
  if (typeof number !== "number")
    throw new Error('Provide a integer as the "number" parameter.');
  let start = 0;
  let end = 0;
  let endArray = [];
  for (let i = 0; i <= phrase.length; i += number) {
    if (i !== 0) {
      end = i;
      endArray.push(phrase.slice(start, end));
      start = i;
    }
  }
  return endArray;
};
