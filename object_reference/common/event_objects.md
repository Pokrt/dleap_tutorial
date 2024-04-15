## Objects available in the item event context

### &#127358;Application object (GUI type)

- Variable: `app`
- Description: Contains methods for accessing global general information.
- Example: `app.isSingleFormView();`

### &#127358; Page object (GUI type)

- Variable: `page`
- Description: For accessing the Page and the items on it.
- Example: `page.F_Text.setContent('This is a Label');`

### &#127358; Form object (GUI type)

- Variable: `form`
- Description: For accessing the pages and controlling page navigation.
- Example: `form.getPage('P_Page1');`

### &#127358; Item object (GUI type)

- Variable: `item`
- Description: The object representing the current item.
- Example: `item.setVisible(true);`

### &#127358; Business Object (DATA type)

- Variable: `BO`
- Description: Top-level data object for the form.
- Example: `BO.F_Username.getValue();`

### &#127358; Business Object Attribute object (DATA type)

- Variable: `BOA`
- Description: Object representing the Data for the current item. Only present for data items.
- Example: `BOA.setValue("Please enter your Name");`

### &#127358; App Page Object (GUI type)

- Variable: `appPage`
- Description: For accessing the app page and the items on it.
- Example: `appPage.F_SingleLine1.getValue()`

### &#127358; Item on an App Page (GUI/data type)

- Variable: `apItem`
- Description: The object representing the current item on an app page.
- Example: `apItem.setValue("app pages are great!")`