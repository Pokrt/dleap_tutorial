## Inherited Methods 
The following methods are common to all Item objects: 
 &#9401; &#9412; 

### &#127356;   addClasses(classes) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

**Description**: This method adds one or more custom CSS class names to an item, allowing for dynamic styling. You can
pass a single class name, multiple class names separated by spaces, or an array of class names. If any class names are
invalid, the method returns `false` and no classes are added.

**Example**:

```javascript
item.addClasses("emphasized error");
```

In this example, the item will have the CSS classes `emphasized` and `error` added to it for styling purposes.

### &#127356; clearRequiredMessage() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

**Description**: Validates the item data but prevents any required field error messages from being displayed. This is
useful in scenarios where you want to perform validation without user feedback.

**Example**:

```javascript
item.clearRequiredMessage();
```

Use this method when you need to validate the item but do not wish to show error messages to the user.

### &#127356; connectEvent(eventName, callbackFunction) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

**Description**: Connects a method to an item event, allowing for dynamic behavior based on user actions or item
changes. It returns a handle object that represents the connection, which can be used to disconnect the event later.

**Example**:

```javascript
var hndl = item.connectEvent('onItemChange', function ()
{
    if (item.getBOAttr().getValue() === 'Yes') {
        form.getBO().F_SectionA.setVisible(true);
    }
}
)
;
```

Here, we connect a method to the `onItemChange` event that makes a section visible if the item's value is 'Yes'.

### &#127356; disconnectEvent(eventHandle) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

**Description**: Disconnects a previously connected event handler using the handle object returned
by `item.connectEvent`. This is essential to prevent multiple instances of the event handler from being attached.

::: warning
If you connect an item event, you must also disconnect it in the same event. Otherwise, multiple versions of the
connected code are attached every time the event is triggered.
:::

**Example**:

```javascript
var hndl = item.connectEvent('onItemChange', function()
{
    if (item.getBOAttr().getValue() === 'Yes')
        form.getBO().F_SectionA.setVisible(true);
}
)
;
item.disconnectEvent(hndl);
```

This example demonstrates connecting to an event and then immediately disconnecting it to ensure the event handler does
not persist unnecessarily.

### &#127356; getActive() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

**Description**: Returns `true` if the item is active and `false` if it has been made read-only by a rule, stage, or
custom JavaScript.

**Example**:

```javascript
var isActive = item.getActive();
```

Use this method to check whether an item is active or read-only in your application logic.

### &#127356; getAppPage() <Badge type="warning">apItem</Badge>

- **Description**: Retrieves the page object to which the current item belongs.
- **Example**:
  ```javascript
  var page = apItem.getAppPage();
  ```

### &#127356; getBO() <Badge type="tip">item</Badge>

- **Description**: Returns the Business Object (BO) for the entire form. This object represents the data model the form
  interacts with.
- **Example**:
  ```javascript
  var businessObject = item.getBO();
  ```

### &#127356; getBOAttr() <Badge type="tip">item</Badge>

- **Description**: For items collecting data, this method returns the Business Object Attribute (BOA) containing that
  data. Returns `null` for interface-only items.
- **Example**: Get data for an item and set its value:
  ```javascript
  item.getBOAttr().setValue(45);
  ```

### &#127356; getChildren() <Badge type="tip">item</Badge>

- **Description**: If an item contains children (e.g., a Section or Tab Folder), it returns a list object providing
  access to all direct children items. This list has `getLength()` and `get(index)` methods.
- **Example**: Rest all numbers inside a section to 0:
  ```javascript
  var list = item.getChildren();
  for(var i = 0; i < list.getLength(); i++) {
    if(list.get(i).getType() === 'number') {
      list.get(i).getBOAttr().setValue(0);
    }
  }
  ```

### &#127356; getClasses() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Returns an array of custom class names currently applied to the item.
- **Example**:
  ```javascript
  var classes = item.getClasses();
  ```

### &#127356; getDisplayValue() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Returns the current value being displayed, useful for getting the current, but not yet committed,
  value.
- **Example**:
  ```javascript
  var displayValue = item.getDisplayValue();
  ```

### &#127356; getHoverText() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Retrieves the current value set as hover text for the item.
- **Example**:
  ```javascript
  var hoverText = item.getHoverText();
  ```

### &#127356; getHintText() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Returns the value set as hint text for the item.
- **Example**:
  ```javascript
  var hintText = item.getHintText();
  ```

