# Service Calls in JavaScript

## Finding Your Service ID

Before you can trigger a service, you need to know its ID. Here's how you can find it:

1. Navigate to the **Settings** tab in your HCL Domino Leap application.
2. Click on the **Services** section located in the left navigation panel.
3. Select the link that corresponds to the form where the service was created. This action will open the **Service
   Configuration** dialog.
4. Go to the **Details** tab to find the Service ID.

## Triggering a Service Using JavaScript

The way you call a service depends on the context within which you are making the call. Here are some examples:

### General Service Call

To trigger a service, use the following syntax:

```javascript
form.getServiceConfiguration("<Service ID>").callService();
```

Replace `<Service ID>` with the actual ID of the service you wish to trigger.

### Context-Specific Calls

- **At the Item, Page, or Form Level:**

  ```javascript
  form.getServiceConfiguration("<Service ID>").callService();
  ```

- **In the App onStart:**

  ```javascript
  app.getForm('<Form ID>').getServiceConfiguration("<Service ID>");
  ```

## Handling Asynchronous Service Calls

Services are called asynchronously, meaning your code won't wait for the service call to finish before moving on. To
handle this, you need to set up a listener that waits for the service to complete:

```javascript
var srv = form.getServiceConfiguration('<Service ID>');
srv.connectEvent("onCallFinished", function (success) {
    if (success) {
        // Code to execute on service completion
    }
});
```

Remember to replace `<Service ID>` with your specific service ID and add your completion code inside the if statement.

### Synchronizing Service Calls

There might be scenarios where you have multiple services, such as `serviceA` and `serviceB`, and you need `serviceB` to
execute only after `serviceA` has successfully completed. This synchronization ensures that any dependencies between
services are respected or that your form is updated in a specific order.

::: info Example Scenario
Imagine you have two services: `serviceA` is to be triggered by a button click, but `serviceB` should only execute
after `serviceA` has finished. It's assumed that these services are already set up in your application.
:::

::: details Solution

#### Implementing Service Synchronization

Here's how you can create a listener to synchronize `serviceA` and `serviceB`:

```javascript
// Retrieve the form object
var form = app.getForm('F_Form1'); // Replace 'F_Form1' with your actual Form ID

// Create a handle for 'serviceA'
var srvA = form.getServiceConfiguration('SC_serviceA');

// Connect a function to the 'onCallFinished' event of 'serviceA'
srvA.connectEvent("onCallFinished", function (success) {
    // Verify that 'serviceA' call was successful
    if (success) {
        // Trigger 'serviceB'
        form.getServiceConfiguration('SC_serviceB').callService();
    }
});
```

#### Breakdown of the Synchronization Process

1. **Retrieve the Form Object:** The form object is obtained using `app.getForm('F_Form1')`, where `'F_Form1'` should be
   replaced with the ID of your specific form.

2. **Create a Handle for `serviceA`:** A handle for `serviceA` is created, allowing us to attach an event listener to
   it.

3. **Connect to the `onCallFinished` Event:** We attach a function to the `onCallFinished` event for `serviceA`. This
   event is triggered once `serviceA` completes its execution.

4. **Verify Success:** Inside the connected function, we check if `serviceA` completed successfully.

5. **Trigger `serviceB`:** If `serviceA` was successful, we then trigger `serviceB` by calling it.

:::

## Best Practices for Placing Your Listener

Where you place your listener can impact your application. Here are some considerations:

### Application `OnStart`

- **Place Listeners Strategically:** It's generally a good idea to place these listeners in the `onStart` event of your
  application to have them all in one place.
- Use this for application-wide settings or initializations.
- Retrieve the form explicitly as `form` does not exist at this level.

  ```javascript
  var form = app.getForm('<Form ID>');
  if(form !== null) {
    // Place listener code here
  }
  ```

### Form `onLoad`

- This event is simpler to manage since it's only called when the form is loaded.
- The `form` object is readily available.

### In an Item

- Scope is limited to the form and item, simplifying management.
- Important: Remember to disconnect the event to prevent duplicates.

  ```javascript
  var srv = form.getServiceConfiguration('<Service ID>');
  var hdl = srv.connectEvent("onCallFinished", function(success) {
    if(success) {
      // Code to execute on service completion
    }
    srv.disconnectEvent(hdl);
  });
  ```

### Other Considerations

- **Ensure Single Listener Creation:** Be mindful to create only a single listener for an event for any given object to
  avoid duplicate triggers.
- **Depth of Service Chain:** There's no limit to how many services you can chain together. However, this technique is
  best used when services are dependent on each other, such as when the output of `serviceA` is needed as input
  for `serviceB`.