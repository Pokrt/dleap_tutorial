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


1\. Click here to show item detail.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/e37d7460-fb8b-459c-843e-c52cce62764b/ascreenshot.jpeg?tl_px=39,0&br_px=1114,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,127)

2\. Add "onItemChange" event

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/da53a819-4d41-4907-b31d-3cc7075c0148/ascreenshot.jpeg?tl_px=1485,86&br_px=2560,687&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=751,265)

3\. Click "/\* Add your own JavaScript here. \*/" section to add custom JavaScript.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/2a3d7fea-b338-40e6-b6ff-3b78596a7573/ascreenshot.jpeg?tl_px=784,212&br_px=1859,813&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

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

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/5f131335-a0a6-4146-b39b-0e581123fb53/ascreenshot.jpeg?tl_px=1082,678&br_px=2157,1279&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,273)

6\. Click "Divisor"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/c7906321-478a-4157-adf3-39f25d5ee3c6/ascreenshot.jpeg?tl_px=387,0&br_px=1462,600&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,193)

7\. Click "onItemChange"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/e013400a-2a6a-415d-b03a-0242fa9b8455/ascreenshot.jpeg?tl_px=1485,80&br_px=2560,681&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=741,265)

8\. You need to add the same code for the divisor, because you do not know which element will be edited first.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/f3a27da7-9f99-457b-9163-041abe4fde67/ascreenshot.jpeg?tl_px=533,256&br_px=1608,857&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

9\. Click "OK" and you can try it.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-09/82850d12-2c87-4272-a42c-fa1a70157087/ascreenshot.jpeg?tl_px=1102,678&br_px=2177,1279&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,267)

:::