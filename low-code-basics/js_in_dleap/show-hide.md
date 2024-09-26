There are multiple ways how you can hide pages or items in Domino Leap.

# Hidding Pages

A no-code way how to hide pages from navigation is to use one of the following options: 
- use stage visibility rules
- use item-level rules

A low-code way is to use repective methot of the Form object:
- `form.removePageFromNavigation(pageId)`
- `form.restorePageNavigation(pageId)`

You can copy `pageId` from Editor, call `page.getId()` to get id of the current page or find a page using `form.getPageIds()` 

# Hidding Items
Hidding items works in a similar way. You can hide an item:
- by stage visibility rule
- by item display rule
- by JavaScript

To hide an iten, call `item.SetVisible(false)`, to unhide it call `item.SetVisible(true)`. 

Please note that if an item is hidden by a rule, stage, or because its parent item is hidden, you cannot make it visible using JavaScript methods.
