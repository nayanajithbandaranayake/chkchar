const caps = [
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

module.exports.caps = (phrase) => {
  if (typeof phrase !== "string")
    throw new Error("Please provide a string to chkchar.");

  let cap_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let cap of caps) {
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
  if (typeof phrase !== "string")
    throw new Error("Please provide a string to chkchar.");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let number_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let number of numbers) {
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
  if (typeof phrase !== "string")
    throw new Error("Please provide a string to chkchar.");
  const symbols = [
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
  let sign_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let sign of symbols) {
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
  if (typeof phrase !== "string")
    throw new Error("Please provide a string to chkchar.");
  const converted = phrase.toUpperCase();
  for (let char of converted) {
    for (let cap of caps) {
      if (char !== cap) return false;
    }
  }
  return true;
};
