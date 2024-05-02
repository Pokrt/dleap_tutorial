# Item visibility
A common technique in form development is to create rules that hide certain items according to value of some other item. Second, you may need to hide certain parts of your form depending on its stage. 

## Overview

The visibility of a page item can be controlled by the stage in which it is displayed. This is useful for
creating dynamic forms that change based on the stage of the process. This can be used in combinations with different
roles. For example, a form may have a visible set of questions for the "New" stage than for the "Approved" stage.


## Rule-based visibility

You can configure item visibility based on a form value. This is useful when you want to hide a part of the form based on the
value of a form field.

::: tip Task
Hide a section if the value of the field is less than 3000$.
:::
::: details Step-By-Step Solution

1\. Navigate to "Design" tab.

![](/basics/fb3a0b62-3395-48b0-bcc4-504cfa35a9cb.png)

2\. Select the correct form.

![](/basics/b69084d1-7e6e-47d2-8de6-1cb4798b5989.png)

3\. Click "shield like symbol" on the object or section we want to hide.

![](/basics/8bcf3c31-4ded-4bc5-96ba-d4ab92a1a13c.png)

4\. The First line after performing this action says what actions are made when certain condition mentioned bellow is met. We
want to show a section if there is a value equal or greater than 3000$.

5\. Click the "Select Item" field.

![](/basics/800724b6-7c83-4aad-86bc-b16998b938b5.png)

6\. Click here.

![](/basics/8466f62e-5d70-4c46-8ba0-dc0db95e9ad5.png)

7\. Click this text field.

![](/basics/04f7af72-c2cd-426d-b9aa-8c800c40a7db.png)

8\. Type "3000"

9\. Click this dropdown and set "Less than".

![](/basics/e5a8962f-0e9f-4ec0-a416-2dd6f60b84f3.png)

10\. Click "+"

![](/basics/d10d2a2a-e236-473f-ab49-7fdf4fa6e474.png)

11\. Click "At least one is true (OR)"

![](/basics/991e8076-d1e3-4904-a9f4-0034883f73cb.png)

12\. Click "Apply"

![](/basics/bddece92-d324-4b97-912b-20d731a6225a.png)

13\. Click this text field.

![](/basics/e10995e0-484d-4368-86df-d05070030b82.png)

14\. Click here.

![](/basics/3322f7d6-3f06-4c1e-aef7-6690abc3cc0a.png)

15\. Click this dropdown and select "Has no value" to hide a section when "currency" input is empty.

![](/basics/a6a557cb-d7fb-4b90-98f3-491c260b2908.png)

16\. Click "Apply and Close"

![](/basics/31c281be-90b4-486b-b92a-34f466535718.png)

17\. Click here.

![](/basics/6743c66f-8381-4778-ac35-f4ba118d6faf.png)

18\. Click here.

![](/basics/5b7b7dd0-8054-48b2-8e02-8d951c006ed0.png)

19\. Click the "Currency" field.

![](/basics/4fb30b20-d5a4-4c22-9f7d-1dc024f3cae9.png)

20\. Type "3000"

21\. Click outside the input field, and you will see the formerly hidden section.

![](/basics/ab3f1e60-dc3a-41de-b86e-2b04c3c9ed1a.png)

22\. Click the "Currency" field.

![](/basics/9bf7440c-6a50-4470-926c-7a70d4a5ae58.png)

23\. Click the "Currency" field and change the value to 200.

![](/basics/ffcbce73-b101-4f70-9e4f-c1952e461fb5.png)

24\. When you click outside the box, the section becomes hidden.

![](/basics/d48a09ec-68d3-4770-8f9f-7433afbb0a59.png)

:::


---

## Stage-based visibility

You can hide different page objects (like text fields, etc.) or even whole pages. This is useful when you want to hide a part of the form in a
certain stage.

::: tip Exercise
Try to change the visibility of the text field in stage "Submitted".
:::

::: details Step-by-Step Solution

1\. Go to workflow tab

![](/basics/e59fea42-befe-48d8-9f3c-0cacaf681884.png)

2\. Click "Visibility"

![](/basics/7b13c79d-01be-4dcc-9a29-a8a413d6ec19.png)

3\. Click stage for which you want to change visibility.

![](/basics/15adf414-c704-48a7-b8e1-df15a97db021.png)

4\. Click "eye symbol" to hide

![](/basics/4dfb4c22-9cda-435e-993d-569f987a26d1.png)

:::
