//disconnect all the handles.  We do this incase the form is ever reloaded in the same
//session, because it will attach new listeners which means there will be duplicates
for (var i = 0; i < app.getSharedData().hndls.length; i++) {
    var itm = get(app.getSharedData().hndls, i).itm;
    var hndl = get(app.getSharedData().hndls, i).hndl;

    itm.disconnectEvent(hndl);
}