## chkchar

This is a utility package. You can use this to check the availibility of capitals, symbols or numbers in a string.

#### Methods

1. caps(phrase)
2. numbers(phrase)
3. symbols(phrase)
4. fullCount(phrase)
5. isEnglish(phrase)
6. allNums(phrase)
7. allSymbols(phrase)
8. allCaps(phrase)

#### Installation

> npm i chkchars

#### 1.caps(phrase)

Checks if there are capital english letters in a given string.
phrase: string

##### Output format

> {

    status: true / false    --- true === contains   false === does not contain
    count: number           --- number of caps in the given phrase
    fount: array            --- all the caps found in the given phrase (no duplicates)

}

#### 2.numbers(phrase)

Checks if there are numbers in a given string.
phrase: string

##### Output format

> {

    status: true / false    --- true === contains   false === does not contain
    count: number           --- number of numbers in the given phrase
    fount: array            --- all the numbers found in the given phrase (no duplicates)

}

#### 3.symbols(phrase)

Checks if there are symbols in a given string.
phrase: string

##### Output format

> {

    status: true / false    --- true === contains   false === does not contain
    count: number           --- number of symbols in the given phrase
    fount: array            --- all the symbols found in the given phrase (no duplicates)

}

#### 4.fullCount(phrase)

Returns the number of occurences of all caps, numbers and symbols

##### Output format

> {

    caps:       --- number of english capital letters found.
    numbers:    --- number of numbers found.
    symbols:    --- number of symbols found.

}

#### 5.isEnglish(phrase)

Checks if the given string is composed only with english letters.

If all the characters are english letters

> true

If at least one of them not a english letter

> false

#### 6.allNums(phrase)

Checks if the given string is composed only with numbers.

If all the characters are numbers

> true

If at least one of them not a number

> false

#### 7.allSymbols(phrase)

Checks if the given string is composed only with symbols.

If all the characters are symbols

> true

If at least one of them not a symbol

> false

#### 8.allCaps(phrase)

Checks if the given string is composed only with english capital letters.

If all the characters are english capital letters

> true

If at least one of them not a english capital letter

> false
