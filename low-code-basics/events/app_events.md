# App Events

## Understanding Data Objects

In programming, a **data object** is a structure that holds data. In JavaScript™, objects can store data and functions
to work with that data. Objects are like containers for named values, called properties (data) or methods (functions).

### The `app` Data Object

In the context of Domino Leap, there's a special object called `app` (Application object). Think of it as a toolbox that
lets you interact with the application globally. This object contains functions that allow you to access and manipulate
global information about your application.

- **Example:** `app.getCurrentUser();` is a function call that retrieves the current user's information. Here, `app` is
  the data object, and `getCurrentUser` is a method (or function) of that object.

## Understanding Application Events

Application events are special triggers or points in the lifecycle of an application where specific actions can be
performed. In the context of Domino Leap, these events allow you to execute custom JavaScript™ code in response to
certain activities within the application.

### `onStart` Event

The `onStart` event is a crucial application-level event. It's called once when the browser first loads your
application. This is the moment to prepare or set up your application before the user interacts with it.

- **Use Cases:** You can attach programmatic events to the form's interface model or set up global functions to be used
  later.

## Practical Examples

### 1. Creating a Global Function

```javascript
app.getSharedData().messageBox = function (message) {
    alert("Warning: " + message);
};
```

In this example, a function `messageBox` is added to the application's shared data. This function can display a warning
message using the `alert` function. It's like creating a custom warning sign that you can show anytime within the
application.

### 2. Registering a Function for Service Completion

```javascript
var form = app.getForm('F_Form1');
var serviceConfig = form.getServiceConfiguration('SC_ServiceConfig0');
serviceConfig.connectEvent('onCallFinished', function (success) {
    form.getPage('P_Page1').F_Section1.setVisible(true);
});
```

This example demonstrates how to respond to a service finishing its task. It first gets a specific form and its service
configuration. Then, it attaches a function to the `onCallFinished` event of the service. When the service finishes, the
code shows a particular section of the page. It's akin to waiting for a signal before unveiling a hidden part of your
application.

## Conclusion

Understanding data objects and application events is fundamental for working with the JavaScript™ API in Domino Leap.
Data objects like `app` allow you to access and manipulate application-wide information and functionalities. Application
events like `onStart` let you hook into specific lifecycle moments to execute custom code, enhancing the interactivity
and behavior of your application.

Through practical examples, such as creating global functions or responding to service events, you can start to see how
these concepts enable a dynamic and responsive application design.