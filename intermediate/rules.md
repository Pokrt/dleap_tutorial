# Rules

Rules allow adding an extra application logic to Forms.
For example, you can hide some items based on the value of some other item.
Rules are a set of IF-THEN conditions connected with Items.

![img_19.png](img_19.png)

- **Abilities** - 
  Rules allow you to change the visibility or enable/disable Items and Action buttons based on value of another Item, current User
  or window width or height.
  You can also use Rules to disable Action buttons when Item input value is empty.

- **Rule presence** -
  To find out whether rule is present on a specific Item, you can select it and check the "armor shield" icon.
  
  ![img_21.png](img_21.png)
  If you want to see all present rules, you can click the "armor shield" icon in the top right corner of any Item (even
  one not containing any rule).
  Then select "All" option in a right side panel.
![img_22.png](img_22.png)  



## Adding rules

::: details Step-by-step tutorial

1\. We have the following form.

![](/intermediate/856024c6-06c0-4788-b75f-8405bbf2470b.png)

2\. In your form, click the "armor shield" icon to add rule.

![](/intermediate/931bb490-86a4-4b10-b0cf-87f5b30b5422.png)

3\. We want to make Section object hidden when Price less than 3000$.

4\. Click the "Form Items" field.

![](/intermediate/5b297679-cffd-4362-8b23-69ec7d22845f.png)

5\. Click this text field.

![](/intermediate/5b2d04a4-8f9f-4506-84bb-ca24568b8229.png)

6\. Click "Section"

![](/intermediate/7cddd0e8-0636-4b2d-9c2c-6a787ea30c16.png)

7\. Click this text field.

![](/intermediate/64ffecec-005b-46dc-9a65-d8955bdd3ba5.png)

8\. Click here.

![](/intermediate/670bbbfd-8147-4d72-9653-3d2c61c621a1.png)

9\. Click this dropdown and change it to "less than".

![](/intermediate/9c9d7ceb-e998-418c-8a73-dca04628aace.png)

10\. Click this text field.

![](/intermediate/6fd55ff5-6a19-4b6d-9643-bcdf41513318.png)

11\. Type "3000"

12\. Click "Apply and Close"

![](/intermediate/482cc17d-3a52-4885-a41b-f9b2e5f4aea8.png)

:::

::: tip
It is a good practice to name rules. It can save you a lot of trouble when you have larger amount of rules.
:::


You can connect rules also with AppItems (submit buttons). This is not so straightforward because you have to
display the given button first.

::: info Exercise
Try to hide the action button when the amount is less than 4. You can use the following form.
![img_23.png](img_23.png)
:::

::: details Step-by-step solution

1\. First, you need to create your form for order. Our has one short text and one number type inputs.
![img_23.png](img_23.png)

2\. Click "Armor Shield"

![](/intermediate/7adc95a4-cd42-4416-b627-e1575112f402.png)


3\. Double-click the "Rule Name:" field.

![](/intermediate/588490af-4a42-4eba-b9f2-29b99bb2513f.png)


4\. Type "Hide Action Button"


5\. Click the "Form Items" field.

![](/intermediate/96093f02-0de3-40fd-85f7-594c558a02aa.png)


6\. Click this text field.

![](/intermediate/3a4ce53d-e798-40b7-a883-dbc8b80e8961.png)


7\. Click "Start - Submit"

![](/intermediate/6dbb1a10-8986-4ea8-be22-43d4aa56d8c9.png)


8\. Click here.

![](/intermediate/e193cdaa-b00b-4abb-8220-13ba9d63c4e8.png)


9\. Click "Amount (min. 4)"

![](/intermediate/a4f33e27-f831-44c1-ac4f-4e959559e528.png)


10\. Click this dropdown and change it to "less than".

![](/intermediate/a578b3cd-3f11-462e-b37e-114030c41b5a.png)


11\. Click this text field.

![](/intermediate/b4975a0b-c341-487e-a38b-5ac3181ab45b.png)


12\. Type "4" (image has a mistake)


13\. Click "+" to add another condition.

![](/intermediate/1af8fb8d-e7e6-48f9-b0f6-32ece8cea8b9.png)


14\. Click "At least one is true (OR)"

![](/intermediate/1c1c824d-34cd-4e28-b59d-42fab17c2544.png)


15\. Click "Apply"

![](/intermediate/eb71efdb-bad7-4565-bb74-3b37cf73832d.png)


16\. Click this text field.

![](/intermediate/457a02bf-5039-4d60-b8f7-0aadb5da8e01.png)


17\. Click "Amount (min. 4)"

![](/intermediate/63f74686-94a4-4177-8a76-bebb3f285abc.png)


18\. Click this dropdown.

![](/intermediate/13f2ab64-ce8d-4b59-b086-697bcb687ad7.png)


19\. Click "Apply"

![](/intermediate/e25b02ed-50b4-4ec5-8d3e-0f39d30d69ae.png)


20\. Click "Add Rule"

![](/intermediate/b6c202ed-d62e-4fc3-82e2-505091527fc2.png)


21\. Double-click the "Rule Name:" field.

![](/intermediate/0b990522-1bb2-410b-9723-a9f9259e6706.png)


22\. Type "Show Item"


23\. Click this text field.

![](/intermediate/b9e5c5a6-110a-4cd7-b5b3-7a3793f937e5.png)


24\. Click "Start - Submit"

![](/intermediate/f0d80116-6a2e-4c7c-a7a2-ad160f501d09.png)


25\. Click this dropdown.

![](/intermediate/0916b5f8-360b-4064-b561-365431e32e98.png)


26\. Click the "Form Items" field.

![](/intermediate/981aa3cd-8580-4550-a2a9-d4ecbcd6044d.png)


27\. Click this text field.

![](/intermediate/c16c9b94-fcc2-486b-a2b0-7e98bcc26dfd.png)


28\. Click "Amount (min. 4)"

![](/intermediate/5265a5c6-b0c3-4d43-8295-e1ce1cf5156b.png)


29\. Click this dropdown.

![](/intermediate/d7b70a1e-12c7-41a3-8346-55109ece4f34.png)


30\. Click here.

![](/intermediate/93a26338-6de3-4a60-a63b-ba46a0145072.png)


31\. Click this text field.

![](/intermediate/e3c56d07-e276-44e5-88b1-f437d8a7b577.png)


32\. Type "4"


33\. Click "Apply"

![](/intermediate/b75aa491-6d4f-413e-af72-933a66a3e416.png)


34\. Click "Apply and Close"

![](/intermediate/5c6d95c4-d927-4344-98aa-48554329af63.png)


35\. Save your app.

![](/intermediate/e47cf09b-a862-4663-b0af-39930705952c.png)


36\. We entered proper amount so you se submit button.

![](/intermediate/807b0e9d-0370-4420-8f75-d9cfa7484c4b.png)


37\. In this case you can not see submit button because we have entered wrong amount.

![](/intermediate/f9447720-c018-4b6a-8532-fd8b6a72dd3a.png)


:::

