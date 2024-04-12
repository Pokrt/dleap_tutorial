# Rules

Rules allow adding an extra application logic to Forms.
For example, you can hide some items based on the value of some other item.
Rules are a set of IF-THEN conditions connected with Items.

![img_19.png](img_19.png)

- **Abilities** - 
  Rules allow you to change the visibility or enable/disable Items and ActionButtons based on another Item, current User
  or window width or height.
  You can also use as such when Item input value is empty, the action buttons are disabled.

- **Rule presence** -
  To find out whether rule is present on a specific Item, you can select it and check the "armor shield" icon.
  
  ![img_21.png](img_21.png)
  If you want to see all present rules, you can click the "armor shield" icon in the top right corner of any Item (even
  one not containing rule).
  Then select "All" option in a right side panel.
![img_22.png](img_22.png)  



## Adding rules

::: details Step-by-step tutorial

1\. We have the following form.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/0cb7265c-61b1-4840-b75c-a1b81e36600e/screenshot.jpeg?tl_px=0,0&br_px=871,506&force_format=png&width=983)

2\. In your form, click the "armor shield" icon to add rule.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/5e9b0195-b958-4097-8da7-f06073d10590/ascreenshot.jpeg?tl_px=577,0&br_px=1652,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,227)

3\. We want to make Section object hidden when Price less than 3000$.

4\. Click the "Form Items" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/90faecd1-b7b5-4470-be4c-dd187edd7886/ascreenshot.jpeg?tl_px=888,199&br_px=1963,800&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

5\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/95eb495d-3b45-4794-8db1-b1090af7d512/ascreenshot.jpeg?tl_px=894,200&br_px=1969,801&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

6\. Click "Section"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/fb6667f6-02aa-4450-8040-87e5f03e7949/ascreenshot.jpeg?tl_px=585,312&br_px=1660,913&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

7\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/43c422b7-0fb9-4018-9586-17c97632ca2c/ascreenshot.jpeg?tl_px=894,297&br_px=1969,898&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

8\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/5748f4a8-6363-4c29-9faa-8aacadce8cfa/ascreenshot.jpeg?tl_px=667,377&br_px=1742,978&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

9\. Click this dropdown and change it to "less than".

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/bd55f1c1-c208-4eb0-90af-e51eff46cc72/ascreenshot.jpeg?tl_px=998,301&br_px=2073,902&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

10\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/96d9f1c3-b7ab-471b-889e-318584cbbb39/ascreenshot.jpeg?tl_px=773,341&br_px=1848,942&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

11\. Type "3000"

12\. Click "Apply and Close"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-27/805c34a1-0ee7-4c93-92a9-517cd253a847/ascreenshot.jpeg?tl_px=1002,617&br_px=2077,1218&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

:::

::: tip
It is a good practice to name rules. It can save you a lot of trouble when you have multiple rules.
:::


TODO You can connect rules also with AppItems (submit buttons). This is not so straightforward because you have to
display the given button first.
TODO step-by-step hide actionbutton

::: tip Exercise
Try to hide the action button when the amount is less than 4. You can use the following form.
![img_23.png](img_23.png)
:::

::: Step by step solution

1\. First, you need to create your form for order. Our has one short text and one number type inputs.
![img_23.png](img_23.png)

2\. Click "Armor Shield"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/c9b38f82-7be0-42a4-98f2-dbdc190a1f57/ascreenshot.jpeg?tl_px=1048,0&br_px=2983,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,141)


3\. Double-click the "Rule Name:" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/538d4fe2-9b56-447d-ae97-4228198cfacf/ascreenshot.jpeg?tl_px=843,0&br_px=2778,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,276)


4\. Type "Hide Action Button"


5\. Click the "Form Items" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/0a36d878-60e6-43fa-af50-ed8d194ea88c/ascreenshot.jpeg?tl_px=1068,163&br_px=3003,1244&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


6\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/607a6233-e1b0-4b4f-b0f2-9f6293147f4f/ascreenshot.jpeg?tl_px=1239,140&br_px=3174,1221&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


7\. Click "Start - Submit"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/3828ac8a-4b6e-4900-ac23-3303ebf1d6b3/ascreenshot.jpeg?tl_px=755,298&br_px=2690,1379&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


8\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/32d959d1-2660-411f-9076-17bd2f1c4007/ascreenshot.jpeg?tl_px=1257,338&br_px=3192,1419&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


9\. Click "Amount (min. 4)"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/500597c3-d9b6-49d4-86b6-d1bfac0f21e2/ascreenshot.jpeg?tl_px=683,469&br_px=2618,1550&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


10\. Click this dropdown and change it to "less than".

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/b2bf033f-6d30-47bf-bd09-1a707afab443/ascreenshot.jpeg?tl_px=1534,314&br_px=3469,1395&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


