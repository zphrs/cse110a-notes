---
title: Day 6 - Adv. Scanners
date: 2024-04-08
prevNote: ../day3/
---

# Day 6 - Advanced Scanners

## Announcements

### HW 1

Due 2024-04-18 (6 days from now!)

### No Class Monday

Class resumes on Wednesday.

## Quiz

### Q1

When implementing a Scanner using an exact RE matcher, the number of calls to the RE matcher depends on what?

- both the number of tokens and the length of the input string: Number of tokens \* length of input string

### Q2

For which scanners can token definitions be reasoned about independently (e.g. when reasoning about if they can match strings with the same prefix)

- [x] exact match scanner
- [x] start of string scanner
- [ ] named group scanner
- [ ] naive scanner

### Q3

Given C-style ids and numbers, can the following string be tokenized? If so? how many tokens will there be?

"123abc123"

- Token error
- 1 lexeme
- **2 lexeme** // 123, abc123
- 3 lexeme

Tip: Ignore spaces when reasoning about tokenization.

### Q4

Given a regular expression library, what sort of API calls would you look for in order to implement a scanner?

fullmatch_expression(expr, str): match_str | error

match_expression(expr, str): match_str | error

## IRL Scanners

- Most scanner generators have SOS semantics
  - Independent reasoning about tokens
  - uses fast match implementaitons under the hood
- Mainstream compilers:
  - have hand coded and hand optimized scanners
  - _very_ fast
  - _very_ hard to modify
  - Only worth it to do this if you have the need and time

## Token Actions

### First class functions

A programming language is said to have first class functions if functions can be stored as variables. In C++ this is implemented using function pointers and nowadays lambdas.

### Token Actions

In our scanners, we give them as the third element in the token tuple definition.

A token action takes a lexeme and returns a lexeme (possibly the same lexeme)

They generally do three things:

#### Modify a value

Changing code to use lower precision such as converting a `float` to a `float16`.

#### Refine a token

Such as keywords vs IDs. You can simply refine the keywords out of the IDs.

#### Modify the scanner state

This is useful for error reporting and recovering from an error.
