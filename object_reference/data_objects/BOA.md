# Business Object Attribute (BOA)

## Methods

### Retrieving the Value of a Business Object Attribute

**Method Name:** `BOA.getValue()`

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

**Method Name:** `BOA.setValue(value)`

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

**Method Name:** `BOA.getId()`

**Parameters:** None.

**Description:** Retrieves the unique ID of this data item that is specific to each form.

**Example:**

```javascript
var itemId = BOA.getId();
```

### Accessing the Business Object for the Form

**Method Name:** `BOA.getBO()`

**Parameters:** None.

**Description:** Returns the Business Object associated with the entire form.

**Example:**

```javascript
var formBO = BOA.getBO();
```

### Determining the Type of a Data Item

**Method Name:** `BOA.getType()`

**Parameters:** None.

**Description:** Returns a string that indicates the type of the data item, such as string, number, boolean, currency,
time, date, timestamp, or attachment.

**Example:**

```javascript
var dataType = BOA.getType();
```

### Connecting an Event Listener to a Business Object Attribute

**Method Name:** `BOA.connectEvent(eventName, callbackFunction)`

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

**Method Name:** `BOA.disconnectEvent(eventHandle)`

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

**Method Name:** `BOA.setValid(valid, msg)`

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

**Method Name:** `BOA.getValid()`

**Parameters:** None.

**Description:** Retrieves the validity state of a data item as set by `BOA.setValid()`. This function is useful for
checking if a custom validity state has been assigned to the data item, separate from its inherent validity according to
form rules.

**Example:**

```javascript
var isValidCustom = BOA.getValid();
```

### Setting Data as Required

**Method Name:** `BOA.setRequired(required)`

**Parameters:** `required` (Boolean): Whether the data item is required.

**Description:** Overrides whether a data item is required. Setting this to "true" makes the data required for form
submission, whereas "false" reverses any previously overridden value.

::: tip Note
If a Business Object Attribute is inherently required by a property or rule, you cannot make it unrequired.
:::

### Retrieving the Required State of a Data Item

**Method Name:** `BOA.getRequired()`

**Parameters:** None.

**Description:** Retrieves the value indicating whether a data item has been set as required. This value is set
through `BOA.setRequired()`.

**Example:**

```javascript
var isRequired = BOA.getRequired();
```

### Checking Data Validity

**Method Name:** `BOA.isValid()`

**Parameters:** None.

**Description:** Checks if the data item is valid, returning true for valid data and false for invalid data.

**Example:**

```javascript
var isValid = BOA.isValid();
```

### Getting the Invalid Message for a Data Item

**Method Name:** `BOA.getInvalidMessage()`

**Parameters:** None.

**Description:** Returns the current error message(s) associated with this data item if it is invalid, or null if the
data is valid.

**Example:**

```javascript
var errorMsg = BOA.getInvalidMessage();
```

### Determining if a Data Item is Required

**Method Name:** `BOA.isRequired()`

**Parameters:** None.

**Description:** Returns true if the data item is marked as required, either by default or through `BOA.setRequired()`.

**Example:**

```javascript
var required = BOA.isRequired();
```

### Checking if a Required Data Item is Missing

**Method Name:** `BOA.isMissing()`

**Parameters:** None.

**Description:** Determines if a required data item is missing a value, returning true if it is required and has no
value, and false otherwise.

**Example:**

```javascript
var isMissing = BOA.isMissing();
```

### Triggering Validation for a Data Item

**Method Name:** `BOA.validate()`

**Parameters:** None.

**Description:** Initiates the validation process for the data item, enforcing any defined validation rules and
requirements.
