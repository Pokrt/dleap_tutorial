# Data Grid
Data Grid object represents a Data Grid display item on a Page or an AppPage.

## Item-Specific Methods

### getDisplayedData() <Badge type="tip">item</Badge>

- **Returns**:
    - **Boolean**: Checkbox
    - **Number**: Number, Currency, Numeric Slider
    - **Date**: Date, Time, Timestamp
    - **Object**: Attachment
        - `uid`: The identifier of the attachment.
        - `filename`: The file name of the attachment.
        - `viewUrl`: The URL to view the attachment.
        - `downloadUrl`: The URL to download the attachment.
    - **Object**: Name Picker
    - **Object**: Select Many
        - `savedValues`: An array of all the saved values.
        - `displayValues`: An array of all the display values.
        - `displayString`: All the list values provided as a comma-separated string.
    - **String**: All other items

**Example**:

```javascript
// Render all the row data displayed in the data grid as JSON:
appPage.F_Text2.setContent(toJson(appPage.F_DataGrid1.getDisplayedData(), true));
```

**Example**:

Calculate the sum of a column from displayed data:

```javascript
var data = appPage.F_DataGrid1.getDisplayedData();
var sum = 0;
for (var d in data) {
    var dObj = get(data, d);
    sum += dObj.F_Number1;
}
alert("Sum = " + sum);
```

### isAllDataDisplayed() <Badge type="tip">item</Badge>

- **Returns**: `true` if all the submitted data for the form connected to the data grid is rendered on screen in a
  single page.

**Example**:

```javascript
// If all the known data is being displayed, then calculate the sum of a column:
if (appPage.F_DataGrid1.isAllDataDisplayed()) {
    var allData = appPage.F_DataGrid1.getDisplayedData();
    var sum = 0;
    for (var d in allData) {
        var dObj = get(allData, d);
        sum += dObj.F_Number1;
    }
    alert("Sum = " + sum);
}
```

### isColumnVisible(columnId) <Badge type="tip">item</Badge>

- **Returns**: `true` if the specified column is visible in the data grid.

**Example**:

```javascript
appPage.F_DataGrid1.isColumnVisible("F_SingleLine1");
```

### refresh() <Badge type="tip">item</Badge>

- **Description**: Forces the data grid to reload. This is useful, for example, after a submission with "apps as a
  service" has been triggered and the content in the data grid is stale.

**Example**:

```javascript
// Refresh the data grid after calling a service that changes the data:
var srv = form.getServiceConfiguration('SC_theService');
srv.connectEvent("onCallFinished", function (success) {
    if (success) {
        try {
            appPage.F_DataGrid1.refresh();
        } catch (err) {
            alert("SC_theService: " + err);
        }
    }
});
```

### selectFirstRow() <Badge type="tip">item</Badge>

- **Description**: Selects the first row in the data grid.

### setColumnHeader(columnId, pHeaderValue) <Badge type="tip">item</Badge>

- **Description**: Sets the header identified by `columnId`, to the value provided in `pHeaderValue`.

**Example**:

```javascript
// Set the header of a column to another language:
appPage.F_DataGrid1.setColumnHeader("createdBy", "Créé par");
```

### setColumnVisible(columnId, boolVal) <Badge type="tip">item</Badge>

- **Description**: Controls the visibility of the column identified by `columnId`. If `boolVal` is true, the column is
  shown. If `boolVal` is false, the column is hidden.

**Example**:

```javascript
// Hide a column from the data grid if the user is not part of a specific role:
var isAdmin = app.getCurrentUserRoles().contains("Administrator");
item.setColumnVisible("F_AdminOnly1", isAdmin);
```

### resetFilters() <Badge type="tip">item</Badge>

- **Description**: Returns the filters to what was specified in the data grid configuration.

### setFilters([filter], filterOp) <Badge type="tip">item</Badge>

- **Description**: Set filters for the data grid. This will override any filters specified in the data grid
  configuration. `[filter]` is an array of filter objects. `filterOp` is either "and" or "or" and is required if there
  is more than one filter. A filter is made up of the following:
    - `name`: the id of a meta-data attribute or a field of the form configured to the data grid.
    - `operator`: as documented in Filtering Data REST API results.
    - `value`: the value to search.

**Examples**:

- Set a filter to show records that are older than one week and in the `ST_Triage` stage:

```javascript
var now = new Date();
var aWeekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
var filters = [
    {name: "created", operator: "before", value: aWeekAgo},
    {name: "stageId", operator: "equals", value: "ST_Triage"}
];
appPage.F_DataGrid1.setFilters(filters, "and");
```

- Set a filter to show records between two dates, from fields on the same app page as the data grid:

```javascript
var filters = [
    {name: "F_BirthDate", operator: "between", value: [appPage.F_StartDate.getValue(), appPage.F_EndDate.getValue()]}
];
appPage.F_DataGrid2.setFilters(filters, "and");
```

- Remove all filters:

```javascript
appPage.F_DataGrid1.setFilters(null);
```

::: tip Note
Note: The field id does not have to be displayed in the data grid.
:::

<!--@include: ./common/functions.md -->

<!--@include: ./common/event_objects.md -->

# Data Grid Events

### onDataChange

**Event Name:** `onDataChange`

**Parameters:** None.

**Description:** Called when the content in the Grid is changed. This includes the initial load, moving to a new page,
and using the `refresh()` JavaScript method.

**Example:**

```javascript
appPage.F_DataGrid1.selectFirstRow();
```

### onRowSelect

**Event Name:** `onRowSelect`

**Parameters:** The selected row’s data is available from the variable `rowData`.

**Description:** Called when a row is clicked by the user.

**Example:**

```javascript
if (rowData) {
    appPage.F_Paragraphtext1.setValue(rowData.F_Paragraphtext1);
    appPage.F_Paragraphtext2.setValue(rowData.F_Paragraphtext2);
    if (rowData.F_Picture) {
        appPage.F_Image1.setURL(rowData.F_Picture.viewUrl);
        appPage.F_HTMLArea1.setContent("<img src='" + rowData.F_Picture.viewUrl + "' />");
    } else {
        appPage.F_Image1.setURL("");
        appPage.F_HTMLArea1.setContent("");
    }
}
```

### onRowDeselect

**Event Name:** `onRowDeselect`

**Parameters:** None.

**Description:** Called when the selected row is unselected.



<!--@include: ./common/events.md -->