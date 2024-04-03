# Custom JavaScrip in HCL Domino Leap

HCL Domino Leap allows you to enhance your applications with custom JavaScript. By adding .js files to your
application, you can create more dynamic and interactive experiences. This tutorial will guide you through the process
of using custom JavaScript in your HCL Domino Leap applications.

## Adding JavaScript Files to Your Application

1. **Navigate to Application Settings**: Go to the Settings > Files section of your application in HCL Domino Leap.
2. **Upload JavaScript Files**: Any `.js` file you add here is automatically loaded into your running application. This
   means you can write JavaScript code in these files that will execute as part of your application.

## Writing Custom Functions

You can use external `.js` files to define utility methods that can be executed later, during specific events in your
application. Here's how to create a custom function:

1. **Define a Utility Method**: For instance, to sum all number values in a section, add the following function to your
   `.js` file:

   ```javascript
   app.getSharedData().sumNumbers = function(section) {
       var total = 0;
       var children = section.getChildren();
       for(var i=0; i < children.getLength(); i++) {
           var child = children.get(i);
           if(child.getType() === 'number')
               total += child.getBOAttr().getValue();
       }
       return total;
   };
   ```

2. **Use the Function in an Event**: Later, you can call this function when needed, such as in an event to sum numbers
   in a specific section:

   ```javascript
   var sum = app.getSharedData().sumNumbers(page.F_Expense);
   ```

## Handling JavaScript Security

- **Security Enabled**: When JavaScript security is enabled, external `.js` files referenced by URL won't load. Uploaded
  files are evaluated in a secure sandbox, adhering to its restrictions. Functions should be defined in a secure format,
  e.g., `app.getSharedData().blat = function (...) { ... };`.

- **Security Disabled**: Without JavaScript security, external files load through a `<script>` tag, and you must
  use `window.NitroApplication` for accessing Domino Leap API functions. Uploaded files use `eval()` for evaluation. If
  you want to learn more about disabling security, refer to page [JavaScript Security](/low-code-basics/js_in_dleap/security). 

::: warning todo
zjistit security disabled a jak se `window.NitroApplication` používá a k čemu je eval() funkce
:::