# Where is your Data

HCL Domino Leap uses a Domino database - a NSF file - to store data submited via forms. This is the major differnce from HCL Leap or IBM Forms Experiences Builder.

Using Domino as data backend brings many advantages but also some worries. Fist of all, you can use any tools available for the HCL Domino platform to perform more task. Domino also empower a very strong security system and Domino Leap must fit into the existing principles.  

Domino database is a collection of
documents, where each
document is a collection of fields. Each field has a name and a value. The value can be a string, number, date, or another
data type. The database is schema-less, meaning that each document can have a different set of fields. This allows for
flexibility in the data model, but also requires the application to handle missing or unexpected fields.


## Database

HCL Domino Leap uses a non-relational NoSQL database called Notes Storage Facility (NSF) to store application data. The
NSF database is a collection of documents, where each document is a collection of fields. Each field has a name and a
value. The value can be a string, number, date, or other data type. The database data are stored inside the `*.nsf`
file. Each NSF file has its own access controll list (ACL) managing acess to NSF files.


## Data views

You can view your data in multiple ways:

### Representation in Domino Leap  - Editor
This is how you define your data structure within a form:

![Representation in GUI editor](/Snímek%20obrazovky%202024-02-19%20160701.png)

### Representation in Domino Leap - View Data page
This is a simple view of your submitted forms:

![Representation in submitted data view](/Snímek%20obrazovky%202024-02-19%20161320.png)

### Representation in HCL Domino
Thsi is how your data actually look like in Domino database - a generated NSF file:

![Representation in HCL Domino Leap](/editor_image_5b35570d-efb0-4b64-8b1f-1bec4f068430.png)






