# &#127358; Form Object
The Form object represents the visual structure of your form. There is one object per each form, but your javascript code can work with current form only.


<TableOfContents />

## Methods

### form.addClasses(classes)

**Parameters:**

- `classes`: A single class name, multiple class names separated by spaces, or an Array of class names.

**Description:** This function adds one or more custom CSS class names to the form, allowing for dynamic styling. If any
provided class names are invalid CSS class names, the function fails by not adding any classes and returns false. This
is useful for applying styling conditions dynamically based on the form's state or user interactions.

**Example:**

```javascript
form.addClasses("emphasized error");
```

### form.backwardPage()

**Parameters:** None.

**Description:** Moves the form's view back to the previous page in its navigation order. If the form is already at the
first page, this function will not perform any action. This can be particularly useful for creating navigation buttons
within multi-page forms.

**Example:**

```javascript
// Attach this to a button's onClick event to create a "Go Back" button.
form.backwardPage();
```

### form.connectEvent(eventName, callbackFunction)

**Parameters:**

- `eventName`: The name of the event to connect to.
- `callbackFunction`: The function that will be called when the event occurs.

**Description:** Connects a custom function as an event handler to a specific event on the form. This method is ideal
for adding dynamic behavior or integrating with external JavaScript files. It returns a handle object, which can be used
to disconnect the event later. This approach ensures that form behavior can be customized and controlled
programmatically.

**Example:**

```javascript
var hndl = form.connectEvent('onLoad', function () {
    if (form.getBO().F_CurrentUser) {
        form.getBO().F_CurrentUser.setValue(app.getCurrentUser());
    }
});
```

### form.disconnectEvent(eventHandle)

**Parameters:**

- `eventHandle`: The event handle object returned by a `form.connectEvent` call.

**Description:** Disconnects the event handler specified by the passed-in event handle object that was returned by a
form.connectEvent call.

To avoid duplicate event handlers being connected, connect to events from within the application `onStart` or form `onLoad`
events. If you connect to an event outside of these two events, you should explicitly disconnect from the event using
the disconnectEvent method.
**Example:**

```javascript
// Assuming hndl is the handle returned by form.connectEvent
form.disconnectEvent(hndl);
```

### form.forwardPage()

**Parameters:** None.

**Description:** Moves the form view to the next page in its navigation order. If the form is already on the last page,
this function will have no effect. This is useful for creating multi-page forms and guiding users through a step-by-step
process.

**Example:**

```javascript
// Attach this to a button's onClick event to create a "Next Page" navigation button.
form.forwardPage();
```

### form.getApp()

**Parameters:** None.

**Description:** Retrieves the application object, typically referred to as `app`. This function is not commonly used
since the `app` variable is usually directly accessible within the form's scope.

**Example:**

```javascript
// This example is theoretical, as direct usage is rare.
var appObject = form.getApp();
```

### form.getBO()

**Parameters:** None.

**Description:** Returns the object containing the Business Object (BO) data for the form. This is especially useful for
accessing and manipulating data bound to the form, often used during the application's `onStart` event.

**Example:**

```javascript
var myForm = app.getForm('F_Form1');
var formBO = myForm.getBO();
formBO.F_SingleLine.setValue('setting the value using code!');
```

### form.getClasses()

**Parameters:** None.

**Description:** Returns an array of custom CSS class names currently applied to the form. This can be useful for
debugging purposes or dynamically adjusting the form's styling.

**Example:**

```javascript
var currentClasses = form.getClasses();
```

### form.getCurrentPage()

**Parameters:** None.

**Description:** Retrieves the currently displayed page of the form. If no page is shown (which is rare), `null` is
returned. This function can be useful for conditionally modifying content based on the current page.

**Example:**

```javascript
var pageShown = form.getCurrentPage();
if (pageShown === 'F_Page1') {
    pageShown.F_Text.setContent('Changing the text of this text item when this page is shown.');
}
```

### form.getId()

**Parameters:** None.

**Description:** Returns the unique identifier of the form within the application, such as `F_Form1`. This can be useful
for referencing the form programmatically in scripts.

**Example:**

```javascript
var formId = form.getId();
```

### form.getPageIds()

**Parameters:** None.

**Description:** Returns an array of the page IDs for all the pages within the form. This is useful for operations that
need to iterate over or manipulate multiple pages in a form programmatically.

**Example:**

```javascript
var pageIds = form.getPageIds();
```

### form.getPage(pageId)

**Parameters:**

- `pageId`: The unique identifier for the page you want to retrieve.

**Description:** Retrieves the page object for a specified page within the form. If the `pageId` is invalid, it returns
null. This function is useful for accessing and manipulating properties of a specific page programmatically.

**Example:**

```javascript
var thePage = form.getPage('F_Page1');
if (thePage !== null) {
    form.selectPage('F_Page1');
}
```

::: tip Note
Remember to check if the page exists by comparing `thePage` to `null` before attempting to use it.
:::

### form.getServiceConfigurationIds()

**Parameters:** None.

**Description:** Returns an array containing all the IDs for services that are mapped in the form. This can be useful
for debugging or when you need to programmatically interact with one or more services configured in your form.

**Example:**

```javascript
var serviceConfigs = form.getServiceConfigurationIds();
```

### form.getServiceConfiguration(serviceId)

**Parameters:**

- `serviceId`: The ID of the service configuration you want to access.

**Description:** Retrieves the service object for a given service ID. This allows for programmatic interaction with
services, such as invoking a service call from JavaScript.

**Example:**

```javascript
var service = form.getServiceConfiguration('SC_ServiceConfig');
service.callService();
```

### form.getStageActions()

**Parameters:** None.

**Description:** Returns an array of all action buttons for the current stage of the form. This includes visible and
hidden action buttons, providing a way to programmatically trigger specific actions.