### &#127356; getId() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Retrieves the unique ID of the item within the application (e.g., F_FirstName).
- **Example**:
  ```javascript
  var itemId = item.getId();
  ```

### &#127356; getInvalidMessage() <Badge type="warning">apItem</Badge>

- **Description**: An interface item that is collecting data, this method returns the Business Object Attribute that
  contains that data. If it is an interface-only item, then it returns null.

### &#127356; getPage() <Badge type="tip">item</Badge>

- **Description**: Returns the page object to which the item belongs. This can be useful for accessing the form object
  or other page-level attributes.
- **Example**: Get the form object:
  ```javascript
  var form = item.getPage().getForm();
  ```

### &#127356; getParent() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Retrieves the object that is the direct parent of the item, which can be a page, section, or tab
  folder.
- **Example**:
  ```javascript
  var parentObject = item.getParent();
  ```

### &#127356; getPlaceholderText() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Returns the current value set as placeholder text for the item.
- **Example**:
  ```javascript
  var placeholderText = item.getPlaceholderText();
  ```

### &#127356; getRequired() <Badge type="warning">apItem</Badge>

- **Description**: Gets the value previously set using `setRequired()`, indicating if the item is required.
- **Example**:
  ```javascript
  var isRequired = item.getRequired();
  ```

### &#127356; getRows() <Badge type="tip">item</Badge>

- **Description**: Returns the current value set as the number of rows displayed by the item. This is specifically for
  multi-line input areas.
- **Example**:
  ```javascript
  var rows = item.getRows();
  ```

### &#127356; getStartLabel() <Badge type="tip">item</Badge>

- **Description**: Retrieves the label displayed at the start of a numeric or choice slider. This is useful for
  providing context or indicating the minimum value of the slider.
- **Example**:
  ```javascript
  var startLabel = item.getStartLabel();
  console.log(startLabel); // Might print "Low" for a satisfaction slider
  ```

### &#127356; getStopLabel() <Badge type="tip">item</Badge>

- **Description**: Fetches the label displayed at the end of a numeric or choice slider, which usually represents the
  maximum value or condition.
- **Example**:
  ```javascript
  var stopLabel = item.getStopLabel();
  console.log(stopLabel); // Could output "High" for a satisfaction slider
  ```

### &#127356; getStyle() <Badge type="tip">item</Badge>

- **Description**: Returns the current display style of an item. Note that this method is primarily applicable to Date
  and Time input fields.
- **Example**:
  ```javascript
  var style = item.getStyle();
  console.log(style); // Outputs the style setting, like "MM/DD/YYYY" for a date field
  ```

### &#127356; getTitle() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Retrieves the current value used as the field title, which is the text label associated with the item
  on the form.
- **Example**:
  ```javascript
  var title = item.getTitle();
  console.log(title); // Prints the title of the item, such as "Date of Birth"
  ```

### &#127356; getType() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Returns a string that identifies the object type. This can be useful for conditional logic based on
  the item type.
- **Example**:
  ```javascript
  var itemType = item.getType();
  console.log(itemType); // For example, "date" for a date picker item
  ```

::: details **Return values**

| Palette Item    | Type                     |
|-----------------|--------------------------|
| Attachment      | attachment               |
| Button          | button                   |
| Check Box       | checkBox                 |
| Currency        | currency                 |
| Date            | date                     |
| Dropdown        | comboBox                 |
| Email Address   | emailAddress             |
| Folder Tab      | tabFolderTab             |
| HTML Fragment   | htmlArea                 |
| Image           | image                    |
| Line            | horizontalLine           |
| Media           | media                    |
| Number          | number                   |
| Numeric Slider  | horizontalSlider         |
| Page            | page                     |
| Page Navigation | pageNavigator            |
| Paragraph Text  | textArea                 |
| Password        | password                 |
| Section         | section                  |
| Select Many     | checkGroup               |
| Select One      | radioGroup               |
| Single Line     | text                     |
| Survey          | survey                   |
| Survey Question | surveyQuestion           |
| Tabbed folder   | tabFolder                |
| Table           | aggregationListContainer |
| Text            | richText                 |
| Time            | time                     |
| Timestamp       | timeStamp                |
| Web Link        | staticWebLink            |
| Website         | weblink                  |
| Name Picker     | name                     |
| Data Grid       | dataGrid                 |
| Rich text       | richTextArea             |

