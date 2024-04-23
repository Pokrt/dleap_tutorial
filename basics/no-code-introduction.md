# Introduction to No-code development in Domino Leap

In this chapter, we will cover the basics of no-code development in HCL Domino Leap. To better understand how it
works, we will start by explaining what is MVC model and how it relates to Domino Leap. We will also cover the anatomy
of a Domino Leap application. Next, we will explain the basics of creating apps in Domino Leap which includes:
1. Design of Form pages
2. Configuration of visual style
3. Adding Item rules
4. Creation of addtional workflow Stages
5. Stage-Specific Item locking
6. Additing user Roles
7. Assignment of users and groups into Roles
8. Setting up user permissions
9. Creation of additional Form pages (optional)
11. Setting visibility of Pages in Stages (optional)
12. Adding AppPages (optional)
13. Using Services (optional)
14. Testing of the application

## Default Structure of Domino Leap application
By default, when you start your application design from scratch, Domino Leap generates a basic structure of one form, one page, two stages and three roles:

**Pages**
By default the application wizzard creates Form1 which contains Page1. There are no Items yet, you start with an empty canvas:
![img.png](img.png)


**Stages** 
There are two essentital stages associated to your Form1: an initial stge called Start and a final stage called Submitted. You can rename them if you wish. Further there are two Actions already present. At runtime they will produce buttons that move your Form among Stages. You can see one Action "Submit" that actually creates your data and one "Update" Action which keeps your data in the final stage.  
![img_1.png](img_1.png)


**Roles**
There are three elementar Roles in each application associated to Form1:
  - **Administrator** - A developer who created the app initially gets full access via the Amainistrator role. By default this role gives permission to read, upadate or delete data in any Stage and the permission to modify the application itself. 
  - **Initiator** - This role allows to open Form1 in Start stage - in other words it allows users to enter and submit data. By default, all authenticated users are assigned to this role.
  - **Record Owner** - This role represents the user who submitted data, the creator of data record. By default, this role is mapped the a virtual Initiator group. It is a bit confusing.

![img_3.png](img_3.png)  

**Permissions**
Finally there is a mapping that defines what each Role can do in each Stage in terms of CRUD operations. For example, only Initiator role can create new data records in stage Start. Operation that do not make sense in the given stage are dissabled:
![img_5.png](img_5.png)

![img_4.png](img_4.png)