**Example:**

```javascript
var actions = form.getStageActions();
for (var i = 0; i < actions.length; i++) {
    if (get(actions, i).getId() === 'S_Submit') {
        get(actions, i).activate();
        break;
    }
}
```

### form.getType()

**Parameters:** None.

**Description:** Returns a string that identifies the type of the object. In this context, it will return a value
indicating that the object is a form.

**Example:**

```javascript
var formType = form.getType();
```

### form.removeClasses(classes)

**Parameters:**

- `classes`: A single class name, multiple class names separated by spaces, or an Array of class names to be removed
  from the form.

**Description:** Removes one or more custom CSS class names from the form, allowing for dynamic updates to the form's
styling.

**Example:**

```javascript
form.removeClasses("emphasized");
```

### form.removePageFromNavigation(pageId)

**Parameters:**

- `pageId`: The ID of the page you want to remove from the form's navigation.

**Description:** Removes a specified page from the form's navigation sequence. After removal, the page will not be
accessible through next or previous navigation buttons, nor can it be selected programmatically.

**Example:**

```javascript
if (BO.F_Check.getValue()) {
    form.removePageFromNavigation('P_Page2');
}
```


### form.restorePageNavigation(pageId)

**Parameters:**

- `pageId`: The ID of the page you want to restore to the form's navigation.

**Description:** This function restores a previously removed page back into the form's navigation list. It's useful when
you need to conditionally include a page in the form's navigation flow, based on user actions or other criteria.

**Example:**

```javascript
if (!BO.F_Check.getValue()) {
    form.restorePageNavigation('P_Page2');
}
```


### form.selectPage(pageId)

**Parameters:**

- `pageId`: The ID of the page you want to navigate to.

**Description:** Switches the form's view to the specified page. This function is handy for creating a custom navigation
flow within a form. Note that if the page has been removed from navigation (through Stages, Rules, or JavaScript), it
cannot be selected with this method.

**Example:**

```javascript
var thePage = form.getPage('F_Page1');
if (thePage !== null) {
    form.selectPage('F_Page1');
}
```

::: tip Note
Always check that the page exists (i.e., `thePage !== null`) before attempting to navigate to it to avoid errors.
:::

### `form.sendData(data)

**Parameters:**

- `data`: The string of data you want to send. This could be anything from a simple message to a complex URL, depending
  on what the receiving portlet is designed to handle.

**Description:** This function is specifically for use within IBM WebSphere Portal. When a form is hosted in a portlet,
using `sendData` allows you to send a string to any portlet that subscribes to this data. The actual use of this data is
determined by the subscribing portlet's functionality. This feature enables dynamic interaction between different parts
of a portal page, allowing for a more integrated and responsive user experience.

**Example:**

```javascript
form.sendData(BO.F_ServerURL.getValue() + "/apps/secure/org/app/b5806ef1-b784-4c85-8844-653cd4064201/launch/index.html?form=F_FormA");
```

## Objects Available in Form Event Call

### Application object (GUI type)

- Variable: `app`
- Description: Contains functions for accessing global general information
- Example: `app.isSingleFormView();`

### Form object (GUI type)

- Variable: `form`
- Description: For accessing the pages and controlling page navigation
- Example: `form.getPage('P_Page1');`

### Business Object object (DATA type)

- Variable: `BO`
- Description: Top level data object for the form.
- Example: `BO.F_Username.getValue();`

## Events

---

### afterSave

**Event Name:** `afterSave`

**Parameters:** None.

**Description:** This event is triggered after the form has been submitted or saved to the server. Since the submission
process has already completed, any changes made to the form during this event are not retained. This is a good place to
perform actions like displaying confirmation messages or cleaning up resources.

**Example:**

```javascript
    alert("Thank you for submitting " + app.getCurrentUser());

```


---

### beforeSave

**Event Name:** `beforeSave`

**Parameters:** None.

**Description:** This event occurs just before the form data is submitted to the server. It's an opportunity to make
final adjustments to the form data, such as data validation or formatting, ensuring that the data saved is exactly as
intended.

**Example:**

```javascript
    BO.F_tag.setValue(BO.F_tag.getValue().toLowerCase());
```


---

### onDataReceived

**Event Name:** `onDataReceived`

**Parameters:** `pData` String containing arbitrary data passed in by a portal

**Description:** This event is specific to forms hosted inside IBM® WebSphere® Portal and is triggered when the form
receives data from another portlet. The received data can be used to update the form dynamically.

**Example:**

```javascript
    form.getPage('P_Page1').F_Info.setContent(pData);
```

---

### onLoad

**Event Name:** `onLoad`

**Parameters:** None.

**Description:** Called after the form's data Business Object (BO) is attached and its values are loaded into the form's
interface. This applies to both new and existing forms. For new forms, this event follows the `onNew` event. It's a key
event for initializing form data and setting up the form based on the loaded data.

**Example:**

```javascript
    BO.F_Date.setValue(new Date());

```

---

### onNew

**Event Name:** `onNew`

**Parameters:** None.

**Description:** This event is triggered when a new, blank form is created. It occurs after the form's default values
are loaded but before the user interacts with the form. This is an ideal place to pre-populate fields or perform initial
setup tasks.

**Example:**

```javascript
    BO.F_User.setValue(app.getCurrentUser());

```

---

### validateButtonPressed

**Event Name:** `validateButtonPressed`

**Parameters:** `pActionId` (ID of the pressed action button).

**Description:** Triggered after any stage action button on the form is pressed. This event allows for custom validation
or confirmation before proceeding with the action determined by the button press. Returning `false` from this event
cancels the action.

**Example:**

```javascript
if (pActionId === 'S_Cancel') {
    return confirm('Are you sure you want to cancel?');
}
return true;

```