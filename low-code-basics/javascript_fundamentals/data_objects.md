::: warning
todo prerequisita je vyřešit naming - ID jednotlivých objektů - Object Identification
:::

# Data Objects in Domino Leap JavaScript API

In the Domino Leap JavaScript API, data objects are essential for managing and manipulating data in web forms. These
objects enable developers to interact with form data programmatically, allowing for dynamic data validation,
manipulation, and retrieval.

## Key Concepts

1. **Business Object (BO)**: Represents an instance of a form, containing all the data. It's the primary object you'll
   interact with when dealing with form data.

2. **Business Object Attribute (BOA)**: Represents individual data items mapped to form elements, like input fields or
   checkboxes.

3. **Business Object List (BOL)**: A collection of Business Objects, used primarily with table items where each row
   represents a Business Object in the list.

![Data Objects](/data_objects.drawio(1).svg)

## Working with Business Objects (BO)

- **Accessing Data**: Use `BO.<itemId>` to access or modify the value of a form item. For example, to set an age field,
  you might use `BO.F_Age.setValue(12);`.

- **Validation**: Control form submission by setting the form's validity using `BO.setValid(valid, msg)`. This can
  prevent form submission based on custom logic, like ensuring an age field falls within a certain range.

- **Form Stages**: Determine the form's current stage with `BO.getCurrentStage()`. This can be useful for showing
  messages or controlling form behavior based on the submission stage.

## Manipulating Business Object Attributes (BOA)

- **Getting and Setting Values**: Use `BOA.getValue()` and `BOA.setValue(value)` to read and write values to form
  elements. The data type of the value returned or set depends on the form element's type (e.g., number, string, date).

- **Event Handling**: Connect and disconnect event listeners to BOA items
  with `BOA.connectEvent(eventName, callbackFunction)` and `BOA.disconnectEvent(eventHandle)`, allowing for dynamic
  responses to user interactions.

- **Validation and Requirements**: Similar to BO, BOA allows for the setting of validity and required states on
  individual form elements, enabling fine-grained control over form data validation.

## Managing Business Object Lists (BOL)

- **Handling Lists**: Use BOL to manage lists of Business Objects, such as table rows. Methods
  like `BOL.getLength()`, `BOL.get(index)`, and `BOL.add(bo)` facilitate working with these lists, allowing for the
  addition, removal, and retrieval of rows.

## Practical Example

Let's consider a form with an age field (F_Age), a name picker (F_NamePicker1), and a table listing previous
submissions. Here's how you might use the discussed objects:

1. **Setting an Age**: Ensure the age is within a specific range and set it.
   ```javascript
   if (BO.F_Age.getValue() < 18) {
       BO.F_Age.setValid(false, "You must be at least 18 years old.");
   } else {
       BO.F_Age.setValue(25); // Assuming the age is valid
   }
   ```

2. **Handling Name Picker**: Set a name picker's value based on user input.
   ```javascript
   BO.F_NamePicker1.setValue('CN=John B Goode/OU=Sales/OU=East/O=Acme/C=US');
   ```

3. **Adding a New Row to a Table**: Create a new Business Object for the table and set some values before adding it to
   the list.
   ```javascript
   var newRow = BOL.createNew();
   newRow.F_Age.setValue(30);
   BOL.add(newRow);
   ```

## Conclusion

This tutorial has introduced the basics of working with data objects in the Domino Leap JavaScript API. By understanding
BO, BOA, and BOL, developers can effectively manipulate and validate form data, enhancing user interactions and data
integrity in web applications. Practice with these concepts to build more dynamic and responsive forms.

## Useful Links
[Domino Leap JavaScript API Documentation](https://help.hcltechsw.com/domino-leap/1.1.3/ref_jsapi_ref_data_objects.html)