# Object Referencing in JavaScript
In JavaScript, objects can reference other objects, allowing for the creation of complex, interconnected data
structures. This feature is particularly useful for representing real-world relationships and hierarchies in your code.


:::warning poznámka
dleap restrictions - porovnávání a this
:::

## Referencing Other Objects

An object can reference another object simply by including it as a property value. This creates a relationship between
the two objects, where one object "contains" or "points to" the other.

### Example:

```javascript
const address = {
    street: "123 Main St",
    city: "Anytown",
    country: "Anycountry"
};

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    homeAddress: address // Reference to another object
};

console.log(person.homeAddress.street); // Output: 123 Main St
```

In this example, the `person` object has a property named `homeAddress` that references the `address` object. You can
access the properties of the `address` object through the `person` object.

## Manipulating Referenced Objects

When an object references another object, any changes made to the referenced object are reflected in all references to
it.

### Example:

```javascript
address.street = "456 Elm St";
console.log(person.homeAddress.street); // Output: 456 Elm St
```

After changing the `street` property of the `address` object, the change is visible when accessing the `street` property
through the `person` object's `homeAddress` property. This demonstrates that the `person` object's `homeAddress`
property and the `address` variable both reference the same object in memory.

## Passing Objects to Functions

Objects can also be passed to functions. When you pass an object to a function, you are passing a reference to it. This
means that if the function modifies the object, the changes will be visible outside the function.

### Example:

```javascript
function updateCity(personObj, newCity) {
    personObj.homeAddress.city = newCity;
}

updateCity(person, "Newtown");
console.log(person.homeAddress.city); // Output: Newtown
```

In this case, the `updateCity` function modifies the `city` property of the `homeAddress` object referenced by
the `person` object passed to it. The change is reflected in the `person` object outside the function.

## Deep Copying

If you need to create a separate copy of an object so that changes to the new object do not affect the original, you
must perform a "deep copy." This process involves copying the object and all objects it references recursively.

JavaScript does not have a built-in deep copy function, but you can achieve a deep copy using various techniques, such
as using the `JSON.stringify()` and `JSON.parse()` methods for objects without methods or circular references:

```javascript
const personCopy = JSON.parse(JSON.stringify(person));
personCopy.homeAddress.city = "Oldtown";
console.log(person.homeAddress.city); // Output: Newtown
console.log(personCopy.homeAddress.city); // Output: Oldtown
```

This method converts the `person` object to a JSON string and then parses that string back into a new object. The result
is a deep copy of `person` that does not reference any of the original object's nested objects. However, note that this
method does not work for objects containing methods, functions, or circular references.

## Conclusion

Object references allow for the creation of complex data structures where objects can contain or reference other
objects. This feature is powerful for modeling real-world relationships in your applications. Understanding how to work
with object references, manipulate referenced objects, and manage object copying is crucial for effective JavaScript
programming.