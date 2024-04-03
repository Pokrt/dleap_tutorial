# Business Object List (BOL)  

## Methods

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