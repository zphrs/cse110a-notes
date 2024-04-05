---
title: Day 1 - Introduction
date: 2024-04-01
nextNote: ../day2/
---

# Day 1 - Introduction

## Sorenson's Research Interests

### Utah - Masters

bugs in GPU compilers; Specifically CUDA

### London - PHD

DSLs for GPUs (specifically DSL for graph analytics on GPUs)

#### DSL

Domain Specific Language

#### GPU

Graphics Processing Unit

### Princeton - Postdoc - Compilers for GPUs

Compilers targeting new GPU architectures

## Sorenson's Research Interests

GPU Compilers for new architectures and DSL + Compilers for hard applications (like particle simulations)

## Syllabus Stuff

### What is a compiler?

A compiler is a program that takes in another program and spits out a new program that does the same thing.

### What we're covering

How compiler techniques can transform high level languages into low-level languages, i.e. closer to the instructions that processors can actually execute.
Also automatically make code more efficient and safe to execute.

### Learning Goals

- Specifying programming language grammars
- how to efficiently parse these languages
- how to convert complex high-level code into equivalent (and hopefully more performant) low-level code

### In Person-ish

It is not an async class so make sure to attend the lectures to learn most effectively. If you need to miss a class or two then there is a best effort to record each lecture. However watching the lecture recording will not be a substitute for attending the lecture due to:

1. the whiteboard not being recorded
2. in class discussions

### Background

- CSE 12 - assembly
  - We will get 90% to assembly so being able to read and write low level code is important
  - Also we will use C
- CSE 101
  - High level code is ultimately represented as tree/graph data-structures.
  - Algorithms on these structures which rely on recursion is how we will transform the code into a low-level representation.
  - CSE 103 (optional)
    - Useful for regex and context-rree grammars
- CSE 120
  - Understanding how loe-level code executes on a processor
  - Useful for automatic optimizations

### Homework

Officially supported homework env:

- Docker
- Command line text editor such as vim or emacs
- Many students like VSCode, but Sorenson doesn't know VSCode and cannot provide support

You should be comfortable using the command line

### Background

- Languages used in this class:
  - Python - high-level language
  - C - low-level language
- We will provide support for Python with examples and references
- C should have been learned in CSE 12/CSE 13
  - We will compile a restricted form of C throughout the class (only for loops/while loops/integers/floats/if statements)

---

- Feel free to share your favorite docker or language resources!

### Class Format

Ask questions! Engage!

Don't come to class sick! These recordings cna work as a substitute during those times. Will do our best to upload recordings!

- First part of class will be announcements, upcoming homeworks, tests, etc.
- Second part of class will be overviewing the quiz from the previous class.

### Office hours

- 3-5pm on Thursdays
- Will be a google sheet to sign up. You just edit the google sheet to sign up for a slot.
- TODO: add link to google sheet
- Slots are 10 minutes
- Link will be posted in Canvas around noon that day
  - Don't sign up before the Canvas announcement
  - Don't sign up unless you have a question
  - Sign up for one slot at a time

---

TAs and tutors will decide on theirs in the next few days. Hopefully good coverage between in-person and virtual office hours.

### Async discussion

Use piazza for:

- Private message to teaching staff for technical homework questions
- Programming and framework questions (global)
- Tech news (global)
- Discussions on class material (global)

They aim to have 24 hours response time.

#### Additional Forums (Discord)

Feel free to create on, make it open and available to everyone, make sure to provide sufficient moderation, do not cheat, and please remember that anything that is not in Canvas may not be private.

If there are any issues on discord please let the teaching staff know.

### Class Content

30 classes split into 4 modules so ~7 classes per module

#### Reference book

---

Engineering a compiler: second edition (available from UCSC libarary)
[link to book](https://ucsc.primo.exlibrisgroup.com/permalink/01CDL_SCR_INST/1jiojor/alma9914646210706531)
[link to Oreilley UCSC sign in](https://go.oreilly.com/university-of-california-santa-cruz)

Optional book: dragon book - Compilers: Principles, Techniques, and Tools

#### Module 1

Lexing

#### Module 2

Context-free grammars and parsing

#### Module 3

Intermediate representations

AKA reducing from the parse tree to the abstract syntax tree

#### Module 4

Optimizations

Several simple optimizations that exploit the IR structure to make code more efficient such as local value numbering and loop unrolling.

### Assignments and Tests

#### Assignments

1-2 assignments per module

All homeworks will be worth 50% combined

The homeworks build on each other so that by the end you will have a little compiler that you have written bu yourself!

No late homeworks will be accepted because the solutions will be posted after the due date to allow penalty-free building on previous homeworks.

---

Format:

- Coding assignments in Python
- There will be a docker image that you should be able to run locally
- Submit to github classroom

#### Tests

Two tests: final and midterm

In person timed exam

Midterm is may 3
Final is monday, June 10 12-3pm

You can use 3 pages of notes (handwritten or typed)

#### Academic Integrity

Don't copy code blindly

Consulting the internet for specific details is fine but consulting for the entire solution is not

Okay: "How do you concatenate an array in Python?"

Not Okay: "How do you implement a compiler in Python?"

Any part of your submission that is not your original work such as online code snippets need a citation. Sorenson aims to be lenient with cited code, but they may remove some points basedo n the extent. A few missing points is better than a referral for academic misconduct.

Cite ChatGPT if you use it!

Zero tolerance policy on cheating. This is the best chance in your career to take the time to really learn the class material. If you do not learn the material you will not be successful in a tech career.

#### Late Policy

Assignments will not be accepted late

> Why? Because the assignments in this class build on each other. The next assignment depends on the one before it.

Tests: Only accomodations will be through DRC

#### Reviewing Grades

You have 1 week from when the grade is posted to discuss grades with teaching staff.

### Quizzes and Lecture

Small canbvas quiz every lecture

Quiz answers are graded on engagement, not correctness!

All multiple choice questions are free as long as you answer

Not always 1 right answer

Last question is usually a reflection question. Answer in a few questions

Meant to let you reflect on the material!

Please only take the quiz if you attended (or watched) the lecture.

You can have 3 free missed quizzes.

## High level discussion on compilers

TODO
