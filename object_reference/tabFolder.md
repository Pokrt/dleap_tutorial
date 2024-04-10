# Tabbed folder
<TableOfContents />
## Item-Specific Methods

### getSelectionIndex() <Badge type="tip">item</Badge>

- **Description**: Returns the index of the currently selected tab.
- **Example**:
  ```javascript
  var sel = item.getSelectionIndex();
  var tabs = item.getChildren();
  var selTab = tabs.get(sel);
  var tabChildren = selTab.getChildren();
  tabChildren.get(0).getBOAttr().setValue(12);
  // Set 12 into the first item in the currently shown tab.
  ```

### getTabTitleList() <Badge type="tip">item</Badge>

- **Description**: Returns an array of all the tab titles in this folder.

### setSelectedTab(tabTitle) <Badge type="tip">item</Badge>

- **Description**: Takes a tabTitle string. Selects the Tab that matches the tabTitle string.

### setTabTitle(tabIndex, pTitle) <Badge type="tip">item</Badge>

- **Description**: Updates the title of a tab within a Tabbed Folder by using a tabIndex integer and pTitle string
  value. tabIndex denotes the location of the tab within the list of available tabs from left-to-right. For
  bidirectional languages, the order is reversed, being right-to-left.
- **Note**: In our example tabbed folder, the tabIndex number 0 is the Red tab which is furthest left, while 4 is the
  tab furthest to the right. In a bidirectional language, the order is reversed. Tab 0 is assigned to Blue, which is the
  tab furthest to the right.

### setTabTitleList(pTitleArray) <Badge type="tip">item</Badge>

- **Description**: Updates the titles of tabs within a Tabbed Folder from a list of strings by using a pTitleArray array
  of string values. The list of tabs is updated respective to the order of strings that are defined in the array. If
  there are more array values than tabs in the form, the additional values are ignored.
- **Example**:
  ```javascript
  item.setTabTitleList(['Monday','Tuesday','Wednesday','Thursday','Friday']);
  // Updates the tab titles to the days of the week, assuming there are at least 5 tabs.
  ```


<!--@include: ./common/functions.md -->

<!--@include: ./common/event_objects.md -->

## Tabbed Folder Events
Here's your text formatted to match the desired output:

### onTabSelected

**Event Name:** `onTabSelected`

**Description:** Called after a tab is selected.



<!--@include: ./common/events.md -->