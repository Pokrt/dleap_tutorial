# Page

## Page Object Methods

### page.\<itemId\>

**Description:** Provides convenient direct access to all items on the page, including those inside Sections and Tab
Folders.

**Example:**

```javascript
page.F_NextButton.setVisible(false);
```

### page.addClasses(classes)

**Parameters:** `classes` - A single class name, multiple class names separated by spaces, or an Array of class names.

**Description:** Adds a list of custom class names to the page for dynamic CSS styling. If any of the given class names
are invalid CSS class names, then no classes are added, and `false` is returned.

**Example:**

```javascript
page.addClasses("emphasized error");
```

### page.connectEvent(eventName, callbackFunction)

**Parameters:**

- `eventName` - The name of the event to connect.
- `callbackFunction` - The function to execute when the event occurs.

**Description:** Connects a function to an event on the page. Useful for hooking behavior into the page dynamically.
Returns a handle object that represents the connection, which can be used for disconnection.

**Example:**

```javascript
var eventHdl = page.connectEvent("<some event>", function (pSuccess, pErrorObj) {
    if (pSuccess) {
        // Do something when the event is triggered
    }
});
```

### page.disconnectEvent(eventHandle)

**Parameters:** `eventHandle` - The event handle object returned by a previous `page.connectEvent` call.

**Description:** Disconnects the event handler specified by the passed-in event handle. This is useful to avoid
duplicate event handlers being connected.

**Example:**

```javascript
page.disconnectEvent(eventHdl);
```

### page.getBO()

**Parameters:** None.

**Description:** Returns the object that contains the Business Object data for the entire form. This is useful for
manipulating form data programmatically.

**Example:**

```javascript
var theBO = page.getBO();
theBO.F_SingleLine.setValue('new Value');
```

### page.getChildren()

**Description:** Returns a list object that provides access to all direct children items of this page. Items within a
Section on the page are not included in the list, but the Section itself is. The list object includes `getLength()`
and `get(index)` functions for accessing the objects within the list.

**Example:**

```javascript
var list = page.getChildren();
for (var i = 0; i < list.getLength(); i++) {
    if (list.get(i).getType() === 'button') {
        list.get(i).setVisible(false);
    }
}
```

### page.getClasses()

**Description:** Returns an array of custom class names currently applied to the page.

**Example:** *This function does not have a direct usage example, as it simply returns an array of classes.*

### page.getForm()

**Description:** Returns the form object to which this page belongs.

**Example:** *Specific usage would depend on further interactions with the form object.*

### page.getId()

**Description:** Returns the unique ID, within the application, of this page, such as "P_Page1".

**Example:** *This function's output would typically be used in logging or dynamic referencing within application
logic.*

### page.getType()

**Description:** Returns a string identifying the object type, which is "page" for page objects.

**Example:** *This method's return value could be used in conditional logic to confirm an object's type.*

### page.getVisibility()

**Description:** Returns `true` if the page is currently shown, and `false` if it is hidden.

**Example:** *This could be used in conditional logic to alter UI elements based on page visibility.*

### page.removeClasses(classes)

**Description:** Removes a list of custom class names from the page. The `classes` parameter can be a single class name,
multiple class names separated by spaces, or an array of class names.

**Example:**

```javascript
page.removeClasses("emphasized");
```

## Objects Available in the Page Event Context

Here's your provided text reformatted into the requested structure:

### Application object (GUI type)

- **Variable**: `app`
- **Description**: Contains functions for accessing global general information.
- **Example**:

```javascript
app.isSingleFormView();
```

### Form object (GUI type)

- **Variable**: `form`
- **Description**: For accessing the pages and controlling page navigation.
- **Example**:

```javascript
form.getPage('P_Page1');
```

### Page object (GUI type)

- **Variable**: `page`
- **Description**: For accessing the Page and the items on it.
- **Example**:

```javascript
page.F_Text.setContent('This a Label');
```

### Business Object object (DATA type)

- **Variable**: `BO`
- **Description**: Top-level data object for the form.
- **Example**:

```javascript
BO.F_Username.getValue();
```

## Page Events

### onHide

**Event Name:** `onHide`

**Description:** Called when the page is hidden. This is usually a result of page navigation.

### onNavigateAway

**Event Name:** `onNavigateAway`

**Description:** Called as the page is about to be switched away from this one. A `pNavOptions` variable is passed to
this event that contains three optional properties:

- `allowSwitch` - value can be true or false, if set to false the page Navigation will be cancelled.
- `doValidation` - value can be true or false, default is true, if set to false page validation will be skipped.
- `issues` - array of user-provided issues that will be added to validation dialog.

**Example:**
Cancel the page switch if a checkbox is not checked and display "Click I Agree to the terms of service
checkbox" in Validation Error dialog.

```javascript
if (!BO.F_Agree1.getValue()) {
    pNavOptions.allowSwitch = false;
    pNavOptions.issues.push('Click I Agree to the terms of service checkbox');
}
```

### onRemoveFromNavigation

**Event Name:** `onRemoveFromNavigation`

**Description:** Called when this page is removed from navigation by calling the `form.removePageFromNavigation()`
method for this page.

### onRestoreFromNavigation

**Event Name:** `onRestoreFromNavigation`

**Description:** Called when a page is restored to navigation by calling the `form.restorePageNavigation()` method for
this page.

### onShow

**Event Name:** `onShow`

**Description:** Called every time the page is shown. This includes when the form is first displayed and when the user
navigates to the page. A good location to update any display items.

::: tip Note
When a form is first opened, this event is only called on the current displayed page.
:::