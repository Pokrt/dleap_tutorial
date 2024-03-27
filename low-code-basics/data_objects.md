# Data Objects in Domino Leap

## Key Concepts

1. **Business Object (BO)**: Represents an instance of a form, containing all the data. It's the primary object you'll
   interact with when dealing with form data.

2. **Business Object Attribute (BOA)**: Represents individual data items mapped to form elements, like input fields or
   checkboxes.

3. **Business Object List (BOL)**: A collection of Business Objects, used primarily with table items where each row
   represents a Business Object in the list.

## Working with Business Objects (BO)

### Accessing Business Object Attribute Data

**Function Name:** `BO.<itemId>`

**Parameters:** itemId (the ID of the item whose Business Object Attribute data is being accessed).

**Description:** Accesses the Business Object Attribute data for an individual item on the form. This is primarily used
for interacting with form items, such as setting values or getting item-specific information.

**Example:**

```javascript
BO.F_Age.setValue(12);
```

### Setting Form Validity

**Function Name:** `BO.setValid(valid, msg)`

**Parameters:**

- `valid` (Boolean): The validity state to set for the form.
- `msg` (String): The message to display if the validity state is overridden to false.

**Description:** Overrides the validity of the form based on the provided `valid` parameter. Setting `valid` to false
prevents form submission and displays the provided message. Setting `valid` to true removes any previous validity
overrides but does not affect other validity constraints.

**Example:**

```javascript
if (BOA.getValue() < 15 || BOA.getValue() > 35) {
    BOA.setValid(false, "The age must be between 16 and 35");
}
```

### Getting the Form's Validity State

**Function Name:** `BO.getValid()`

**Parameters:** None.

**Description:** Returns the current overridden valid state of the form as set by `BO.setValid()`.

### Checking Form Validity

**Function Name:** `BO.isValid()`

**Parameters:** None.

**Description:** Checks the overall validity of the form. Returns true if every field is valid, and false otherwise.
This function differs from `BO.getValid()` which returns the form's overridden valid state.

### Retrieving Invalid Field Messages

**Function Name:** `BO.getInvalidMessages()`

**Parameters:** None.

**Description:** Returns an array of error messages from any invalid fields in the form. If all fields are valid, it
returns an empty array.

### Getting the Current Form Stage

**Function Name:** `BO.getCurrentStage()`

**Parameters:** None.

**Description:** Retrieves the current stage of the form. Useful for conditional logic based on form progress.

**Example:**

```javascript
if (BO.getCurrentStage() === 'ST_Submitted') {
    alert('Reminder: This form is complete and cannot be modified');
}
```

### Getting the Data ID

**Function Name:** `BO.getDataId()`

**Parameters:** None.

**Description:** Returns the unique ID that represents this data item. If the item has never been submitted, it returns
the ID it will have upon submission.

### Accessing Child Business Object Attributes

**Function Name:** `BO.getChildren()`

**Parameters:** None.

**Description:** Provides access to all individual Business Object Attribute data for child items. Includes functions
for getting the length of the list and accessing specific items by index.

## Working with Business Object Attribute (BOA)

### Retrieving the Value of a Business Object Attribute

**Function Name:** `BOA.getValue()`

**Parameters:** None.

**Description:** Retrieves the current value of the business object attribute. The type of the returned value depends on
the type of the item, including Boolean for checkboxes, Number for numeric fields, Date for date/time fields, Object for
attachments and name pickers, Multi-Value String for multi-select fields, and String for all other items.

**Example:**

```javascript
var s = BO.F_SingleLine1.getValue(); // For a String
var n = BO.F_Number1.getValue(); // For a Number
var d = BO.F_Date1.getValue(); // For a Date
var b = BO.F_CheckBox1.getValue(); // For a Boolean
var o = BO.F_Attachment1.getValue(); // For an Object (Attachment)
var name = BO.F_NamePicker1.getValue(); // For an Object (Name Picker)
```

### Setting the Value of a Business Object Attribute

**Function Name:** `BOA.setValue(value)`

**Parameters:** `value` (varies): The value to set for the business object attribute, respecting the attribute's type.
This can be a String, Number, Date, Boolean, or Object (specifically for attachments and name pickers).

**Description:** Sets the value of the specified business object attribute. The correct data type must be provided based
on the attribute's type. Some type conversion is done where possible, such as converting a Number to a String. For
attachments, an object with `uid`, `id`, and `fileName` properties is required. For name pickers, an object with at
least an `id` property is needed, or a string representing the user or group ID.

**Example:**

