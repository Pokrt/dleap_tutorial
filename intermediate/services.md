# Services

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

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/ed17c77d-1348-4f9f-97a6-86f7c601b4e4/user_cropped_screenshot.jpeg?tl_px=0,0&br_px=1075,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=-17,53)


2\. Click "Events"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/f4bbb788-be44-4af7-a775-2e6a956ebf70/ascreenshot.jpeg?tl_px=1485,0&br_px=2560,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=902,117)


3\. Click "onItemChange"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/6016fb29-1328-44b2-bc6a-b2936d67fbca/ascreenshot.jpeg?tl_px=1485,100&br_px=2560,701&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=772,265)


4\. Click "Call a Service"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/51b197e1-eeac-4db8-bc23-3301836f4a10/ascreenshot.jpeg?tl_px=337,136&br_px=1412,737&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


5\. Click "Add/Edit Service Configuration"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/3126233c-6d80-4a69-9fa9-ab3461232596/ascreenshot.jpeg?tl_px=547,170&br_px=1622,771&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


6\. Click here. Notice that we select "... / Retrieve" because we want to select only one record from database.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/b6d0f597-2162-4b13-a575-2511aab07763/ascreenshot.jpeg?tl_px=459,341&br_px=1534,942&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


7\. Click "Next"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/7224f393-6af9-432a-a99d-18156ed9908d/ascreenshot.jpeg?tl_px=1037,678&br_px=2112,1279&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,500)


8\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/e5642f75-1d2d-40f6-bcbf-905274aa765e/ascreenshot.jpeg?tl_px=173,42&br_px=1248,643&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


9\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/2fdba07d-bbb1-4366-8ac6-052ee6268bba/ascreenshot.jpeg?tl_px=273,92&br_px=1348,693&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


10\. Click "Retrieve by (F_SingleLine1) "Product Name""

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/1fe15f02-47fb-4a7b-ac3c-074baf73d9c3/ascreenshot.jpeg?tl_px=1054,37&br_px=2129,638&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


11\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/3fc932be-6cbf-459e-93cf-2b93f93d3d8d/ascreenshot.jpeg?tl_px=735,180&br_px=1810,781&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


12\. Click "Next"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/563ee2ba-19af-4b55-9e82-d5a855bd3e64/ascreenshot.jpeg?tl_px=1049,678&br_px=2124,1279&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,499)


13\. To map output of service call to other form data click "Result (F_Currency1) "Price""

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/a7ad87f4-4a6f-4ab4-a893-0e865b603a10/ascreenshot.jpeg?tl_px=407,412&br_px=1482,1013&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


14\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/9f688066-e8f0-4dcd-b329-5072fc772a86/ascreenshot.jpeg?tl_px=1018,87&br_px=2093,688&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


15\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/83047a3b-2bad-4146-b4e8-208da1268c98/ascreenshot.jpeg?tl_px=744,185&br_px=1819,786&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)


16\. Click "OK"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-26/3348f193-6292-4bf5-bc0b-612ea9285fc2/ascreenshot.jpeg?tl_px=1187,678&br_px=2262,1279&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,495)

:::



## Video Tutorial
<iframe width="100%" height="400"
src="https://www.youtube.com/embed/aOwY2ENik8Y?start=579">
</iframe>

