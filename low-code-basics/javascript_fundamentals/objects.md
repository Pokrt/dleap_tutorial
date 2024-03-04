# JavaScript Objects
JavaScript objects are a fundamental part of the language, allowing you to store collections of data and more
complex entities. In this tutorial, we'll start with the basics and gradually delve into more detailed aspects of
JavaScript objects.

## What is a JavaScript Object?

In JavaScript, an object is a standalone entity, with properties and type. Think of it as a container for values in a
key:value format. The keys (or names) act as identifiers for the values stored within the object.

## Creating an Object

There are several ways to create objects in JavaScript:

### Object Literals

The simplest way to create an object is using the object literal syntax. This is just a comma-separated list of key:
value pairs within curly braces `{}`.

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
```

### The `new` Keyword

You can also create an object using the `new` keyword followed by `Object()`. This method is less common for direct
object creation.

```javascript
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
```

## Accessing Object Properties

You can access the properties of an object in two ways:

### Dot Notation

```javascript
console.log(person.firstName); // Output: John
```

### Bracket Notation

```javascript
console.log(person["lastName"]); // Output: Doe
```

Bracket notation is especially useful when accessing properties with names that are not valid JavaScript identifiers or
when property names are dynamic.

## Modifying Object Properties

You can modify the properties of an object using the same dot or bracket notation.

```javascript
person.age = 31;
console.log(person.age); // Output: 31
```

## Adding New Properties

You can add new properties to an object simply by assigning a value to a new property name.

```javascript
person.email = "john.doe@example.com";
console.log(person.email); // Output: john.doe@example.com
```

## Deleting Properties

You can remove properties from an object using the `delete` keyword.

```javascript
delete person.age;
console.log(person.age); // Output: undefined
```

## Looping Through Object Properties

You can loop through the properties of an object using a `for...in` loop.

```javascript
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

## Methods in Objects

Objects can also contain functions, known as methods. Methods are actions that can be performed on objects.

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Output: John Doe
```

## Conclusion

JavaScript objects are versatile and powerful, enabling you to group related data and functionality. They play a crucial
role in building more complex and maintainable code. Experiment with creating and manipulating objects to get
comfortable with these concepts. As you progress, you'll learn more about object-oriented programming in JavaScript,
including prototypes and classes, which further leverage the power of objects.