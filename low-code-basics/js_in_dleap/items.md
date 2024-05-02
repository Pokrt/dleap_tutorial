# Working with Items

You should be already familiar with the fact that items in HCL Domino Leap consist of GUI and data part. In this
chapter,
we will discuss how to work with items using JavaScript.

::: tip Example
We want to calculate modulo of tvo values.

Start by creating the following form in the app.

![img_1.png](img_1.png)
:::

::: details Step-by-Step solution

examples todo  - set items visible 
todo make item required 
make item not valid 
display number of characters 
show warning alert 
set & get item value
set item content
set help text,  
set hint text, 
tśet hover text

1\. Click here to show item detail.

![](/low-code-basics/js_in_dleap/36c07f14-ea2d-421d-97b5-e891f26ca749.png)

2\. Add "onItemChange" event

![](/low-code-basics/js_in_dleap/a01a8d28-d62a-4caf-8be1-43851453d07f.png)

3\. Click "/\* Add your own JavaScript here. \*/" section to add custom JavaScript.

![](/low-code-basics/js_in_dleap/894706a6-bb0a-40bb-bdb7-eda9ed91ce75.png)

4\. Add the following code.\

``` javascript
let result = page.F_Number3;\
let divient = page.F_Number1.getValue();\
let divisor = page.F_Number2.getValue();

if( divient && divisor){\
console.log(divient % divisor);\
result.setValue(divient % divisor);\
}
```

5\. Click "OK"

![](/low-code-basics/js_in_dleap/7ee660a5-6f7b-415d-9429-c50300694dc0.png)

6\. Click "Divisor"

![](/low-code-basics/js_in_dleap/b407b19d-6669-4a3f-9908-768eaa431dcd.png)

7\. Click "onItemChange"

![](/low-code-basics/js_in_dleap/c68b0c37-350f-4b86-ab41-797c6627f742.png)

8\. You need to add the same code for the divisor, because you do not know which element will be edited first.

![](/low-code-basics/js_in_dleap/468a70b8-d975-404c-bcbf-46d648c5399a.png)

9\. Click "OK" and you can try it.

![](/low-code-basics/js_in_dleap/15fa1b52-bf97-440c-b89a-ab16cea19a82.png)

:::
