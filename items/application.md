# Application Events and Objects

[[toc]]

## Application Objects

### Getting an Application Page Object

**Function Name:** `app.getAppPage(appPageId)`

**Parameters:**

- `appPageId`: The ID of the app page you want to retrieve.

**Description:** This function returns the user interface app page object for the specified `appPageId`. An app page
object can be used to manipulate or interact with the page in the application's UI programmatically.

**Example:**

```javascript
var myAppPage = app.getAppPage("AP_Welcome");
```

### Getting an Application Page URL

**Function Name:** `app.getAppPageURL(appPageId, appUid)`

**Parameters:**

- `appPageId`: The ID of the app page you want to navigate to.
- `appUid` (optional): The UID of the application. If not provided, it defaults to the current application's UID.

**Description:** Returns the URL for directly navigating to the specified app page. This is useful when you want to
create links within your application that lead to other parts of the app.

**Example:**

```javascript
var pageUrl = app.getAppPageURL("AP_Settings");
```

::: tip Note
The `appUid` parameter is optional. If you do not supply this parameter, it will automatically use the UID of the
current scope's object.
:::

### Getting the Application URL

**Function Name:** `app.getAppURL()`

**Parameters:** None.

**Description:** Retrieves the URL for navigating directly to the application. This URL leads to the "Home Page" defined
in the application settings.

**Example:**

```javascript
var appUrl = app.getAppURL();
```

### Getting the Charts Page URL

**Function Name:** `app.getChartsURL(formId, appUid)`

**Parameters:**

- `formId` (optional): The UID of the form whose charts page you want to access.
- `appUid` (optional): The UID of the application.

**Description:** This function provides the URL to navigate directly to the charts page of a specific form within the
application. It's useful for creating direct links to data visualizations.

**Example:**

```javascript
var chartsUrl = app.getChartsURL(form.getId(), app.getUID());
```

::: tip Note
All parameters are optional. If you do not provide them, the function will default to the current scope's object.
:::

### Getting the Current User

**Function Name:** `app.getCurrentUser()`

**Parameters:** None.

**Description:** Returns the identifying name of the currently logged-in user. This is determined by the property
defined in the application's configuration and might be something like a user ID, email, or display name. If no user is
logged in (i.e., anonymous access), it returns "Anonymous Guest User".

**Example:**

```javascript
// Set the value of a single line field to the current user's name
BO.F_SingleLine.setValue(app.getCurrentUser());
```

::: tip Note
This function is particularly useful for personalizing the user experience by displaying the user's name or making
decisions based on the user identity.
:::

### Getting the Current User's Email

**Function Name:** `app.getCurrentUserEmail()`

**Parameters:** None.

**Description:** Retrieves the email address of the currently logged-in user. This function is useful for personalizing
user interactions or for use in forms and communications within the application.

**Example:**

```javascript
var userEmail = app.getCurrentUserEmail();
```

### Getting the Current User's Display Name

**Function Name:** `app.getCurrentUserDisplayName()`

**Parameters:** None.

**Description:** Returns the full display name of the currently logged-in user. This can be used for greeting users or
displaying their names on user profiles or dashboards.

**Example:**

```javascript
var userDisplayName = app.getCurrentUserDisplayName();
// Output example: "Eduardo Ramírez López"
```

### Getting Information About the Current User

**Function Name:** `app.getCurrentUserInfo()`

**Parameters:** None.

**Description:** Provides an object containing attributes of the current user, such as their ID, email, display name,
and user type. It's beneficial for detailed user management and customization.

**Example:**

```javascript
var userInfo = app.getCurrentUserInfo();
// Output example: {id: "pflorez123", email: "Pedro.Flores@example.com", displayName: "Pedro Flores", userType: "owner"}
```

::: tip Note
Not all user attributes may be available in all deployments. Unavailable attributes will return `null`.
:::

### Getting the Current User's Roles

**Function Name:** `app.getCurrentUserRoles`

**Parameters:** None.

**Description:** Fetches a comma-separated list of all roles associated with the current user. This is particularly
useful for role-based access control and permissions within the application.

**Example:**

```javascript
var userRoles = app.getCurrentUserRoles();
// Usage in setting value: item.setValue(userRoles);
```

### Getting the File Base URL

**Function Name:** `app.getFileBaseURL()`

**Parameters:** None.

