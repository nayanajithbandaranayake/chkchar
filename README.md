## chkchar

This is a utility package. You can use this to check the availibility of capitals, symbols or numbers in a string.

#### Methods

1. caps(phrase)
2. numbers(phrase)
3. symbols(phrase)
4. isEnglish(phrase)

#### Output formats

All three methods caps(), numbers(), symbols() bear a equal output format

> {

    status: true / false    --- true === contains   false === does not contain
    count: number           --- number of numbers, symbols or caps in the given phrase
    fount: array            --- all the numbers, symbols or caps found in the given phrase (no duplicates)

}

isEnglish method return a boolean value

If all the characters are english

> true

If at least one of them are not english

> false
