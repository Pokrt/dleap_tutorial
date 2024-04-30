# Workflow

The form can be divided into stages, each with its own set of rules and permissions. This allows for a more dynamic and
flexible form that can change based on the stage of the process.

## Stage

### Stage representation

You can find stages in workflow tab. Stage is represented as on image below:

![Stage image](/stage.png)

### Using stages

As name suggests, stages are the different steps in a workflow. By default, there are two stages:

- **Start** - the initial stage of the form, which is accessible to users with `Initiator` role.
- **Submitted** - the stage after the form has been submitted, which is accessible to users with `Administator` role.

![Stages diagram](/stages-diagram.png)

### Creating new stages

::: tip Task
Create a new stage named "Stage 2".
:::

::: details Step-by-Step Solution

1\. Navigate to workflow

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/722b72cd-b4d3-4ef9-930c-278f5487857a/ascreenshot.jpeg?tl_px=0,0&br_px=764,427&force_format=png&width=764&wat_scale=68&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=-4,181)

2\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/95c793a6-b933-430d-be52-88a8dbaef867/ascreenshot.jpeg?tl_px=450,151&br_px=1525,752&force_format=png&wat_scale=95&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=502,265)

3\. New stage created with name "Stage 2"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-02-25/ee197af7-2bdd-4ebb-9678-71082a528237/user_cropped_screenshot.jpeg?tl_px=0,0&br_px=604,768&force_format=png&width=880&wat_scale=78&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=923,201)

:::

## Actions

### Action representation

You can find actions in the workflow tab. Action is represented as on image below:

![Action image](/action_with_description.png)

### Action Activities

Each action can have a set of activities that are executed when the action is performed. The activities can be used to:

- Send an email
- Assign users
- Call a service

### Action Button representation in form

We have following example of workflow diagram. Notice that we have two actions in the start stage.
![Sample workflow](./workflow.png)
When we look at the form in start stage, we see two action buttons.
![Sample action buttons](./action_buttons.png)

## Branching

::: tip Exercise
Add a branch to the workflow with condition "Amount is greater than 10000" on field price.
:::

::: details Step-by-Step Solution

1\. Navigate to workflow tab.[ ](https://volt.whitesoft.eu/volt-apps/secure/org/ide/manager.html)

2\. Click here to add another branch.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/f9a62506-2315-4e43-9324-02e2f2b73a9d/ascreenshot.jpeg?tl_px=800,788&br_px=2735,1870&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,420)

3\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/0263dcc8-d543-49e1-9463-ee150f920cc8/ascreenshot.jpeg?tl_px=971,59&br_px=2906,1140&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)

4\. Select form field value or user upon witch you want to branch.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/3afb0cf9-daf6-40f1-b3fe-bb2dbac8e560/ascreenshot.jpeg?tl_px=478,208&br_px=2413,1289&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)

5\. Click this dropdown to edit condition.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/bf81d9d7-a92c-45c3-aa04-84391e8c70c8/ascreenshot.jpeg?tl_px=1174,48&br_px=3109,1129&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)

6\. Click this text field.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/bea849f0-6c27-4194-b397-6a01f43887bb/ascreenshot.jpeg?tl_px=924,170&br_px=2859,1251&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,277)

7\. Type "10000"

8\. Click "Save"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/3230e730-bc44-470b-bd28-f0fd19aef2ce/ascreenshot.jpeg?tl_px=1288,788&br_px=3223,1870&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,327)

9\. Here you can see your branches. Click "Activities" to set things such as email reminders.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/4e789d4b-76e2-4640-813f-1532670290b8/user_cropped_screenshot.jpeg?tl_px=0,0&br_px=647,1081&force_format=png&width=452&wat_scale=40&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=187,17)

10\. Click "Properties"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-04-06/cfe046cc-9ac6-4f09-b339-df92477417a0/ascreenshot.jpeg?tl_px=1906,0&br_px=3841,1081&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=767,135)

:::


