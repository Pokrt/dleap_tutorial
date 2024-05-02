# Service Calls

Services are the integral part of HCL Domino Leap. They are used to encapsulate the business logic of the application
basically serving as controller in MVC architecture. Services are used to
interact with the internal and external data store. There are three types of services:
- **Service catalog** - contains predefined services that are used to interact with the internal data store.
- **Domino Database** - can be used to query data from the Domino database. This is especially useful when you want to
  query data from other application forms.
- **External Service** - can be used to query data from external data sources like JSON-formatted REST API.

## Auto-generated services

Each form, once the app is deployed or updated, generates a set of CRUD (create, read, update, delete) services:

**CREATE** - in `ST_new` stage

**SUBMIT** - for each submit button = action button

**RETRIEVE** - search or single row of submitted data (record)

**SEARCH** - find multiple records

**UPDATE** - save existing data row (cannot be used in `ST_new` or `ST_end`)

**DELETE** - remove a row of data


## Working with services
You can call services from the same form of from another form (in the same app or from another app). If you want to see service called form another form, feel free to navigate to the next chapter called [Multiform applications](./multi_form_apps).

::: tip Exercise
In this task, we will create a service to query data from a Domino database. You will be filling other input fields based on the selected value from the dropdown.
:::

::: details Step-by-step tutorial

1\. Navigate to the dropdown we created in the previous example.

![](/intermediate/e187341f-88aa-4238-886d-138f56d3e39d.png)


2\. Click "Events"

![](/intermediate/dde61705-3271-41a2-8e9e-2817fb82097a.png)


3\. Click "onItemChange"

![](/intermediate/74277001-e65f-4729-b802-66281dd42ea2.png)


4\. Click "Call a Service"

![](/intermediate/e84bebfe-d8f7-4622-94b9-57bc9ada358e.png)


5\. Click "Add/Edit Service Configuration"

![](/intermediate/e4237f5a-1a3b-4af4-b26e-c334e43cf08b.png)


6\. Click here. Notice that we select "... / Retrieve" because we want to select only one record from database.

![](/intermediate/28628b4f-5004-45bf-af91-66f644d11296.png)


7\. Click "Next"

![](/intermediate/7c35a793-0f7f-4cae-bb28-11aba98a3306.png)


8\. Click here.

![](/intermediate/92b6c6b7-c447-4cfb-b2d2-51ec8344c848.png)


9\. Click here.

![](/intermediate/c803b5df-29cd-4b61-8044-737c9273bb9f.png)


10\. Click "Retrieve by (F_SingleLine1) "Product Name""

![](/intermediate/6f8fda0c-6f13-4081-a6eb-c566727ccace.png)


11\. Click here.

![](/intermediate/c9f5e3f2-56dc-4091-808c-6309e32cef7c.png)


12\. Click "Next"

![](/intermediate/5723b283-02fe-42bd-87f3-550cc45c34df.png)


13\. To map output of service call to other form data click "Result (F_Currency1) "Price""

![](/intermediate/9ab41da2-20f1-43d1-b7f4-0d91b0536987.png)


14\. Click here.

![](/intermediate/a6cf380b-ddb4-4d96-9cf9-eff3ed0f0d4b.png)


15\. Click here.

![](/intermediate/b57a3155-23da-4095-bbf9-1d5962591dcf.png)


16\. Click "OK"

![](/intermediate/c92f4fd7-fe69-4b68-9ac2-4073b16ecf01.png)

:::



## Video Tutorial
<iframe width="100%" height="400"
src="https://www.youtube.com/embed/aOwY2ENik8Y?start=579">
</iframe>

