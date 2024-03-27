var hdl = BOA.connectEvent("onChange", function (newValue) {
    alert("Field content is " + newValue);
    BOA.disconnectEvent(hdl);
});