**Description:** Returns the relative URL to the directory storing all files uploaded at design time, excluding images
and CSS files. This URL can be used to access these resources directly.

**Example:**

```javascript
var fileBaseUrl = app.getFileBaseURL();
```

### Getting a Form Object by ID

**Function Name:** `app.getForm(formID)`

**Parameters:**

- `formID`: The ID of the form you want to retrieve.

**Description:** Retrieves the user interface form object for the specified `formID`. It's primarily used for adding
dynamic event handlers to forms that are not currently displayed.

**Example:**

```javascript
var form = app.getForm('F_Form1');
var service = form.getServiceConfiguration('SC_ServiceConfig0');
service.connectEvent('onCallFinished', function (pSuccess) {
    alert('Call finished');
});
```

::: tip Note
If you're retrieving a form not currently shown, the returned object will have limited functionality and is best used
for event handling purposes.
:::

### Navigating Directly to a Form

**Function Name:** `app.getFormLaunchURL(formId, appUid)`

**Parameters:**

- `formId` (optional): The UID of the form you want to navigate to.
- `appUid` (optional): The UID of the application containing the form.

**Description:** This function returns the URL for navigating directly to a specific form within an application. You can
use this URL to create links that take users straight to a form, improving the navigation flow within your application.

**Example:**

```javascript
var url = app.getFormLaunchURL(); // Navigates to the form in the current scope
var urlWithFormId = app.getFormLaunchURL(form.getId()); // Uses form ID
var urlWithFormAndAppId = app.getFormLaunchURL(form.getId(), app.getUID()); // Specifies both form and application IDs
```

::: tip Note
All parameters are optional. If you do not supply a parameter, it will default to the current scope's object.
:::

### Accessing Uploaded Images

**Function Name:** `app.getImageBaseURL()`

**Parameters:** None.

**Description:** Retrieves the relative URL to the directory where all images uploaded at design time are stored. These
images are accessible as anonymous resources, meaning anyone can view them.

**Example:**

```javascript
var imageUrl = app.getImageBaseURL();
```

### Getting the Current Locale

**Function Name:** `app.getLocale()`

**Parameters:** None.

**Description:** Returns the current locale code of the application. This code follows the standard set by Tags for the
Identification of Languages (RFC 3066), and it's determined by the application settings or the current user's
preferences.

**Example:**

```javascript
var locale = app.getLocale();
```

### Acquiring the Current User's Location

**Function Name:** `app.getLocation(callbackFunction, highAccuracy)`

**Parameters:**

- `callbackFunction`: A function that is called after the location request is completed. This function receives a
  Position object if the request was successful; otherwise, it receives `null`.
- `highAccuracy`: A boolean value indicating whether to request a high-accuracy location from the browser.

**Description:** This function allows the form designer to obtain the current user's geographical location. The callback
function can then use this information to perform actions based on the user's location.

**Example:**

```javascript
var highAccuracy = true;
var myCallbackFunction = function (position) {
    if (position !== null) {
        BO.F_SingleLine1.setValue(position.coords.latitude + ", " + position.coords.longitude);
    } else {
        alert("Location request failed");
    }
};
app.getLocation(myCallbackFunction, highAccuracy);
```

