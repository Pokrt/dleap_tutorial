# Survey

## Item-Specific Functions

### Getting Survey Question Options: `item.getOptions()`

- **Description**: Returns an array of all the options for the survey questions. Each option has a `value` property,
  that gets saved in the data, and a `display` property, the title of at the beginning of the survey.

- **Example**:
  ```javascript
  let options = item.getOptions();
  // Retrieves an array of options for survey questions, each with a value and display property.
  ```

## Item Common Functions

<!--@include: ./common/functions.md -->
<!--@include: ./common/event_objects.md -->


<!--@include: ./common/events.md -->