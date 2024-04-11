# &#127358; Section
Section object represents one section on a Page or an AppPage. 

## Specific Methods

### &#127356; getExpanded() <Badge type="tip">item</Badge>

- **Description**: Returns `true` if the section is expanded and `false` if it is collapsed.

### &#127356; setExpanded(expanded) <Badge type="tip">item</Badge>

- **Description**: Sets the expanded state of the section. If `true`, the section is expanded. If `false`, then it is
  collapsed.
- **Example**:
  ```javascript
  item.setExpanded(true);
  // Expands the section.

  item.setExpanded(false);
  // Collapses the section.
  ```


<!--@include: ./common/functions.md -->

<!--@include: ./common/event_objects.md -->

## Specific Events

### &#127348; onCollapse

**Event Name:** `onCollapse`

**Description:** Called when the section is collapsed.

### &#127348; onExpand

**Event Name:** `onExpand`

**Description:** Called when the section is expanded.


<!--@include: ./common/events.md -->