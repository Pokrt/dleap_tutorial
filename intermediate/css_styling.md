# Vissual Appearence

Domino Leap allows you to easily style your Forms. There are multiple out-of-box visual styles available and you can
style each item using a built-in WYSIWYG editor.

![img_35.png](img_35.png)

Built-in editor enables you to change colors, fonts, sizes, etc. In addition, you can also use custom CSS to control the look of your application.

![img_29.png](img_29.png)

## Style Editor

![Cutom theme expample](/custom_theme.png)

::: tip Exercise
Make button on the website rounded.
![Custom Button](/custom_button.png)
:::

::: details Step-by-Step Solution

1\. Navigate to "Style" tab.

![](/intermediate/76efa66a-eceb-4ad8-951f-cf749e92e084.png)

2\. Click this dropdown to select one of predefined themes.

![](/intermediate/86ca1d9f-4f99-4e21-96d7-d5c994e89b16.png)

3\. Click "Customize" to edit style in detail.

![](/intermediate/2a802d71-aa31-4e74-a46e-76fd34b5f052.png)

4\. Click here.

![](/intermediate/b9116db8-1d35-4749-87ee-1e955ca52647.png)

5\. Click this image.

![](/intermediate/05e48367-d667-4729-b2de-84e59e9ebaa0.png)

6\. Click this text field.

![](/intermediate/902011d9-cc3c-4607-8f0b-2c9af8f4d884.png)

7\. Type "10"

8\. Click this close icon.

![](/intermediate/91829a74-6641-44ac-a4b7-92333c1d5505.png)

9\. Click "OK"

![](/intermediate/43fe124c-713b-4928-a8f9-29b9f0c6008f.png)

:::

## Working with CSS

You can control the style of your website applications using CSS.
To do that, you need to add a custom CSS declarations to your
project in your style editor or in your custom CSS file.
Then you need to custom classes in your items to correspond to the selectors in the CSS.

![img_30.png](img_30.png)

**Styling by ID:** Only one element can have a particular ID so styling by ID is used when you want to style only one element.
```css

#myId {
  background-color: lightblue;
  color: white;
  padding: 10px;
  text-align: center;
}
```


**Styling by class:** You can apply the same class to multiple elements. This is useful when you want to style multiple elements in the same way.
```css
.myClass {
  background-color: lightblue;
  color: white;
  padding: 10px;
  text-align: center;
}
```

**Adding Custom CSS file:** You can add custom CSS file to your project. To do that, you need to click on "Add file" button, and then you can add your custom CSS file.
![img_31.png](img_31.png)


Advanced web developers can explore CSS styles using some web development tools and create their own CSS classes.

Unfortunately, you cannot change the default product icon or change the color of the top bar easily.