```javascript
// For a String
BO.F_SingleLine1.setValue("Sample String");
BO.F_Paragraph1.setValue("Sample String");

// For a Number or Currency
BO.F_Number1.setValue(25);
BO.F_Currency1.setValue(123.65);

// For a Date or Timestamp
BO.F_Date1.setValue(new Date());
BO.F_TimeStamp1.setValue(new Date());

// For a Boolean
BO.F_CheckBox1.setValue(true);

// For an Object - Attachment
BO.F_Attachment1.setValue({uid: 'ccb92c12-d435-4288-baff-878d8d3c2923', id: '25', fileName: 'myfile.txt'});

// For an Object – Name Picker
BO.F_NamePicker1.setValue({id: 'CN=John B Goode/OU=Sales/OU=East/O=Acme/C=US'});
// or as a String
BO.F_NamePicker1.setValue('CN=John B Goode/OU=Sales/OU=East/O=Acme/C=US');
```

### Getting the ID of a Data Item

**Function Name:** `BOA.getId()`

**Parameters:** None.

**Description:** Retrieves the unique ID of this data item that is specific to each form.

**Example:**

```javascript
var itemId = BOA.getId();
```

### Accessing the Business Object for the Form

**Function Name:** `BOA.getBO()`

**Parameters:** None.

**Description:** Returns the Business Object associated with the entire form.

**Example:**

```javascript
var formBO = BOA.getBO();
```

### Determining the Type of a Data Item

**Function Name:** `BOA.getType()`

**Parameters:** None.

**Description:** Returns a string that indicates the type of the data item, such as string, number, boolean, currency,
time, date, timestamp, or attachment.

**Example:**

```javascript
var dataType = BOA.getType();
```

### Connecting an Event Listener to a Business Object Attribute

**Function Name:** `BOA.connectEvent(eventName, callbackFunction)`

**Parameters:**

- `eventName` (String): The name of the event to listen for.
- `callbackFunction` (Function): The function to execute when the event occurs.

**Description:** Connects an event listener to a Business Object Attribute. It allows the definition of custom code to
execute upon the triggering of the specified event. Currently, the only supported event is `onChange`.

**Example:**

```javascript
var hdl = BOA.connectEvent("onChange", function (newValue) {
    alert("Field content is " + newValue);
    BOA.disconnectEvent(hdl);
});
```

::: tip Note
If you connect an event, it must be disconnected using `BOA.disconnectEvent(eventHandle)`.
:::

### Disconnecting an Event Listener

**Function Name:** `BOA.disconnectEvent(eventHandle)`

**Parameters:** `eventHandle` (Object): The event handle object returned by `BOA.connectEvent`.

**Description:** Disconnects the event handler specified by the event handle object. It is necessary to prevent
duplicate listeners from being created each time the event is triggered.

**Example:**

```javascript
var hdl = BOA.connectEvent("onChange", function (newValue) {
    alert("Field content is " + newValue);
    BOA.disconnectEvent(hdl);
});
```

### Overriding Data Validity

**Function Name:** `BOA.setValid(valid, msg)`

**Parameters:**

- `valid` (Boolean): The validity state to set.
- `msg` (String): Optional. The custom error message to display if `valid` is set to false.

**Description:** Overrides the validity of the data item. Passing "false" marks the data as invalid and prevents form
submission, with an optional custom error message. Setting it to "true" clears any previously overridden validity state.

**Example:**

```javascript
if (BOA.getValue().length < 3)
    BOA.setValid(false, 'Name must be at least 3 characters');
else
    BOA.setValid(true);
```

::: tip Note
You cannot set a Business Object Attribute to valid if it actually contains invalid data or has been set invalid by a
rule.
:::

### Retrieving the Validity State of a Data Item

**Function Name:** `BOA.getValid()`

**Parameters:** None.

**Description:** Retrieves the validity state of a data item as set by `BOA.setValid()`. This function is useful for
checking if a custom validity state has been assigned to the data item, separate from its inherent validity according to
form rules.

**Example:**

```javascript
var isValidCustom = BOA.getValid();
```

### Setting Data as Required

**Function Name:** `BOA.setRequired(required)`

**Parameters:** `required` (Boolean): Whether the data item is required.

**Description:** Overrides whether a data item is required. Setting this to "true" makes the data required for form
submission, whereas "false" reverses any previously overridden value.

::: tip Note
If a Business Object Attribute is inherently required by a property or rule, you cannot make it unrequired.
:::

### Retrieving the Required State of a Data Item

**Function Name:** `BOA.getRequired()`

**Parameters:** None.

**Description:** Retrieves the value indicating whether a data item has been set as required. This value is set
through `BOA.setRequired()`.

**Example:**

```javascript
var isRequired = BOA.getRequired();
```

### Checking Data Validity

**Function Name:** `BOA.isValid()`

**Parameters:** None.

**Description:** Checks if the data item is valid, returning true for valid data and false for invalid data.

**Example:**

```javascript
var isValid = BOA.isValid();
```

### Getting the Invalid Message for a Data Item

**Function Name:** `BOA.getInvalidMessage()`

**Parameters:** None.

