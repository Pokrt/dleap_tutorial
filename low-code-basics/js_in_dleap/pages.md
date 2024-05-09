# Working with Pages
To navigate user from one page to another, you can use methods called on the form object.

### Navigating to a Page

To navigate to a page, you can use the `selectPage` method. Here is an example of how to navigate to a page with id `F_Page1`:

```javascript
var thePage = form.getPage('F_Page1');
if (thePage !== null) {
    form.selectPage('F_Page1');
}
```

### Removing a Page from Page Sequence
To remove page from navigation, you can use the `removePageFromNavigation` method.

Here is an example of how to remove a page with id `F_Page1`:

```javascript
if (BO.F_Check.getValue()) {
    form.removePageFromNavigation('F_Page1');
}

```

### Page Object
For complete JavaScript object reference go to [Page Object](/object_reference/page).
