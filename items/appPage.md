# App Page

## App Page Object

### Accessing Items on the App Page

**Function Name:** `appPage.<itemId>`

**Description:** Provides convenient direct access to all items on the page, including those inside Sections and Tab
Folders.

**Example:**

```javascript
appPage.F_NextButton.setVisible(false);
```

### Adding Classes to the App Page

**Function Name:** `appPage.addClasses(classes)`

**Parameters:** `classes` - A single class name, multiple class names separated by spaces, or an Array of class names.

**Description:** Adds a list of custom class names to the page for dynamic CSS styling. If any of the given class names
are invalid CSS class names, then no classes are added, and `false` is returned.

**Example:**

```javascript
appPage.addClasses("emphasized error");
```

### Connecting to an Event on the App Page

**Function Name:** `appPage.connectEvent(eventName, callbackFunction)`

**Parameters:**

- `eventName` - The name of the event to connect.
- `callbackFunction` - The function to execute when the event occurs.

**Description:** Connects a function to an event on the page. Useful for hooking behavior into the page dynamically.
Returns a handle object that represents the connection, which can be used for disconnection.

**Example:**

```javascript
var eventHdl = appPage.connectEvent("<some event>", function (pSuccess, pErrorObj) {
    if (pSuccess) {
        //do something when service is done
    }
    appPage.disconnectEvent(eventHndl);
});
```

### Disconnecting an Event Handler

**Function Name:** `appPage.disconnectEvent(eventHandle)`

**Parameters:** `eventHandle` - The event handle object returned by a previous `appPage.connectEvent` call.

**Description:** Disconnects the event handler specified by the passed-in event handle. This is useful to avoid
duplicate event handlers being connected.

**Example:**

```javascript
var eventHdl = appPage.connectEvent("<some event>", function (pSuccess, pErrorObj) {
    if (pSuccess) {
        //do something when service is done
    }
    appPage.disconnectEvent(eventHndl);
});
```

### Getting Direct Children of the App Page

**Function Name:** `appPage.getChildren()`

**Description:** Returns a list object that provides access to all direct children items of this page. Items within a
Section on the page are not included in the list, but the Section itself is. The list object includes `getLength()`
and `get(index)` functions for accessing the objects within the list.

**Example:**

```javascript
var list = appPage.getChildren();
for (var i = 0; i < list.getLength(); i++) {
    if (list.get(i).getType() === 'button') {
        list.get(i).setVisible(false);
    }
}
```

### Retrieving Applied Custom Classes

**Function Name:** `appPage.getClasses()`

**Description:** Returns an array of custom class names currently applied to the page.

**Example:** *This function does not have a direct usage example, as it simply returns an array of classes.*

### Getting the App Page ID

**Function Name:** `appPage.getId()`

**Description:** Returns the unique ID, within the application, of this page, such as "P_App_Page1".

**Example:** *This function's output would typically be used in logging or dynamic referencing within application
logic.*

### Retrieving Service Configuration IDs

**Function Name:** `appPage.getServiceConfigurationIds()`

**Parameters:** None.

**Description:** Returns an array of all the IDs for services that are mapped in this app page. This function is useful
for enumerating all services associated with a page, which can then be used to interact with or manipulate those
services programmatically.

**Example:**

```javascript
var serviceConfigs = appPage.getServiceConfigurationIds();
```

### Getting a Service Configuration Object

**Function Name:** `appPage.getServiceConfiguration(serviceId)`

**Parameters:**

- `serviceId`: The ID of the service configuration to retrieve.

**Description:** Retrieves the service object for a particular service ID. This function allows for direct interaction
with a specific service, such as executing the service, by providing its unique identifier.

**Example:**

```javascript
var service = appPage.getServiceConfiguration('SC_ServiceConfig');
service.callService();
```

### Identifying the Object Type

**Function Name:** `appPage.getType()`

**Description:** Returns a string identifying the object type, which is "page" for page objects.

**Example:** *This method's return value could be used in conditional logic to confirm an object's type.*

### Removing Custom Classes from the App Page

**Function Name:** `appPage.removeClasses(classes)`

**Description:** Removes a list of custom class names from the page. The `classes` parameter can be a single class name,
multiple class names separated by spaces, or an array of class names.

**Example:**

```javascript
page.removeClasses("emphasized");
```

## Object available in the App Page event context
Here's your text reformatted into the desired structure:

### **Application object (GUI type)**

- **Variable**: `app`
- **Description**: Contains functions for accessing global general information.
- **Example**:
  
```javascript
app.isSingleFormView();
```

### **App Page object (GUI type)**

- **Variable**: `appPage`
- **Description**: For accessing the items on the page.
- **Example**:

```javascript
appPage.getChildren();
```

## App Page Events
Based on your request, here's how your text would look formatted in the desired output style:

### onShow

**Event Name:** `onShow`

**Description:** Called after the app page is shown.


### onHide

**Event Name:** `onHide`

**Description:** Called after the app page is hidden.