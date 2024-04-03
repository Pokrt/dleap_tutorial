# Business object (BO)

## Methods

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
