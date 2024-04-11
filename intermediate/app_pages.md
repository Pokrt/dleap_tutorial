# Application Pages

In HCL Domino Leap, form pages are always shown in context of a Business obeject - this can be a new or submitted form (dependeng on teh stage). In other words, a form page can show only one row of submitted data and can not show some other row. If you wish to show multiple submitted data on a single web page, you have to do so "outside" a Form - you have to use an application page.


Application pages, or appPages in short, can be used as landing pages, navigation pages, documentation pages or, most often, they provide an overview of data are used to present information and display data to the user.
Because an appPage has no corresponfing bsuiness object, it can not show any form data using form items. FOr teh same reason, it has not stages or submit button. However, we can use a special Data Grid item to fetch and show data from other forms:

TODO image

Each app page typically represents a specific view within the application or central hub for a particular set of forms and app pages.

You can place the same items as you are used to do in pages, such
as [input items](./input_items.md), [display items](./display_items.md), etc. The main difference from pages is that
items placed on app pages do not store the data making them read-only.

## Creating App Pages
You can add new app page by clicking on the `...` and `+` icon in the app pages section in the left panel. 

![img_16.png](img_16.png)
