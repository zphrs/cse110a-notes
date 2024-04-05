---
title: Day 3 - Lexical Analysis
date: 2024-04-05
prevNote: ../day2/
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

## Overview of Compiler Design

```
Input program (string; start of front end) ---> lexical analysis --token stream-> syntactic analyzer --syntax tree-> semantic analyzer --syntax tree-> Intermediate code gen --IR program-> IR optimizations (loop; end of front end) --optimized IR program-> target code gen (start of back end) --ISA program-> target code optimizations (loop!) --optimized ISA program-> machine code
```

---

## Parsing

Parsing is the front end which creates a tree of the program.

Optimizations are run on the tree and then the backend takes the tree and turns it into the target language.
