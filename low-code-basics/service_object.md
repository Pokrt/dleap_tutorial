# Service Configuration Object
This object represents a mapped service in the form and is retrieved using `form.getServiceConfiguration()`.

### Executing the Service

**Function Name:** `service.callService()`

**Parameters:** None.

**Description:** Executes the service. This function initiates the execution of a predefined service, triggering any associated operations or workflows defined within the service logic.

**Example:**

```javascript
service.callService();
```

---

### Connecting to an Event

**Function Name:** `service.connectEvent(eventName, callbackFunction)`

**Parameters:** 
- `eventName`: The name of the event to connect to. Currently, the only supported event is `onCallFinished`.
- `callbackFunction`: A function to be called when the event is triggered. It receives two parameters:
  - `pSuccess`: Indicates whether the service call succeeded.
  - `pErrorObj`: A JSON object (`{code: '', message: '', handled: ''}`) containing details about any error that occurred. If the error is being handled by JavaScript, setting `pErrorObj.handled = true` will suppress the error dialog.

**Description:** Connects a callback function to a specific service event, allowing for custom logic to be executed in response to service lifecycle events. This is particularly useful for handling post-service execution logic, such as processing results or managing errors. It's recommended to register these events in the Application's `onStart` event to ensure they are only registered once.

**Example:**

```javascript
var form = app.getForm('F_Form1');
var serviceConfig = form.getServiceConfiguration("SC_ServiceConfig");
serviceConfig.connectEvent("onCallFinished", function(pSuccess, pErrorObj) {
  if (pSuccess) {
    // do something when service is done
  } else {    
    // do something with the error
    form.getBO().F_Error.setValue(pErrorObj.code + ": " + pErrorObj.message); 
    pErrorObj.handled = true; // suppress error dialog
  }
});
```

---

### Disconnecting an Event

**Function Name:** `service.disconnectEvent(eventHandle)`

**Parameters:** 
- `eventHandle`: The event handler object returned by a previous call to `service.connectEvent`. This is used to identify the specific event connection to disconnect.

**Description:** Disconnects a previously connected event handler, preventing the associated callback function from being executed in response to the event. This is useful for cleanup purposes or to avoid potential issues with duplicate event handlers. To ensure proper management of event connections, connect to events within the application's `onStart` or form's `onLoad` events, and explicitly disconnect when the event handling is no longer needed.

**Example:**

```javascript
var form = app.getForm('F_Form1');
var serviceConfig = form.getServiceConfiguration("SC_ServiceConfig");
var serviceHdl = serviceConfig.connectEvent("onCallFinished", function(pSuccess, pErrorObj) {
  if (pSuccess) {
    // do something when service is done
  }
  serviceConfig.disconnectEvent(serviceHdl);
});
```