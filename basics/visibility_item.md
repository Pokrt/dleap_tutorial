# Item visibility in certain stages

## Overview

The visibility of a page item can be controlled by the stage in which it is displayed. This is useful for
creating dynamic forms that change based on the stage of the process. This can be used in combinations with different
roles. For example, a form may have a visible set of questions for the "New" stage than for the "Approved" stage.

## Setting visibility by stage for Page Items

You can hide different page objects like text fields, etc. This is useful when you want to hide a part of the form in a
certain stage.

::: tip Exercise
Try to change the visibility of the text field in stage "Submitted".
:::

::: details Step-by-Step Solution

1\. Go to workflow tab

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/b4ffb2c4-c790-45c1-93d1-c978b0590ec6/ascreenshot.jpeg?tl_px=0,0&br_px=1075,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=-2,176)

2\. Click "Visibility"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/18f522f1-59df-4685-840a-115cb7889fbc/ascreenshot.jpeg?tl_px=828,0&br_px=1903,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,2)

3\. Click stage for which you want to change visibility.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/df4da5d6-fca2-4744-9a87-f35e247595c6/ascreenshot.jpeg?tl_px=0,0&br_px=1075,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=147,132)

4\. Click "eye symbol" to hide

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/e08bd126-ea2c-4e6b-9c9b-101519d67336/user_cropped_screenshot.jpeg?tl_px=117,0&br_px=1494,531&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=853,139)

:::

## Setting visibility by form value

You can set up a visibility based on a form value. This is useful when you want to hide a part of the form based on the
value of a form field.
::: tip Task
Hide a section if the value of the field is less than 3000$.
:::
::: details Step-By-Step Solution

1\. Navigate to "Design" tab.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/c2e5480b-bcd3-4652-ba95-06e8391f082d/ascreenshot.jpeg?tl_px=0,0&br_px=1075,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=-11,56)

2\. Select the correct form.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/53057d30-6aaa-41b6-ba38-72372de45998/ascreenshot.jpeg?tl_px=0,0&br_px=1075,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=155,162)

3\. Click "shield like symbol" on the object or section we want to hide.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/2c53db57-7f55-4142-bd3a-17819c373102/ascreenshot.jpeg?tl_px=582,30&br_px=1657,631&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

4\. The First line after performing this action says what actions are made when certain condition mentioned bellow is met. We
want to show a section if there is a value equal or greater than 3000$.

5\. Click the "Select Item" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/df289d53-e120-4686-810d-a9c386749580/ascreenshot.jpeg?tl_px=645,300&br_px=1720,901&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

6\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/bbdb3be9-3d05-4f2d-94a6-21c9c0c2ddb0/ascreenshot.jpeg?tl_px=655,405&br_px=1730,1006&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

7\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/bd49e2b2-c6f6-491f-981b-02534fdde0ab/ascreenshot.jpeg?tl_px=838,346&br_px=1913,947&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

8\. Type "3000"

9\. Click this dropdown and set "Less than".

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/90e08bc6-7ab7-43e9-8345-7c8dff7f1dc6/ascreenshot.jpeg?tl_px=1088,305&br_px=2163,906&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

10\. Click "+"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/85a2ea41-2f4b-4533-ab2c-83cdaa7aa5d9/ascreenshot.jpeg?tl_px=1178,287&br_px=2253,888&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

11\. Click "At least one is true (OR)"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/ef56717d-d6e5-4b25-9e41-3fb919b1bc6a/ascreenshot.jpeg?tl_px=669,360&br_px=1744,961&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

12\. Click "Apply"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/9bd54c35-1fd0-4961-ae11-5a3105eca14d/ascreenshot.jpeg?tl_px=664,422&br_px=1739,1023&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

13\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/bc957bd5-1962-482c-90ef-fe35a35e7616/ascreenshot.jpeg?tl_px=905,334&br_px=1980,935&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

14\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/167e28ee-ad10-457f-ab05-f933a36dcc52/ascreenshot.jpeg?tl_px=647,437&br_px=1722,1038&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

15\. Click this dropdown and select "Has no value" to hide a section when "currency" input is empty.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/0d7f5a70-fd69-44b2-bef2-17990fc5387e/ascreenshot.jpeg?tl_px=1037,335&br_px=2112,936&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

16\. Click "Apply and Close"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/d6231f82-0adf-4b67-af4c-2ee9d227bf6f/ascreenshot.jpeg?tl_px=1042,614&br_px=2117,1215&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

17\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/9946e2e3-ae61-4a45-8745-d62a35cb1b5a/ascreenshot.jpeg?tl_px=1485,0&br_px=2560,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=720,-13)

18\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/2b83d84f-a498-497d-b201-7aaf18dd3dff/ascreenshot.jpeg?tl_px=1485,0&br_px=2560,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=737,141)

19\. Click the "Currency" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/40fed336-7bb4-4927-b999-977ea4a43073/ascreenshot.jpeg?tl_px=274,0&br_px=1349,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,231)

20\. Type "3000"

21\. Click outside the input field, and you will see the formerly hidden section.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/76892879-764d-4415-b52d-ebc95f351b31/ascreenshot.jpeg?tl_px=442,0&br_px=1517,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,233)

22\. Click the "Currency" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/f0a7e659-7762-45c6-b41d-fe10b2252720/ascreenshot.jpeg?tl_px=262,0&br_px=1337,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,227)

23\. Click the "Currency" field and change the value to 200.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/941d277e-b02e-415b-9a8c-2dd316e5b2ee/ascreenshot.jpeg?tl_px=235,0&br_px=1310,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,230)

24\. When you click outside the box, the section becomes hidden.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/2eae6d64-462b-40d3-a33f-e6f9c18970d8/ascreenshot.jpeg?tl_px=502,0&br_px=1577,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,251)

:::