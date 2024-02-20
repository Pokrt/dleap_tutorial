# Application Data Storage

HCL Domino Leap uses a non-relational NoSQL database to store application data. The database is a collection of
documents, where each
document is a collection of fields. Each field has a name and a value. The value can be a string, number, date, or other
data type. The database is schema-less, meaning that each document can have a different set of fields. This allows for
flexibility in the data model, but also requires the application to handle missing or unexpected fields.

## Database

HCL Domino Leap uses a non-relational NoSQL database called Notes Storage Facility (NSF) to store application data. The
NSF database is a collection of documents, where each document is a collection of fields. Each field has a name and a
value. The value can be a string, number, date, or other data type. The database data are stored inside the `*.nsf`
file.

### HCL Domino Leap Database Files

During the installation HCL Domino Leap creates three database files:

* `volt/VoltBuilder.nsf`
* `volt/VoltAppHistory.nsf`
* `volt/VoltConfig.nsf`

### Representation in HCL Domino Leap

![Representation in HCL Domino Leap](/editor_image_5b35570d-efb0-4b64-8b1f-1bec4f068430.png)

### Representation in GUI editor

![Representation in GUI editor](/Snímek%20obrazovky%202024-02-19%20160701.png)

### Representation in submitted data view

![Representation in submitted data view](/Snímek%20obrazovky%202024-02-19%20161320.png)

Useful Links
============

https://www.loc.gov/preservation/digital/formats/fdd/fdd000433.shtml

https://opensource.hcltechsw.com/domino-keep-tutorials/pages/domino-new/setup/create-nsf.html

https://help.hcltechsw.com/domino-leap/1.1.3/post_install_tasks.html