11\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/8cde8f17-f7cf-42fc-83af-e73bac065063/ascreenshot.jpeg?tl_px=1030,419&br_px=2965,1500&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


12\. Type "4" (image has a mistake)


13\. Click "+" to add another condition.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/ff62343b-0299-485f-8dfb-d07d9b50eff6/ascreenshot.jpeg?tl_px=1743,311&br_px=3678,1392&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


14\. Click "At least one is true (OR)"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/26e4c24f-40f1-4da2-8ee8-73a7abd5be0d/ascreenshot.jpeg?tl_px=906,422&br_px=2841,1503&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


15\. Click "Apply"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/cacc2e18-8239-4b4c-8a05-bb514a9394fc/ascreenshot.jpeg?tl_px=818,545&br_px=2753,1626&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


16\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/45bc2ce0-1441-40eb-b91f-02a7405785bb/ascreenshot.jpeg?tl_px=1241,386&br_px=3176,1467&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,276)


17\. Click "Amount (min. 4)"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/cf509bc0-a397-4a78-bf87-f2d3ce035c57/ascreenshot.jpeg?tl_px=782,221&br_px=2717,1302&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


18\. Click this dropdown.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/fca65ce6-41e9-4341-ac11-7e614a76c5d1/ascreenshot.jpeg?tl_px=1432,395&br_px=3367,1476&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


19\. Click "Apply"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/f60c5c83-dfd9-480d-af20-37622d212a8d/ascreenshot.jpeg?tl_px=1201,788&br_px=3136,1870&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,338)


20\. Click "Add Rule"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/fd695cda-f2c8-4dca-84b7-74f7ce64ca38/ascreenshot.jpeg?tl_px=238,761&br_px=2173,1842&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


21\. Double-click the "Rule Name:" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/8adc03c1-6a9c-4e2c-8325-804c8a097cc0/ascreenshot.jpeg?tl_px=937,0&br_px=2872,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,273)


22\. Type "Show Item"


23\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/df2f9136-66d6-4726-baa6-b411c968124e/ascreenshot.jpeg?tl_px=1248,161&br_px=3183,1242&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


24\. Click "Start - Submit"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/6006bb45-5278-4b2e-be93-3fd89a234817/ascreenshot.jpeg?tl_px=829,309&br_px=2764,1390&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


25\. Click this dropdown.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/f25facaa-3b09-4210-925d-29395e6d9f29/ascreenshot.jpeg?tl_px=1453,156&br_px=3388,1237&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


26\. Click the "Form Items" field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/bc1f93bb-2a15-4878-8a84-957ce9aaedd3/ascreenshot.jpeg?tl_px=814,329&br_px=2749,1410&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


27\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/2a6ef90d-c92d-4fd1-8eed-bcb9c164144b/ascreenshot.jpeg?tl_px=1239,329&br_px=3174,1410&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


28\. Click "Amount (min. 4)"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/6cb53b40-f3c1-40e8-9b29-b4c2c0fcfc85/ascreenshot.jpeg?tl_px=778,467&br_px=2713,1548&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


29\. Click this dropdown.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/88dffa3b-3e58-40cc-b58d-38da47ecffb0/ascreenshot.jpeg?tl_px=1403,327&br_px=3338,1408&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)


30\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/91d36597-2364-4fe1-9f5f-a0731481a4c7/ascreenshot.jpeg?tl_px=1448,379&br_px=3383,1460&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,276)


31\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/f104c1f3-d9a9-49d7-8365-ce453fd58c9a/ascreenshot.jpeg?tl_px=1268,426&br_px=3203,1507&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)


32\. Type "4"


33\. Click "Apply"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/3876c78a-94db-48dc-b8c6-e3693311fe74/ascreenshot.jpeg?tl_px=1203,788&br_px=3138,1870&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,351)


34\. Click "Apply and Close"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/7c977274-e772-4428-9cc9-8bfc8868e5da/ascreenshot.jpeg?tl_px=1511,788&br_px=3446,1870&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,331)


35\. Save your app.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/3772acf1-51ac-4e70-9cf7-c115c990795e/ascreenshot.jpeg?tl_px=1906,0&br_px=3841,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=843,-11)


36\. We entered proper amount so you se submit button.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/e35313e4-3deb-46cd-b2cc-fd1029681057/ascreenshot.jpeg?tl_px=609,0&br_px=2544,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,209)


37\. In this case you can not see submit button because we have entered wrong amount.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-12/23cb79f6-5754-40c6-a3aa-2d9fb746c79b/ascreenshot.jpeg?tl_px=206,0&br_px=2141,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,204)


:::

## Additional resources

[Rule types](https://help.hcltechsw.com/domino-leap/1.1.3/ru_creating_rules_in_your_form.html)