:::

### &#127356; getValid() <Badge type="warning">apItem</Badge>

- **Description**: Retrieves the validity status of an item as previously set by `setValid()`. This method is crucial
  for form validations.
- **Example**:
  ```javascript
  var isValid = item.getValid();
  console.log(isValid); // Outputs true or false based on validity.
  ```

### &#127356; getValue()` <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Returns the current value of an item. The type of the returned value depends on the item's data
  type (e.g., String, Number, Boolean, Date, Object).
- **Example**:
  ```javascript
  var value = item.getValue();
  console.log(value); // Outputs the item's value, format depends on the item type.
  ```

Here are some examples of what is returned:

- **String** - check and radio list objects return a delimited list with _#_ as the delimiter
- **Number** - number, currency,
- **Boolean, Date** - date, timestamp, time
- **Object** - attachment

### &#127356; getVisible() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Determines whether an item is visible on the form. It returns `true` if visible, `false` if hidden by
  a rule, JavaScript, or if its parent item is hidden.
- **Example**:
  ```javascript
  var isVisible = item.getVisible();
  console.log(isVisible); // true or false
  ```
  

### &#127356; isMissing() <Badge type="warning">apItem</Badge>
- **Description**: Returns true if this item is required and it has no value.

### &#127356; isRequired() <Badge type="warning">apItem</Badge>
- **Description**: Returns true if the item is required, otherwise false.

### &#127356; isValid() <Badge type="warning">apItem</Badge>
- **Description**: Returns true if the data is valid. Returns false if the data is invalid.

### &#127356; removeClasses(classes) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Removes one or more custom CSS class names from an item. The `classes` parameter can be a single
  class name, multiple class names separated by spaces, or an Array of class names.
- **Example**:
  ```javascript
  item.removeClasses("emphasized");
  // This will remove the "emphasized" class from the item.
  ```

### &#127356; setActive(active) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Sets whether an item is active or read-only. An item made inactive by a rule or stage cannot be made
  active with this method.
- **Example**:
  ```javascript
  item.setActive(false);
  // This will make the item read-only.
  ```

### &#127356; setDisplayValue(pValue) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Takes a string or number in `pValue`. This method sets the value being displayed. If the user is
  editing, then it will update the value they are trying to enter. If the user is not editing, then it will be the same
  as `setValue()`. This method works on direct input items such as single line, multi line, number, currency, email and
  website. This method is applicable to direct input
  items like single line, multi-line, number, currency, email, and website fields.
- **Example**:
  ```javascript
  item.setDisplayValue("John Doe");
  // Sets the display value of an item to "John Doe".
  ```

### &#127356; setFocus() <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Causes the item to receive focus, making it the active element on the page. This method only works if
  the item can receive focus, is visible, and is not read-only.
- **Example**:
  ```javascript
  item.setFocus();
  // The item will gain focus, allowing the user to start typing or interacting with it directly.
  ```

### &#127356; setHintText(pValue) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Sets the hint text for an item, which is displayed as hover text over input fields. Providing an
  empty string will remove any existing hint text.
- **Example**:
  ```javascript
  item.setHintText("Please enter your full name");
  // Sets the hover hint text for the item to guide the user on what to input.
  ```

### &#127356; setHoverText(pValue) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Sets the hover text for an item, providing users with helpful information when they hover over the
  item. An empty string removes the hover text.
- **Example**:
  ```javascript
  item.setHoverText("This field is for your email address");
  // Sets hover text for the item, offering additional guidance or information.
  ```

### &#127356; setRequired(required) <Badge type="warning">apItem</Badge>

- **Description**: Overrides the item's default requirement state. Setting this to `true` makes the item's data
  required, preventing form submission if the item is not filled. Setting it to `false` clears any override, returning
  it to its original state.
- **Example**:
  ```javascript
  item.setRequired(true);
  // Now, the form cannot be submitted unless this item is filled out.
  ```

### &#127356; setRows(pValue) <Badge type="tip">item</Badge>

- **Description**: Adjusts the number of rows displayed by a text area item. This is useful for ensuring that the text
  area size accommodates the expected length of user input.
  ::: tip
  It is recommended not to exceed 40 rows for usability reasons.
  :::

- **Example**:
  ```javascript
  item.setRows(5);
  // Sets the text area item to display 5 rows.
  ```