**Description:** Returns the current error message(s) associated with this data item if it is invalid, or null if the
data is valid.

**Example:**

```javascript
var errorMsg = BOA.getInvalidMessage();
```

### Determining if a Data Item is Required

**Function Name:** `BOA.isRequired()`

**Parameters:** None.

**Description:** Returns true if the data item is marked as required, either by default or through `BOA.setRequired()`.

**Example:**

```javascript
var required = BOA.isRequired();
```

### Checking if a Required Data Item is Missing

**Function Name:** `BOA.isMissing()`

**Parameters:** None.

**Description:** Determines if a required data item is missing a value, returning true if it is required and has no
value, and false otherwise.

**Example:**

```javascript
var isMissing = BOA.isMissing();
```

### Triggering Validation for a Data Item

**Function Name:** `BOA.validate()`

**Parameters:** None.

**Description:** Initiates the validation process for the data item, enforcing any defined validation rules and
requirements.

## Working with Business Object List (BOL)

### Getting the Length of a Business Object List

**Function Name:** `BOL.getLength()`

**Parameters:** None.

**Description:** Returns the number of Business Objects contained in the list. This function is useful for iterating
over all Business Objects in a list.

**Example:**

```javascript
var length = BOL.getLength();
```

### Retrieving a Business Object by Index

**Function Name:** `BOL.get(index)`

**Parameters:**

- `index` (Number): The index of the Business Object to retrieve.

**Description:** Retrieves the Business Object located at the specified index within the list.

**Example:**

```javascript
var businessObject = BOL.get(0);
```

### Creating a New Empty Business Object

**Function Name:** `BOL.createNew()`

**Parameters:** None.

**Description:** Creates a new, empty Business Object that is ready to be populated and inserted into the list.

**Example:**

```javascript
var newBO = BOL.createNew();
```

### Adding a Business Object to the List

**Function Name:** `BOL.add(bo)`

**Parameters:**

- `bo` (Business Object): The Business Object to add to the list.

**Description:** Adds a Business Object of the appropriate type to the list. This object can be newly created
with `BOL.createNew()` or previously removed from the list.

**Example:**

```javascript
BOL.add(newBO);
```

### Removing a Business Object from the List

**Function Name:** `BOL.remove(bo)`

**Parameters:**

- `bo` (Business Object): The Business Object to be removed from the list.

**Description:** Removes the specified Business Object from the list. Returns true if the removal was successful, false
otherwise.

**Example:**

```javascript
var isSuccess = BOL.remove(existingBO);
```

### Getting the ID of the Business Object List

**Function Name:** `BOL.getId()`

**Parameters:** None.

**Description:** Returns the unique ID of this data item that is unique per form, applicable to the Business Object
List.

**Example:**

```javascript
var listId = BOL.getId();
```

### Determining the Type of Business Object List Data

**Function Name:** `BOL.getType()`

**Parameters:** None.

**Description:** Returns a string that indicates the type of Business Object List data.

**Example:**

```javascript
var listType = BOL.getType();
```

### Overriding Data Validity for a Business Object List

**Function Name:** `BOL.setValid(valid, msg)`

**Parameters:**

- `valid` (Boolean): The validity state to set.
- `msg` (String): Optional. The custom error message if `valid` is set to false.

**Description:** Overrides the validity of the data in the Business Object List. Passing false marks the list's data as
invalid, preventing form submission.

**Example:**

```javascript
BOL.setValid(false, "Error message if invalid.");
```

::: tip Note
You cannot set a Business Object List to valid if it contains invalid data or is invalidated by a rule.
:::

### Retrieving the Validity State of a Business Object List

**Function Name:** `BOL.getValid()`

**Parameters:** None.

**Description:** Retrieves the validity state of the Business Object List as previously defined by `BOL.setValid()`.
This allows for checking whether the list's data has been overridden to be considered valid or invalid, separate from
its inherent validation rules.

**Example:**

```javascript
var isValid = BOL.getValid();
```

### Setting a Business Object List as Required

**Function Name:** `BOL.setRequired(required)`

**Parameters:**

- `required` (Boolean): Whether the list data is required.

**Description:** Overrides the required state of the Business Object List. Passing true makes its data required for form
submission.

**Example:**

_Not provided._

::: tip Note
If a Business Object Attribute is inherently required by a property or rule, it cannot be made unrequired.
:::

### Retrieving the Required State of a Business Object List

**Function Name:** `BOL.getRequired()`

**Parameters:** None.

**Description:** Retrieves the value indicating whether the Business Object List has been set as required, as previously
defined by `BOL.setRequired()`.

**Example:**

```javascript
var isRequired = BOL.getRequired();
```

## Useful Links

[Domino Leap JavaScript API Documentation](https://help.hcltechsw.com/domino-leap/1.1.3/ref_jsapi_ref_data_objects.html)