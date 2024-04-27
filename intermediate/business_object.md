# Anatomy of Application

The term business object refers to a software concept that represents a business entity with its attributes and methods.
It is used to model the business domain in software applications.
Business objects are used to represent real-world entities such as customers, products, orders, and employees, and they
encapsulate the data and behavior associated with these entities.

## Representation

In HCL Domino Leap, business objects are represented as forms with input fields. Each field on the form corresponds to
an attribute of the business object, and the form itself represents the business object as a whole.

#### GUI To Data Mapping:
Form -> Business Object

Field -> Attribute

Example:
![GUI -> Data Mapping](/gui_to_data_mapping.png)

If you are familiar with Domino, here are some analogies to help you understand the similarities between Leap and Domino:
-    Leap app ~= NSF
-    Leap form ~= Domino form
-    Leap BO (aka "submitted form") ~= Domino document ("one row in a view")
-    Leap table ~= Domino subform
-    NSF design elements (forms and view) are updated when you deploy Leap app
-    NSF data is updated by every Create/Update/Delete action in Leap
