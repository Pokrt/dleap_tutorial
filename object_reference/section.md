# Section

## Item-Specific Functions

### Checking Expansion State: `item.getExpanded()`

- **Description**: Returns `true` if the section is expanded and `false` if it is collapsed.

### Setting Expansion State: `item.setExpanded(expanded)`

- **Description**: Sets the expanded state of the section. If `true`, the section is expanded. If `false`, then it is
  collapsed.
- **Example**:
  ```javascript
  item.setExpanded(true);
  // Expands the section.

  item.setExpanded(false);
  // Collapses the section.
  ```

## Item Common Functions

<!--@include: ./common/functions.md -->

<!--@include: ./common/event_objects.md -->

## Section Events

### onCollapse

**Event Name:** `onCollapse`

**Description:** Called when the section is collapsed.

### onExpand

**Event Name:** `onExpand`

**Description:** Called when the section is expanded.


<!--@include: ./common/events.md -->