::: tip Note
Refer to the [MDN documentation on the Position object](https://developer.mozilla.org/en-US/docs/Web/API/Position) for
more details on the values accessible through the `position` parameter. The `highAccuracy` option can significantly
impact battery life on mobile devices.
Visit [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy) for more
information.
:::

### Getting the Product Base URL

**Function Name:** `app.getProductBaseURL()`

**Parameters:** None.

**Description:** Returns the base URL of the Domino Leap server, including the host and context. This can be useful for
forming URLs to access application resources.

**Example:**

```javascript
var url = app.getProductBaseURL();
```

### Navigating Directly to a Record

**Function Name:** `app.getRecordURL(recordUid, formId, appUid)`

**Parameters:**

- `recordUid` (optional): The UID of the record to navigate to.
- `formId` (optional): The form ID where the record is located.
- `appUid` (optional): The application UID containing the form and record.

**Description:** Generates a URL to navigate directly to a specific record within an application. This function can
simplify the creation of links to specific data entries.

**Example:**

```javascript
var url = app.getRecordURL('d1f6eb71-9483-479c-8d47-dd30bd7e9de9');
```

::: tip Note
All parameters are optional. If not supplied, the function will use the current scope's object.
:::

### Sharing Data Across the Application

**Function Name:** `app.getSharedData()`

**Parameters:** None.

**Description:** Provides access to a JavaScript object that can be used across all custom JavaScript code on the form.
This object is ideal for sharing data or reusable functions throughout the application.

**Example:**

```javascript
app.getSharedData().titleToShow = 'Welcome Form';
app.getSharedData().addTwoValues = function (v1, v2) {
    return v1 + v2;
};
// Use the shared data and function
BO.F_SingleLine.setValue(app.getSharedData().titleToShow);
BO.F_Number.setValue(app.getSharedData().addTwoValues(5, 5));
```

### Accessing Uploaded CSS Styles

**Function Name:** `app.getStyleBaseURL()`

**Parameters:** None.

**Description:** Retrieves the relative URL to the directory where all CSS style files uploaded at design time are
stored. These files are accessible as anonymous resources.

**Example:**

```javascript
var styleUrl = app.getStyleBaseURL();
```

### Managing Warning Suppression

**Function Name:** `app.getSuppressWarning()`

**Description:** Retrieves the current setting for suppressing warnings within the application. This is useful for
controlling whether certain warning messages are shown to the user.

**Example:**

```javascript
var suppressWarning = app.getSuppressWarning();
if (suppressWarning === false) {
    app.setSuppressWarning(true);
}
```

::: tip Note
Refer to `app.setSuppressWarning` documentation for more details on how to suppress warnings.
:::

### Retrieving the Application UID

**Function Name:** `app.getUID()`

**Description:** Returns the unique identifier (UID) of the application, which can be used for creating links to other
forms or resources within the same application.

**Example:**

```javascript
page.F_StaticWebLink.setLinkValue(BO.F_ServerURL.getValue() + '/apps/secure/1/app/' + app.getUID() + '/launch/index.html?form=F_Form2');
```

### Looking Up URL Parameters

**Function Name:** `app.getUrlParameter(parm)`

**Description:** Fetches the value of a specific URL parameter. This can be used for debugging or to alter the
application's behavior based on parameters passed in the URL.

**Example:**

```javascript
var param = app.getUrlParameter('debug');
if (param === 'true') {
    alert('Shown only when debug param is present');
}
```

### Accessing All URL Parameters

**Function Name:** `app.getUrlParameters()`

**Description:** Returns an object containing all URL parameters. This allows for easy access to any parameter passed
through the URL.

**Example:**

```javascript
var params = app.getUrlParameters();
if (params.CustomWarning) {
    alert(params.CustomWarning);
}
```

### Navigating to the View Data Page

**Function Name:** `app.getViewDataURL(appUid)`

**Description:** Provides the URL to navigate directly to the View Data page of the application. This can be
particularly useful for creating links that allow users to view application data with just one click.

**Example:**

```javascript
var url = app.getViewDataURL();
var urlWithAppUid = app.getViewDataURL(app.getUID());
```

::: tip Note
The `appUid` parameter is optional. If not supplied, it defaults to the current application's UID.
:::

### Checking User Roles

**Function Name:** `app.isCurrentUserInRole(roleName)`

**Description:** Determines whether the currently logged-in user is a member of a specific role within the application.

**Example:**

```javascript
item.setValue(app.isCurrentUserInRole("Manager"));
```

::: tip Note
This function does not validate the existence of the role named `roleName`; it simply returns `false` if the role does
not exist.
:::

### Determining Form View Mode

**Function Name:** `app.isSingleFormView()`

**Description:** Checks if the current form is displayed by itself in the browser or within the context of viewing
responses.

**Example:**

```javascript
var isSingleView = app.isSingleFormView();
```

### Opening an Application

**Function Name:** `app.openApp(appUid, newTab)`

**Description:** Opens the homepage of a specified application. You can choose to open it in a new browser tab or in the
current tab.

**Example:**

```javascript
app.openApp('d1f6eb71-9483-479c-8d47-dd30bd7e9de9');
app.openApp('d1f6eb71-9483-479c-8d47-dd30bd7e9de9', true);
app.openApp(app.getUID(), false);
```

::: tip Note
If `newTab` is `true`, the application opens in a new tab. The `appUid` is optional; if not supplied, the current
application is used.
:::

### Opening an Application Page

**Function Name:** `app.openAppPage(appPageId, appUid, newTab)`

**Parameters:**

- `appPageId`: The ID of the app page to open.
- `appUid` (optional): The UID of the application. If omitted, the current application's UID is used.
- `newTab` (optional): A boolean indicating whether to open the page in a new tab. Defaults to true if not specified.

**Description:** Opens a specific app page within an application. This function allows users to navigate between
different parts of an application seamlessly.

**Example:**

```javascript
app.openAppPage('AP_Page1'); // Opens in a new tab by default
app.openAppPage('AP_Page1', true); // Explicitly opens in a new tab
app.openAppPage('AP_Page1', false); // Opens in the current tab
```

### Opening a Form

**Function Name:** `app.openForm(formId, appUid, newTab)`

**Parameters:**

- `formId`: The ID of the form to open.
- `appUid` (optional): The UID of the application containing the form. If not provided, the current application is
  assumed.
- `newTab` (optional): A boolean that determines whether the form should open in a new browser tab. The default is true.

**Description:** Enables users to directly open a form within an application. This is particularly useful for
applications with multiple forms, enhancing user navigation and experience.

**Example:**

```javascript
app.openForm('F_Form1'); // Opens in a new tab by default
app.openForm('F_Form1', true); // Explicitly opens in a new tab
app.openForm('F_Form1', false); // Opens in the current tab
```

### Opening a Record

**Function Name:** `app.openRecord(recordUid, formId, appUid, newTab)`

**Parameters:**

- `recordUid`: The UID of the record to open.
- `formId` (optional): The ID of the form containing the record. If omitted, the current form is assumed.
- `appUid` (optional): The UID of the application. Defaults to the current application if not specified.
- `newTab` (optional): Whether to open the record in a new tab. Defaults to true.

**Description:** Facilitates direct access to a specific record within a form. This function enhances data navigation
and accessibility within applications.

**Example:**

```javascript
app.openRecord('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
app.openRecord('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy', true);
app.openRecord('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy', 'zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz', false);
```

### Suppressing Warning Messages

**Function Name:** `app.setSuppressWarning(pSuppress)`

**Parameters:**

- `pSuppress`: A boolean indicating whether to suppress warning messages.

**Description:** Controls the display of warning messages that typically appear when attempting to navigate away from a
page. This can enhance user experience by eliminating unnecessary interruptions.

**Example:**

```javascript
app.setSuppressWarning(true); // Suppresses warnings
```

### Displaying Messages to Users

**Function Name:** `app.showMessage(title, message, type, subtitle)`

**Parameters:**

- `title`: The text to display in the dialog title bar.
- `message`: The main text message to display.
- `type` (optional): Specifies the message type (`"info"`, `"success"`, `"warn"`, or `"error"`) and controls the icon
  displayed.
- `subtitle` (optional): A heading text for the message.

**Description:** Allows the use of a built-in dialog to display messages to the end-user. This function is versatile,
supporting various message types for different contexts.

**Example:**

```javascript
app.showMessage(
    "Error found in data",
    "The booking date cannot be after the event.",
    "error",
    "Please change the booking or event date, then re-submit."
);
```

::: tip Note
Using `app.showMessage` is an effective way to communicate information, errors, or success messages directly to users,
improving the interactive experience of your application.
:::

## Objects available in the app event context

### **Application object (GUI type)**

- Variable: `app`
- Description: Contains functions for accessing global general information
- Example: `app.getCurrentUser();`

**Example:**

```javascript
var userEmail = app.getCurrentUserEmail();
```

## Application Events

### onStart

**Event Name:** `onStart`

**Description:** Called once when the browser is first loaded with your application. You can access the form’s interface
model for attaching programmatic events. However, nothing else on the form is modified because the forms have not been
displayed to the user, nor have they had any data attached.

**Example:**

- Create a global function for later use:

```javascript
app.getSharedData().messageBox = function (message) {
    alert("Warning: " + message);
};
```

- Register a function to be called that shows a section when a Service finishes:

```javascript

var form = app.getForm('F_Form1');
var serviceConfig = form.getServiceConfiguration('SC_ServiceConfig0');
serviceConfig.connectEvent('onCallFinished', function (success) {
    form.getPage('P_Page1').F_Section1.setVisible(true);
});
```