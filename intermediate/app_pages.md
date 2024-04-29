# Application Pages

In HCL Domino Leap, Form pages are always shown in context of a Business object - this can be a new or submitted form (depending on the stage). 
In other words, a form page can show only one row of submitted data (Domino document) and can not show data from other rows. If you wish to show multiple submitted data on a single web page, you have to do so "outside" a Form - you have to use an Application page.

Application pages, or App pages in short, can be used as landing pages, navigation pages, documentation pages or, most often, they provide an overview of submitted data.

Because an App page has no corresponding business object, it cannot show any form data using form items. For the same reason, it has no stages nor submit button. However, we can use a special Data Grid item to fetch and show data from other forms:

TODO image

Each App page typically represents a specific view within the application or central hub for a particular set of forms and app pages.

You can place the same items as you are used to do in pages, such
as [input items](./input_items.md), [display items](./display_items.md), etc. The main difference from the Form pages is that
items placed on App pages do not store the data so they are read-only.

## Creating App Pages
You can add new App page by clicking on the `...` and `+` icon in the App pages section in the left panel. 

![img_16.png](img_16.png)
