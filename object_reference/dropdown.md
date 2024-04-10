# Dropdown
<TableOfContents />

## Item-Specific Methods

### getOptions() <Badge type="tip">item</Badge>

- **Description**: Returns the array of options currently shown in the drop-down. Each object in the array has a "title"
  property that is shown in the interface, and a "value" property that is saved into the data.
- **Example**:
  ```javascript
  var theTitle = "";
  var opts = page.F_DropDown.getOptions();
  for(var i=0; i<opts.length; i++) {
    var theItemTitle = get(get(opts,i), 'title');
    var theItemValue = get(get(opts,i), 'value');
    if(theItemValue === 'Red') {
      theTitle = theItemTitle;
    }
  }
  ```

### setOptions(options) <Badge type="tip">item</Badge>

- **Description**: Changes the list of options to show in the drop-down. It must be an array of objects. Each object
  must have a "title" property that is shown in the interface, and a "value" property that is saved into the data.
- **Example**:
  ```javascript
  var options = new Array();
  options.push({title: 'Banana', value: 'BA'});
  options.push({title: 'Apple', value: 'AP'});
  options.push({title: 'Orange', value: 'OR'});
  item.setOptions(options);
  ```

<!--@include: ./common/functions.md -->

<!--@include: ./common/event_objects.md -->

## Dropdown Events

### beforeOptionsUpdate

**Event Name:** `beforeOptionsUpdate`

**Parameters:** The array of options is passed in as `pOptions` and can be modified by the event code.

**Description:** This event is called before the options in a drop-down list are updated from a service call or from an
API call. By default, when a new options list is set into a drop-down list and the current selected item is not in the
new list, it is added into the new list automatically. If you return `false` from this event, it does not copy the
missing option into the new list.

**Example:**

```javascript
pOptions.push({title: 'Pizza', value: 'fooditem3'});
return false;
```

<!--@include: ./common/events.md -->