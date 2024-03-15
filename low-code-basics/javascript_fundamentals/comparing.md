# Comparing Values in JavaScript
Value comparison in JavaScript is a fundamental concept that involves comparing two values to determine their
relationship or equality. JavaScript offers two main ways to compare values: using the "==" (loose equality) operator
and the "===" (strict equality) operator. Understanding the difference between these two is crucial for beginners.

## 1. Loose Equality (`==`)

The "==" operator compares two values for equality after converting them to a common type. This type coercion means that
even if the two values have different types, JavaScript will try to convert them into the same type before making the
comparison.

```javascript
// Example of loose equality
console.log(5 == '5');  // true, because '5' is converted to a number
console.log(0 == false); // true, because both are considered as falsey values
console.log(null == undefined); // true, because null and undefined are treated as equal
```

However, this can lead to unexpected results, especially for beginners, because the conversion rules can be
non-intuitive.

::: warning
It's generally recommended to avoid using the "==" operator for comparisons, as it can lead to unexpected results due to 
type coercion.
:::

:::warning poznámka
dleap restrictions - porovnávání a this
:::
## 2. Strict Equality (`===`)

The "===" operator, on the other hand, checks for equality without performing type coercion. If the two values have
different types, the comparison will immediately return false. This is generally recommended to use for most comparisons
to avoid surprises from type coercion.

```javascript
// Example of strict equality
console.log(5 === '5');  // false, because one is a number and the other is a string
console.log(0 === false); // false, because one is a number and the other is a boolean
console.log(null === undefined); // false, because null and undefined are different types
```

## Comparison of Objects

When comparing objects (including arrays and functions), JavaScript compares their references rather than their
contents. Two objects are only considered equal if they refer to the same instance.

```javascript
const obj1 = {key: 'value'};
const obj2 = {key: 'value'};
console.log(obj1 === obj2); // false, because they are two different instances

const obj3 = obj1;
console.log(obj1 === obj3); // true, because they refer to the same instance
```

## Other Comparison Operators

Besides equality, JavaScript provides other operators to compare values:

- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)
- `!=` (not equal to)
- `!==` (strict not equal to)

These operators can be used to compare numbers, strings (based on standard lexicographical ordering), and other values
after type coercion.

```javascript
console.log(10 > 5); // true
console.log('apple' < 'banana'); // true, because 'apple' comes before 'banana' in lexicographical order
console.log(5 != '5'); // false, because '5' is converted to a number before comparison
console.log(5 !== '5'); // true, because the types are different
```

## Conclusion

Understanding the difference between loose and strict equality is crucial in JavaScript to avoid bugs and unexpected
behavior. In general, it is recommended to use strict equality (`===`) to ensure that comparisons are made without type
coercion. Also, remember that objects are compared by reference, not by value. With practice, you'll get a good grasp of
these concepts and be able to apply them effectively in your JavaScript coding journey.