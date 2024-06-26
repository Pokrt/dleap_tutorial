## Inherited Events
The following events are common to all Items:

### &#127348; onClick

**Event Name:** `onClick`

**Description:** Called every time that the item is selected by the user.

###  &#127348; onHide

**Event Name:** `onHide`

**Description:** Called every time that the item is hidden, whether just itself or the entire page.

###  &#127348; onInvalid (only data items)

**Event Name:** `onInvalid`

**Description:** Called when a data item goes from being valid to invalid.

###  &#127348; onItemBlur

**Event Name:** `onItemBlur`

**Description:** Called when the item is blurred (focus is lost).

###  &#127348; onItemChange

**Event Name:** `onItemChange`

**Description:** Called when the item data is changed and saved into the Business Object. For some types of items, it
occurs when the user tabs or switches focus, for example, when users select Number, Single Line, Multi-Line, and
Currency form items. For other items, it occurs every time they make a change, such as Check Box, Survey, or drop-down.

::: tip Note
You cannot change the value of an item within this event as its value has changed, and it is locked.
:::

###  &#127348; onItemFocus

**Event Name:** `onItemFocus`

**Description:** Called when focus is received by an item.

###  &#127348; onItemLiveChange
(items which can be incrementally changed)

**Event Name:** `onItemLiveChange`

**Description:** Called every time data is entered but not yet updated to the Business Object, such as Number, Single
Line, Multi-Line, and Currency.

###  &#127348; onMouseOut

**Event Name:** `onMouseOut`

**Description:** Called every time the mouse moves out of the item bounding area (not including label).

###  &#127348; onMouseOver

**Event Name:** `onMouseOver`

**Description:** Called every time the mouse moves into the item bounding area (not including label).

### &#127348; onShow

**Event Name:** `onShow`

**Description:** Called every time the item goes from being hidden to being shown, whether from a page flip or because
of a rule or JavaScript™ change.

### &#127348; onValid 
(only data items)

**Event Name:** `onValid`

**Description:** Called when a data item goes from being invalid to valid.