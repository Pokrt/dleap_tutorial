# Working with buttons
In HCL Domino Leap, there are two types of buttons - regular Buttons and Action Buttons. Only Buttons can trigger events. Action Buttons are used to submit the form.

## Working with Buttons

<!-- button vs action button - je potřeba rozlišovat, jiny třídy , enable, disable, -->
### Disabling a Button
Disables the button so that it cannot be clicked.

```javascript
page.F_Button1.setActive(false);
// set button to be disabled

```

## Working with Action Buttons
### Activating an Action Button
Triggers this button, which cancels, submit, or save the form. If a button is hidden by a Rule, you can
try and fire it. However, the server may reject the submission.

```javascript
var actionButtons = form.getStageActions();
for (var i = 0; i < actionButtons.length; i++) {
    if (get(actionButtons, i).getId() === 'S_Cancel')
        get(actionButtons, i).activate();
}
```
