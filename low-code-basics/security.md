# Security Restrictions

The dojox.secure library creates a safe area in JavaScript where code can run without causing harm. Here's an
explanation of its rules:

- **Restricted Operations:** Certain JavaScript operations are not allowed to keep the sandbox secure:
    - **eval**, **with**, **==**, **!=**, and **[]** cannot be used. Instead, use **===** for **==**, **!==** for **!=
      **, and methods like **forEach()**, **get(index)**, and **set()** instead of **[]**.

- **Using 'this' Keyword:** The use of **this** is banned. Depending on where the code is running, different keywords
  are used:
    - For actions related to a single item, **item** or **apItem** is used.
    - For actions on a whole page or app page, **page** or **appPage** is used.
    - For actions within a form, **form** is used.

- **Limited Access to Global Variables:** See below for the list of global variables that can be accessed.

- **Banned Properties and Methods:** You can't use certain properties and methods, including but not limited to **apply
  **, **arguments**, **call**, **callee**, **caller**, **constructor**, **eval**, **prototype**, **this**, **unwatch**,
  **valueOf**, **watch**, and any property that starts or ends with **__**.


## Disabling Javascript Security

Under some circumstances, the limitations imposed by the `dojox.secure` library might be too restrictive. Therefore, the `dojox.secure` library can be disabled server-wide by modifying the configuration in `VoltConfig.nsf`. Use the Notes client to set the value of the `secureJS` setting to `false`. Also, be sure to *enable* the setting. Once the configuration is changed, the HCL Domino Leap server should be restarted to ensure that the configuration takes effect.


::: danger Important 
Changing this configuration setting should only be done if all the Domino Leap users on the server are known trusted users. Disabling JavaScript Security on a deployment of the Domino Leap that allows anonymous users to create applications could pose a serious security risk.
::: 

::: tip Note
This configuration only applies to applications that are deployed *after* making this configuration change. Applications that are deployed before this configuration change must be redeployed for the configuration to take effect.
:::
