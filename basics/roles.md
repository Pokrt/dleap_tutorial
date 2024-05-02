# Roles

## Role Types

In Domino Leap, a customizable role-based model is employed to regulate data access and application manipulation. Roles facilitate the assignment of data access and application maintenance permissions. Users or groups are allocated to roles with access components manually or programmatically through web services.

### Role Dynamics:

Each role can be categorized as Open (dynamic) or Closed (static).

#### Open Roles:

- Assignments are either static or dynamic via web service calls defined within stages.
- Users are assigned based on data gathered during form submissions.
- Example: A web service identifies and assigns a manager for each form submitter.

#### Closed Roles:

- Users and groups are explicitly assigned within the Access tab.
- Dynamic assignments via web services are not supported.

## Creating new roles

### Procedure for Adding Roles:

1. Access the design environment and navigate to the Access tab.
2. The Define Roles window will appear.
3. Click on the green plus sign labeled "Add role" to create a new role.
   - Example: Create a role named "Manager."
4. Repeat the process by clicking on the plus sign to define additional roles.
   - Example: Define a role for "Shift Supervisor."
5. Utilize the radio buttons to specify whether the role is Open or Closed. -->

::: tip Exercise
Create a new role named "CFO" and assign the user in your organization to this role.
:::

::: details Step-by-Step Tutorial

1\. Navigate to your application url.

2\. Click here.

![](/basics/e7489486-1427-47c7-bc9a-2b669a3d3a28.png)

3\. Click "+" to add a new role

![](/basics/1f67e3fd-a22f-4723-bd23-af8a6ad7fd84.png)

4\. Click this text field and delete its content

![](/basics/c4907458-3d5c-4172-a8b6-ec15c55f90c2.png)

5\. Type name of the role "CFO"

6\. Click "Closed" for it to be assigned manually

![](/basics/eca1ea54-52db-4ef8-a10b-b97f22dd8f1f.png)

7\. Click &lt;role name&gt; + "(Role)"

![](/basics/8a26e526-071f-452d-9d5b-6e34a3a13d8a.png)

8\. Click "+"

![](/basics/17ca58ef-bfa6-47c4-86db-b679bc4db822.png)

9\. Click this text field.

![](/basics/64cd82c4-ac81-44f0-a8ca-9201f8beba29.png)

10\. Type first few letters to find user to assign to role we created

11\. Click "Jan Valdman/Plzen/Whitesoft/CZ"

![](/basics/85a8ccac-0ace-4c89-87e2-27305edbf603.png)

12\. Click "+"

![](/basics/f3a9cee7-c1e4-4416-b370-81683a6f0dea.png)

13\. Click "Validate"

![](/basics/1bf21749-d123-4fb2-ab29-1d5193fda426.png)

----
14\. Click on "Submitted" stage

![](/basics/33f09c5a-c94f-4f86-bf1d-da636d90732f.png)

15\. Click this checkbox to add/remove privileges

![](/basics/d714ebf1-435a-4da6-85e1-74451a3bbb08.png)

16\. Click this checkbox to add delete privileges.

![](/basics/8503859b-1cc3-4824-9bbd-0b8ba19114e0.png)

:::