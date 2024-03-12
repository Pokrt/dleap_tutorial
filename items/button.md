# Button

## Item specific functions

### Sets button text: `item.setContent(content)`

- **Parameters**:
    - `content`: The text or label you want to display on the button.

#### Description

The `item.setContent(content)` function allows you to specify or change the text label of a button item within your
Domino Leap application. This can be particularly useful when you need to update button labels based on user actions or
other conditions in your application.

#### Example

Suppose you have a button in your application that, by default, says "Submit." After a user performs a certain action,
you want to change this label to "Continue." Here's how you would use `item.setContent(content)` to achieve that:

```javascript
var submitButton = item; // Assume 'item' refers to your button item
submitButton.setContent("Continue");
```

In this example, the label on the button originally assigned to the variable `submitButton` will change from "Submit"
to "Continue." This demonstrates how you can dynamically update the content of a button to reflect the current state of
your application or guide the user through a multi-step process.

## Item common functions

<!--@include: ./common/functions.md -->