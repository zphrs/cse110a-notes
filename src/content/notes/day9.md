---
title: Day 9 - Associativity & Parsing
date: 2024-04-22
prevNote: ../day8/
---

# Day 9

## Announcements

HW 2 is due friday at midnight.

Still recruiting for parallel programming study. Check canvas for more info.

## Quiz

### Q1

What is an example of input recognized by the following grammar?

```
a -> a X
a -> Y
```

- XXXXXXXXY
- XYYYYYYYY
- **YXXXXXXXX**
- YYYYYYYYX

### Q2

Which grammar is ambiguous?

- \*\*```
  e -> e PLUS e
  e -> ID

````**

- ```
e -> e PLUS ID
e -> ID
````

- ```
  e -> ID PLUS e
  e -> ID
  ```

````

- ```
e -> ID PLUS ID
e -> ID
````

### Q3

Operators with higher precedence should appear in production rules that appear higher in the parse tree.

- True
- **False**

### Q4

Write a few sentences about why it might be bad to have an ambiguous grammar.

It is bad to have an ambiguous grammar because it can lead to multiple interpretations of the same input which makes the resulting parse tree ambiguous. This can lead to different results depending on the interpretation which can be confusing and lead to unexpected behavior.

## Associativity

### Left Associative

Right to left:

2 - 3 - 4 = (2 - 3) - 4

### Right Associative

Left to right:

2 - 3 - 4 = 2 - (3 - 4)

## Rules for Associativity

op: -, name: expr, productions:

: expr MINUS expr
| NUM

The above is ambiguous. We can fix this:

: expr MINUS NUM
| NUM

This is left associative as the left side is the recursive call and items lower in the parse tree are evaluated first.


## Algorithms for parsing

### Top-Down Parsing

Pros:
- Algorithm is simpler
- Faster than bottom-up
- Easier recovery

Cons:
- Not efficient on arbitrary grammars
- Many grammars need to be re-written

---



### Bottom-Up Parsing

Pros:
- can handle grammars expressed more naturally
- can encode precedence and associativity even if grammar is ambiguous

Cons:

- algorithm is complicated
- in many cases slower than top down

