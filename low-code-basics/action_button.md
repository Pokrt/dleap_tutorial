# Action Button

Represents an action button that is retrieved by calling `form.getStageActions()`.

### Activating an Action

**Function Name:** `action.activate()`

**Parameters:** None.

**Description:** Triggers this button, which cancels, submit, or save the form. If a button is hidden by a Rule, you can
try and fire it. However, the server may reject the submission.

**Example:**

```javascript
var actionButtons = form.getStageActions();
for (var i = 0; i < actionButtons.length; i++) {
    if (get(actionButtons, i).getId() === 'S_Cancel')
        get(actionButtons, i).activate();
}
```

::: tip Note
If a button is hidden by a Rule, attempting to activate it might result in a server rejection.
:::

---

### Adding Classes to an Action

**Function Name:** `action.addClasses(classes)`

**Parameters:** `classes` - A single class name, multiple class names separated by spaces, or an Array of class names.

**Description:** Adds a list of custom class names to an action for dynamic CSS styling. If any of the given class names
are invalid CSS class names, then no classes are added and `false` is returned.

**Example:**

```javascript
action.addClasses("emphasized error");
```

---

### Getting Action Type

**Function Name:** `action.getActionType()`

**Parameters:** None.

**Description:** Returns a string that identifies the type of the button. Values are "Cancel", "Submit", and "Save".

---

### Checking if an Action is Active

**Function Name:** `action.getActive()`

**Parameters:** None.

**Description:** Returns `true` if this button is active, and `false` if it is disabled.

---

### Getting Action Classes

**Function Name:** `action.getClasses()`

**Parameters:** None.

**Description:** Returns an Array of custom class names currently applied to an action.

---

### Getting Action ID

**Function Name:** `action.getId()`

**Parameters:** None.

**Description:** Returns the unique ID (within the application) of this action button, e.g., "S_Submit".

---

### Getting Action Title

**Function Name:** `action.getTitle()`

**Parameters:** None.

**Description:** Returns the user-defined title of this button.

---

### Checking if an Action is Visible

**Function Name:** `action.getVisible()`

**Parameters:** None.

**Description:** Returns `true` if this button is visible, or `false` if it is hidden by a rule or JavaScript.

### Removing Classes from an Action

**Function Name:** `action.removeClasses(classes)`

**Parameters:** `classes` - A single class name, multiple class names separated by spaces, or an Array of class names.

**Description:** Removes a list of custom class names from an action for dynamic CSS styling.

**Example:**

```javascript
action.removeClasses("emphasized");
```

---

### Setting an Action's Active State

**Function Name:** `action.setActive(active)`

**Parameters:** `active` - A boolean value where `true` makes the button active and `false` disables it.

**Description:** Modifies the active state of the button. If `active` is `true`, then the button is made active.
If `false`, the button is disabled.

**Example:**

```javascript
action.setActive(true);
```

---

### Focusing on an Action

**Function Name:** `action.setFocus()`

**Parameters:** None.

**Description:** Causes this button to receive focus, if possible.

**Example:**

```javascript
action.setFocus();
```

---

### Setting an Action's Title

**Function Name:** `action.setTitle(title)`

**Parameters:** `title` - The new title for the button.

**Description:** Sets the title for the button.

**Example:**

```javascript
action.setTitle("New Button Title");
```

---

### Setting an Action's Visibility

**Function Name:** `action.setVisible(visible)`

**Parameters:** `visible` - A boolean indicating whether the action should be visible.

**Description:** Sets whether this action is visible. Note that if this item is made invisible by a rule, then you
cannot unhide it by calling this function.

**Example:**

```javascript
action.setVisible(true);
```

::: tip Note
If this item is made invisible by a rule, then you cannot unhide it by calling this function.
:::

