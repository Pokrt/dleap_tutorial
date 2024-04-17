# Forms

## Submitting forms programmatically
In HCL Domino Leap, you can submit a form programmatically using the `activate()` method called on the action button. Here is an example of how to submit a form programmatically:

```javascript
var actionButtons = form.getStageActions();
for (var i = 0; i < actionButtons.length; i++) {
    if (get(actionButtons, i).getId() === 'S_Submit')
        get(actionButtons, i).activate();
}
```

## Modifying Form Before Saving
`beforeSave` event occurs just before the form data is submitted to the server. It's an opportunity to make final adjustments to the form data, such as data validation or formatting, ensuring that the data saved is exactly as intended.

```javascript
// convert the value to lowercase before saving
    BO.F_tag.setValue(BO.F_tag.getValue().toLowerCase());
```

## Modifying Form After Saving
`afterSave` event occurs after the form data is submitted to the server. It's an opportunity to perform additional actions after the form data is saved, such as displaying a success message or navigating to another page.

```javascript

// show a success message after saving
    alert("Thank you for submitting " + app.getCurrentUser());
```

## Setting Form Validity
You can set the form validity programmatically using the `setValid()` method. Here is an example of how to set the form validity to false:
    
```javascript
if (BO.F_tag.getValue() === "") {
    BO.setValid(false);
}
```
