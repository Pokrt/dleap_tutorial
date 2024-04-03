# Inactive form timeout

Imagine you're filling out a form online, but then you get distracted and forget about it. Wouldn't it be nice if the
form could politely remind you to continue or save your progress before closing? That's what we're aiming to do here: to
create a system that inactivates a form if it's left open without any activity for too long. This tutorial will guide
you through setting up an "Inactive Form Timeout" using JavaScript, as there's no built-in feature for this in Domino
Leap.

#### Understanding the Basics

Before diving into the code, let's understand some basics:

- **JavaScript `setTimeout` and `clearTimeout` Functions:** These functions are central to our solution. `setTimeout`
  allows us to execute a function after a specified duration. If the user interacts with the form (activity), we will
  use `clearTimeout` to reset this timer.
- **Event Listeners:** These are used to monitor changes in the form, such as when a user types in a text field. If any
  change is detected, we reset our timer, effectively postponing the timeout.

#### Step 1: Setting Up Global Functions

First, we initialize global variables to store our timeout duration and other necessary data in `app.onStart()` event.

```javascript
app.getSharedData().timeoutDuration = 5000; // 5 seconds timeout
app.getSharedData().timeout = null; // will store our timeout ID
app.getSharedData().hndls = []; //holds the handles for all the onItemChange listeners
```

We create a function where you place the logic that you want to perform
on the item that you are currently looking at. The recursive function passes the handle to the current item, from which
you can then access any of its properties. We also write a function which checks whether the given item has `item` type.

```javascript
app.getSharedData().processItem = function (item) {
    if (app.getSharedData().isInputField(item.getType())) {
        var hndl = item.connectEvent('onItemChange', function () {
            //if any form item changes then we clear the timeout and start over
            clearTimeout(app.getSharedData().timeout);
            app.getSharedData().timeout = setTimeout(app.getSharedData().doTimeout, app.getSharedData().timeoutDuration);
        });
        app.getSharedData().hndls.push({itm: item, hnd: hndl});
    }
}

app.getSharedData().isInputField = function(theItemType) {
    var r = false;
    if(theItemType === "text" || theItemType === "textArea" || theItemType === "date" ||
     theItemType === "checkGroup" || theItemType === "radioGroup" || theItemType === "number" ||
     theItemType === "currency" || theItemType === "comboBox" || theItemType === "horizontalSlider" ||
     theItemType === "choiceSlider" || theItemType === "time" || theItemType === "webLink" ||
     theItemType === "radioGroup" || theItemType === "horizontalSlider" || theItemType === "choiceSlider" ||
     theItemType === "surveyQuestion" || theItemType === "emailAddress" || theItemType === "password" || theItemType === "timeStamp") {
    r = true;
  }
  return r;
}
```
Next, we need to create a function which will go through all the items in the form and sets previously created `processItem` function.

```javascript
/*
* Returns true if the current item has children, otherwise false.
*/
app.getSharedData().hasItems = function (containerID) {
    var list = containerID.getChildren();
    if (list.getLength() > 0) {
        return true;
    } else {
        return false;
    }
}

/*
* Recursive function used for counting form items.
* containerID: UI item (i.e. page or item)
* processItem: the function that contains the work we want to perform on the item we have accessed
*/
app.getSharedData().getItem = function (containerID, processItem) {
    var itemList;
    var pageList;
    var pageCount = 1;
    debugger;

    //check to see if the container is a form as it requires different processing
    if (containerID.getType() === "form") {
        pageList = containerID.getPageIds(); //list of the page IDs - not the actual objects!!
        pageCount = pageList.length;
    } else {
        itemList = containerID.getChildren();
    }

    //need a loop to account for different pages
    for (var p = 0; p < pageCount; p++) {
        if (containerID.getType() === "form") {
            itemList = containerID.getPage(get(pageList, p)).getChildren(); //get the page object from the form
        }

        //loop all the items
        for (var i = 0; i < itemList.getLength(); i++) {
            var theItem = itemList.get(i);
            if (app.getSharedData().hasItems(theItem)) {
                //if container go into it...
                app.getSharedData().getItem(theItem, processItem);
            } else {
                //other wise do something with the item
                if (dojo.isFunction(processItem)) { //make sure that the parameter passed is a function
                    processItem(theItem);
                }
            }
        }
    }
}
```
Now we need to assign function `getItem` to our form. To do that, we set `onLoad` event on our form. 
```javascript
//defines what happens when the timeout is executed
//this action could be anything you want it to be
app.getSharedData().doTimeout = function () {
    form.selectPage("P_NewPage2");
}

//hook the timeout functions on all the form input items onItemChange event
//we use existing functions to perform this work found on the devworks wiki
app.getSharedData().getItem(form, app.getSharedData().processItem);

//start the timeout, if any form item changes then we clear the timeout and start over
app.getSharedData().timeout = setTimeout(app.getSharedData().doTimeout, app.getSharedData().timeoutDuration);
```
Last but not least, we set the onDestruct event on our form to avoid duplicate call when the form is reloaded. 

```javascript
//disconnect all the handles.  We do this incase the form is ever reloaded in the same
//session, because it will attach new listeners which means there will be duplicates
for (var i = 0; i < app.getSharedData().hndls.length; i++) {
    var itm = get(app.getSharedData().hndls, i).itm;
    var hndl = get(app.getSharedData().hndls, i).hndl;

    itm.disconnectEvent(hndl);
}
```