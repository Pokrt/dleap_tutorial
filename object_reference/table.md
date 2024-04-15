# &#127358; Table
The Table object represents a collection of items in a tabular format on a Page or an AppPage.

##  Methods

### 🅼 getSelection() <Badge type="tip">item</Badge>`

- **Description**: Returns the Business Object of the selected row or null if there is no selection.

### 🅼 setSelection(BO) <Badge type="tip">item</Badge>

- **Description**: Selects the last Business Object in the table.
- **Example**:
  ```javascript
  var lastIndex = item.getBOAttr().getLength()-1;
  var lastRow = item.getBOAttr().get(lastIndex);
  item.setSelection(lastRow);
  // Selects the last row in the table.
  ```

### 🅼 showAdd(show) <Badge type="tip">item</Badge>

- **Description**: Controls the visibility of the Add button on the interface. If `show` is true, then the Add button is
  made visible. If false, the Add button is hidden.

### 🅼 showEdit(show) <Badge type="tip">item</Badge>

- **Description**: Controls the visibility of the Edit button on the interface. If `show` is true, then the Edit button
  is made visible. If false, the Edit button is hidden.

### 🅼 showRemove(show) <Badge type="tip">item</Badge>

- **Description**: Controls the visibility of the Remove button on the interface. If `show` is true, then the Remove
  button is made visible. If false, the Remove button is hidden.

<!--@include: ./common/functions.md -->

<!--@include: ./common/event_objects.md -->

## Table Events

### 🅴 onAdd

**Event Name:** `onAdd`

**Description:** This event is called after an entry is added to the table. The newly added item data is available from
the variable `itemBO`.

**Example:**

```javascript
var curValue = BO.F_Total.getValue();
curValue += itemBO.F_Price.getValue();
BO.F_Total.setValue(curValue);
```

### 🅴 onEdit

**Event Name:** `onEdit`

**Description:** Called after an existing row is edited by the user. The item that was edited is available from the
variable `itemBO`.

### 🅴 onRemove

**Event Name:** `onRemove`

**Description:** Called after a row is deleted from the table by the user. The item that was deleted is available from
the variable `itemBO`.


<!--@include: ./common/events.md -->