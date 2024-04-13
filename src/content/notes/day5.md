---
title: Day 5 - TODO
date: 2024-04-09
prevNote: ../day4/
nextNote: ../day6/
---

# Day 5

## Quiz

### Q1

The following RE is a good candidate for non-negative integers: "[0-9]\*"

- True
- **False**: will match "" which is not a non-negative integer

### Q2

All regular expressions can be expresssed in terms of concatenation or choice operators

- True
- **False**: Regular expressions can also have the Kleene star operator (repetition)

### Q3

Which of the following strings do NOT match ac*|b*?

- [ ] ""
- [ ] "ab"
- [x] "acac"
- [ ] "acccc"
- [x] "bbb"

## Scanners

### Naive Scanner

Simple string stream, peek/eat model

#### Shortcomings

IDs with numbers, numbers with a decimal point, and two-character operators are hard to tokenize using a naive scanner.

### EM Scanner

Exact Match Scanner - works from right to left using the exact_match function and one Regular Expression per symbol to match tokens. Will always match the longest token by design, but is also incredibly slow.

### SOS Scanner

Start of String Scanner - works from left to right and uses the (partial) match function to match tokens with one RE per token.

---

Note that it is important to first attempt to match the longest token first. For instance trying to match "CSE110A" with `CSE|110A|CSE110A` will match `CSE` first and not `CSE110A`.

### NG Scanner

Named Group Scanner - uses named groups in the RE to match tokens (aka parentheses) and the or operator to match all of the tokens, ensuring that the longest tokens are matched first.

---

Note that you can use the syntax `(?P<ID>[a-z]+)` to name a group in a regular expression.

Also note that if two tokens have the same prefix, the longest token should be matched first.

After matching a token, you can use the `groupdict()` method to get the named groups. Then you can chop off the matched token from the input string and continue matching.
