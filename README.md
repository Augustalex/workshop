# About this project

This project is written with JavaScript (you can probably tell).

It's managed with NPM.

It uses Jest to run tests, and the jest-babel plugin to enable modern Import syntax for JavaScript modules.

# Getting started

1. Have Node installed (either with an [installer](https://nodejs.org/en/download/), or via a [package manager](https://nodejs.org/en/download/package-manager))
2. Run `npm install` in the root of this project to install all dependencies.
3. Use `npm test` to run all tests.

## Files

In the file `toRomanNumerals.spec.js` you will find the test cases. There is only one simple test added there right now. It fails!

In the file `toRomanNumerals.js` is where you have the implementation. Try to make the current test pass, the simplest & silliest way you can. Perhaps by returning "I"?

## Working towards a solution

Then write another test that fails, make that pass the simplest way possible. And so on.

When all tests passes and you see and opportunity to refactor, you should do that!

There is many solutions and algorithms online. But try to come up with your own, step by step. Focus on practicing collaboration and using the tools and techinques, and less on this trivial exercise.

# Exercise

Your goal is to write a function that takes a number and converts it to the corresponding Roman Numerals.

Examples
1 ➔ I
2 ➔ II
3 ➔ III
4 ➔ IV
5 ➔ V
9 ➔ IX
21 ➔ XXI
50 ➔ L
100 ➔ C
500 ➔ D
1000 ➔ M

Hint
This kata lures a lot of people to implement features in the order of the numbers. But do not forget that it’s sometimes easier to start with a general case and add exceptions later. ([source](https://kata-log.rocks/roman-numerals-kata))

Another explanation along with example solutions in Java can be found [here](https://github.com/TDD-Katas/roman-numerals#tdd-approaches)
