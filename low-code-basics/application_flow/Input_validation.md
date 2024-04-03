# Input validation in HCL Domino Leap

Input validation is a process used to ensure that the data entered by users meets specific criteria before it is
processed by an application. This is crucial for maintaining data integrity and preventing malicious data from causing
harm to the system. To be able to validate user input we first need to understand what regular expression is.

## Regular expression in Javascript

A regular expression is a sequence of characters that forms a search pattern. It can be used for text search and text
replace operations. In JavaScript, regex patterns are enclosed between slashes `/pattern/`.

### Basic Syntax

- **Creating a Regex**: You can define a regex pattern in two ways:
    1. **Literal Notation**: `const pattern = /abc/;`
    2. **Constructor Function**: `const pattern = new RegExp('abc');`

- **Flags**: After the closing slash, you can specify flags that modify the search:
    - `g` (global): find all matches rather than stopping after the first match
    - `i` (ignore case): case insensitive match
    - `m` (multi-line): allows start and end anchor (`^` and `$`) to match the start and end of a line

Example: `const pattern = /abc/gi;`

### Common Methods

- **test()**: Checks if a string matches the regex pattern. Returns `true` or `false`.

  ```javascript
  const pattern = /hello/;
  console.log(pattern.test('hello world')); // true
  ```

- **exec()**: Executes a search for a match in a string. Returns an array of information or `null` if no match is found.

  ```javascript
  const pattern = /a(b)c/;
  console.log(pattern.exec('abc')); // ['abc', 'b']
  ```

- **String methods**:
    - **match()**: Returns an array of all matches.

      ```javascript
      const string = 'For more information, visit www.example.com.';
      const pattern = /\bwww\.[a-z0-9.-]+\.[a-z]{2,}\b/;
      console.log(string.match(pattern)); // ['www.example.com']
      ```

    - **search()**: Searches for a match in a string. Returns the index of the match, or `-1` if not found.

      ```javascript
      const string = 'hello world';
      const pattern = /world/;
      console.log(string.search(pattern)); // 6
      ```

    - **replace()**: Replaces the matched substring with a replacement substring.

      ```javascript
      const string = 'hello world';
      const replacement = 'planet';
      console.log(string.replace(/world/, replacement)); // 'hello planet'
      ```

    - **split()**: Splits a string into an array of substrings by separating the string into substrings.

      ```javascript
      const string = 'apple, banana, cherry';
      console.log(string.split(/, /)); // ['apple', 'banana', 'cherry']
      ```

### Special Characters

Regex includes special characters that enhance its versatility:

- **`.`**: Matches any single character, except newline or other line terminators.
- **`^`**: Matches the beginning of input.
- **`$`**: Matches the end of input.
- **`*`**: Matches the preceding expression 0 or more times.
- **`+`**: Matches the preceding expression 1 or more times.
- **`?`**: Makes the preceding expression optional.
- **`\d`**, **`\w`**, **`\s`**: Match digits, word characters, and whitespace, respectively.
- **`\D`**, **`\W`**, **`\S`**: Match non-digits, non-word characters, and non-whitespace, respectively.

### Groups and Ranges

- **Groups** `( )`: Groups multiple tokens together and allows you to apply quantifiers to the entire group or capture
  parts of the string.
- **Character Classes** `[ ]`: Matches any one of the enclosed characters.

### Practical Examples

1. **Validating Email Addresses**:

    ```javascript
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailPattern.test('example@example.com')); // true
    ```

2. **Finding All Hashtags in a String**:

    ```javascript
    const text = 'Loving #javascript and #regex!';
    const hashtagPattern = /#[a-z]+/gi;
    console.log(text.match(hashtagPattern)); // ['#javascript', '#regex']
    ```

## Single field validation

In Domino Leap, input validation is straightforward, especially with Single Line fields. These fields allow you to
validate user-entered content by specifying a pattern that the input must match. If the input doesn't match the pattern,
an error message can be displayed to the user.

### Setting Up Validation

Because we will be using regex pattern matching, we can create a shared function to avoid repeating ourselves. The validation function looks like this:

```javascript
app.getSharedData().validateByPattern = function (theItem, pattern, errMsg) {
    if (!pattern.test(theItem.getValue())) {
        theItem.getBOAttr().setValid(false, errMsg);
    } else {
        theItem.getBOAttr().setValid(true, "");
    }
}
```

#### Usage Example

To validate a US phone number, you might use the following setup in the `onItemChange` event of the field:

```javascript
app.getSharedData().validateByPattern(item, /^\(\d{3}\) \d{3}-\d{4}$/, "The number provided does not meet the required format");
```

### Common Patterns for Validation

Validation patterns can be used for various types of data. Here are a few examples:

- **US Phone Number**:
  Simple Pattern: `/^\(\d{3}\) \d{3}-\d{4}$/`
- **Canadian Postal Code**:
  Pattern: `/^[a-z][0-9][a-z] [0-9][a-z][0-9]$/`
- **US Zip Code**:
  Pattern: `/^\d{5}(-\d{4})?$/`
- **IP Address**:
  Pattern: `/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i`

## Validation before form submit (multiple fields)

::: tip Task
You have three numbers (ids: `F_Number1`, `F_Number2`, `F_Number3`) containing number of project hours. Their sum needs
to be at least 5O. Write validation script to check if the form can be submitted.
:::

::: details Solution

- We navigate ourselves into Design
- We click on the form name we want to validate
- On the right side of the page we select Events and choose `validateButtonPressed`
- We add the following code:

``` javascript
//can't submit if client hours is less than 50
if(pActionId === "S_Submit") { //checking if S_Submit action was trigered (you can check 
// IDs in Workflow tab)
    var sum = BO.F_Number1.getValue() + BO.F_Number2.getValue() + BO.F_Number3.getValue();
    if(sum < 50) {
        alert("Project hours do not meet the minimum requirement (50).");
        return false;
    }
}
```

:::