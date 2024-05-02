# Workflow - Stages & Actions

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

![](/basics/0ff9e5db-5089-4e7c-aeec-6cbcb2e33e3c.png)

2\. Click here.

![](/basics/923d22de-792d-473e-a460-0a85edd23d4e.png)

3\. New stage created with name "Stage 2"

![](/basics/9fdacb24-6d46-4c26-bad7-7845e28d51d3.png)

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

![](/basics/e43bacde-d8a2-4c71-bca0-a840b4270372.png)

3\. Click this text field.

![](/basics/e52308a4-029d-4655-855a-f5c19f1b4786.png)

4\. Select form field value or user upon witch you want to branch.

![](/basics/39b72324-cd4b-4bcc-bda7-af1cf47a00cf.png)

5\. Click this dropdown to edit condition.

![](/basics/5a56a16d-b760-4423-9eae-34d1306a2b08.png)

6\. Click this text field.

![](/basics/711af9a3-e7a4-44a1-b93a-b5c16a9cb247.png)

7\. Type "10000"

8\. Click "Save"

![](/basics/ad57185b-7b3e-449e-a711-d59f6f544dcb.png)

9\. Here you can see your branches. Click "Activities" to set things such as email reminders.

![](/basics/72ebfa3c-082b-4981-9537-b2fee554ad03.png)

10\. Click "Properties"

![](/basics/c0022b43-cd2f-40de-bd8a-73d1826f8d3c.png)

:::


