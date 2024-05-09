---
title: Day 4 - Regex
date: 2024-04-08
prevNote: ../day03/
nextNote: ../day05/
---

# Day 4 - Regex

## Quiz on Scanners

## Q1: Token Function

The scanner member function `token` returns a list of the tokens that it can recognize in a string

- True
- **False**: It returns the next lexeme

## Q2: Validation

A scanner should make sure that the sequence of lexemes is valid, e.g. the scanner should make sure two numbers are separated by a valid operator.

- True
- **False**: The scanner should only return the next lexeme, not check for validity

## Q3: Count Lexemes

Count lexemes in the following string & list them: `for (int i = 0; i <=5; i++)`

Possible Answer:

- 14

```py
[(KEYWORD/LOOP/ID, "for"),(PAREN, "("),(ID, "int"),(ID, "i"),(ASSIGN, "="),(NUM, "0"),(SEMI, ";"),(ID, "i"),(OP/LE, "<="), (NUM, "5"),(SEMI, ";"),(ID, "i"),(ASGNOP/INCR, "++"),(PAREN, ")")]
```

## Shortcomings of Naive Scanner

It's hard to maintain as it is a "labrinth of if statements."

### How do we solve this?

REGEX! Regex can be used to define token regular expressions.

## Regex

### Pros

- Extensible Design
- Modular

### Cons

- token definitions are restricted to regular languages
- potentially slower
- Regular expression matchers are complicated

### Language Families

#### Recursively Enumerable

Recursively enumerable languages are the most powerful language family. They are the set of all languages that can be recognized by a Turing machine. However, they are not decidable.

#### Context-Sensitive

Context-sensitive languages are the set of all languages that can be recognized by a linear-bounded automaton.

#### Context-Free

Context-free languages are the set of all languages that can be recognized by a pushdown automaton.

#### Regular

Regular languages are the set of all languages that can be recognized by REGEX.

---

We will define regular expressions recursively.

A syring matches an RE if it belongs to the regular language defined by the RE.

### Example

```py
import re

re.fullmatch(pattern, string)
```

### Special Characters

- `.`: Any non-breaking character
- `|`: Will match either the left or right side
- `+`: One or more of the preceding character.
- `*`: Zero or more of the preceding character
- `?`: Zero or one of the preceding character. `r?` is equivalent to `|r`
- `(...)` : Grouping - for example `(ab)+` will match `ababab` while `ab+` will match `abbbb`
- `[0-9]`: Equivalent to `0|1|2|3|4|5|6|7|8|9`
- [a-c]: Equivalent to `a|b|c`
- [A-C]: Equivalent to `A|B|C`
