# Branching and looping

The ability to make decisions and repeat tasks is essential in programming. In JavaScript, you can control the flow of
your programs using branching and looping constructs. This article introduces you to the `if` statement, `for` loop,
and `while` loop, which are fundamental to controlling the flow of your JavaScript programs.

## `if` Statement

The `if` statement is used to execute a block of code only if a specified condition is true. It's the most basic way to
introduce decision-making into your programs.

#### Syntax

```javascript
if (condition) {
    // block of code to be executed if the condition is true
}
```

#### Example

```javascript
let age = 18;

if (age >= 18) {
    console.log('You are eligible to vote.');
}
```

In this example, the message "You are eligible to vote." will be printed to the console if `age` is 18 or more.

## `for` Loop

The `for` loop is used to run a block of code a certain number of times. It's particularly useful when you know in
advance how many times you want to execute a statement or a block of statements.

#### Syntax

```javascript
for (initialExpression; condition; incrementExpression) {
    // block of code to be executed for each iteration
}
```

#### Example

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

This loop will print the numbers 0 through 4 to the console. It starts with `i = 0` and runs as long as `i` is less than
5, with `i` being incremented by 1 after each iteration.

## `while` Loop

The `while` loop executes its statements as long as a specified condition evaluates to true. Unlike the `for` loop,
the `while` loop is used when the number of iterations is not known before the loop starts.

#### Syntax

```javascript
while (condition) {
    // block of code to be executed as long as the condition is true
}
```

#### Example

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

This loop will also print the numbers 0 through 4 to the console. The loop starts executing if `i` is less than 5 and
continues until `i` reaches 5, with `i` being incremented by 1 in each iteration.

### Conclusion

These are the basic building blocks for controlling the flow of your JavaScript programs. By combining `if`, `for`,
and `while` statements, you can solve a wide range of programming problems by making decisions and repeating tasks until
certain conditions are met. Experiment with these examples in your browser's console or a JavaScript file to see how
they work in action.