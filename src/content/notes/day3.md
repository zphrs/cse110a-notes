---
title: Day 3 - Lexical Analysis
date: 2024-04-05
prevNote: ../day2/
nextNote: ../day4/
---

# Lexical Analysis

## Homework 1

Released on Monday!

## Quiz

### Compiler Warnings

If the compiler gives you a warning, then your code definitely has an error.

- True
- **False**

### Uninitialized Variables

An uninitialized variable can give you any value, however, the value that it gives you will be the smae each time you run the program.

- True
- **False**

### Compilers Modifying Code

Compilers are allowed to modify a function in any way just so long as it returns the smae values as it returns the same value as the original function.

- **True**
- **False**

True usually, unless the compiler is trying to keep side effects. Both true and false is correct.

### Modular Compiler Deisgn

What are some of the benefits of this design?

You can remove duplicate code between different end targets by putting it in the frontend and have the backend go from an intermediate representation to the target language which should be a quick and simple process.

## Parsing

Parsing is the front end which creates a tree of the program.

Optimizations are run on the tree and then the backend takes the tree and turns it into the target language.

### Scanner/Lexer

It breaks the input program into a token stream.

---

We give it a list of tokens and definitions. Definitions are simply a list of token names that belong to a cooresponding token. It then returns a lexeme stream, or a tuple of the token name and the value of the token.

Note: you can ignore whitespace when outputting the lexeme stream.

Also always take the longest possible token.

For example instead of partins x++ as x, +, +, you should parse it as x, ++.

#### Example

```rs
"My old computer crashed" // is scanned to:
[(Article, "My"), (Adjective, "old"), (Noun, "computer"), (Verb, "crashed")]
```

#### Naive Implementation

Using the following tokens:

```rs
ID = [characters]
NUM = [numbers]
ASSIGN = "="
PLUS = "+"
MULT = "*"
IGNORE = [whitespace]
```

```python
class NaiveScanner:
    def __init__(self, input_string):
        self.ss = StringStream(input_string)
    # Make sure to go in order of length3
    def token(self):
        while self.ss.peek_char() in IGNORE:
            self.ss.eat_char()
        if self.ss.peek_char() == "+":
            value = self.ss.peek_char()
            self.ss.eat_char();
            return ("ADD", value)
        if self.ss.peek_char() == "*":
            value = self.ss.peek_char()
            self.ss.eat_char();
            return ("MULT", value)
        if self.ss.peek_char() in NUMS:
            value = ""
            while self.ss.peek_char() in NUMS:
                value += self.ss.peek_char()
                self.ss.eat_char()
            return ("NUM", value)
```