### &#127356; setPlaceholderText(pValue) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: This method updates the placeholder text in input items, which is the grayed-out text inside the
  input box before any information is entered by the user.
- **Example**:
  ```javascript
  item.setPlaceholderText("Enter your name");
  // Sets the placeholder text to "Enter your name".
  ```

### &#127356; setStartLabel(pValue) <Badge type="tip">item</Badge>

- **Description**: Sets the label displayed at the beginning of a numeric or choice slider, typically representing the
  minimum value or start of a range.
- **Example**:
  ```javascript
  item.setStartLabel("Low");
  // Sets the start label of a slider to "Low".
  ```

### &#127356; setStopLabel(pValue) <Badge type="tip">item</Badge>

- **Description**: Updates the label displayed at the end of a numeric or choice slider, usually indicating the maximum
  value or end of a range.
- **Example**:
  ```javascript
  item.setStopLabel("High");
  // Sets the stop label of a slider to "High".
  ```

### &#127356; setStyle(pValue) <Badge type="tip">item</Badge>

- **Description**: Configures the display style for date and time input fields. Valid values for dates
  include `numeric`,
  `short`, `medium`, `long`, and `full`. For time, valid options are `numeric`, `short`, and `medium`.
- **Example**:
  ```javascript
  item.setStyle("medium");
  // Sets the date or time display style to "medium".
  ```

### &#127356; setTitle(pValue) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Assigns text to be used as the title for field items. This text is typically displayed above the
  input field or item as a label.
- **Example**:
  ```javascript
  item.setTitle("Email Address");
  // Sets the title of an item to "Email Address".
  ```

### &#127356; setValid(valid, msg) <Badge type="warning">apItem</Badge>

- **Description**: Overrides the current validity state of data in an item. Setting `valid` to `false` marks the data as
  invalid and can prevent form submission, with an optional custom error message.
- **Example**:
  ```javascript
  item.setValid(false, "This field is required.");
  // Marks the item data as invalid and provides a custom error message.
  ```

### &#127356; setValue(pValue) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>`

- **Description**: Updates the value of an item based on the Business Object Attribute's type. It's important to provide
  data in the correct type, although some type conversion is handled automatically (e.g., Number to String).
- **Example**:
  ```javascript
  item.setValue("John Doe");
  // Sets the item's value to "John Doe".
  ```

Here are the merged sections as per your example:

### &#127356; setVisible(visible) <Badge type="tip">item</Badge><Badge type="warning">apItem</Badge>

- **Description**: Controls the visibility of an item on your form. It's useful for showing or hiding elements based on
  certain conditions. `setVisible(visible)` where `visible` is a boolean indicating whether the item should be
  visible (`true`) or hidden (`false`). Note that if an item is hidden by a rule, stage, or because its parent item is
  hidden, you cannot make it visible using this method.
- **Example**:
  ```javascript
  item.setVisible(true); // Makes the item visible
  item.setVisible(false); // Hides the item
  ```

### &#127356; validate() <Badge type="warning">apItem</Badge>

- **Description**: Triggers the validation process for a data item. Use this method to manually initiate the validation
  rules applied to the item, ensuring the data entered by the user meets the required criteria before
  proceeding. `validate()` takes no parameters.
- **Example**:
  ```javascript
  item.validate(); // Triggers validation for the item
  ```

### &#127356; getColumnHeaders() <Badge type="tip">item</Badge>

- **Description**: Retrieves the current configuration of column headers for a table, including each column's ID, title,
  and width. This can be useful for dynamically adjusting table headers based on certain
  conditions. `getColumnHeaders()` returns a JSON object with the details of each column header in a table.
- **Example**:
  ```javascript
  var headers = item.getColumnHeaders();
  for(var h in headers) {
    console.log("ID=" + headers[h].id + ", Title=" + headers[h].title + ", Width=" + headers[h].width);
  }
  ```

### &#127356; setColumnHeaders(headers) <Badge type="tip">item</Badge>

- **Description**: Allows you to dynamically set or update the column headers of a table. This method is particularly
  useful for changing the language of column headers or adjusting their presentation based on user
  input. `setColumnHeaders(headers)` where `headers` is a JSON object containing the ID, title, and width for each
  column.
- **Example**:
  ```javascript
  var headers = [
    {id: "F_Currency1", title: "Currency", width: 20},
    {id: "F_Date1", title: "Date"}
  ];
  item.setColumnHeaders(headers);
  ```
  
