# The DOM

### What is the DOM?
### Representing HTML in the DOM
### Text Nodes
### Whitespace Nodes

## What is the DOM?
=======================

DOM stands for **Document Object Model**

##  Representing HTML in the DOM 
========================================

The DOM provides an interface between JavaScript and HTML

When a browser loads an HTML document, it will internally represent it with the DOM, best visualized as a tree graph

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>DOM Ecample</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Welcome to my Webpage.</p>
</body>
</html>
```
would look like this:
![DOM TREE](../../Week-1/images/DOM-tree.png?raw=true "DOM")

This is not entirely accurate, as whitespace is not included...

The HTML element is also known as the **root node**

You can refer to each section(node) of the DOM as branches

You can refer to the relationships of the nodes as **Parent**, **Child**, as well as **Siblings**

So, following the example HTML given:
```html
<html> = Parent
<head> & <body> = Children of HTML && Siblings(because they have the same parent) && Parents of <title>, the <h1>, and the <p>(respectively).
The <h1> & <p> are Siblings because they have the same Parent(<body>)
Then at the very bottom you have what are called Text Nodes

```

Here's another example using a \<table>:
```html

<html>
    <body>
        <table>
            <tbody>
                <tr>
                    <td>1</td><td>2</td><td>3</td>
                </tr>
                <tr>
                    <td>A</td><td>B</td><td>C</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
```
![Table](../../Week-1/images/table.png?raw=true "Table")

Here's another example of Text Nodes that also have IDs:

```html

<html>
    <body id="theBody">
        <p id="firstP">
            Hello
        </p>
        World
        <br>
        <p id="secondP">
            How are you?
        </p>
    </body>
</html>

```
![Text Nodes](../../Week-1/images/text-nodes.png?raw=true "Text Nodes")

As you can see, attributes are part of the node and they are not given their own node.
Notice that the "World" is now a Child node of the \<body> element because it's not nested inside of any element and it's also a Sibling of the \<p> element as the other text nodes are. 

Text Nodes can be a Sibling to HTML nodes not only their Children. 

However, Text nodes cannot have children of their own.
There's no way to nest anything else inside a Text node. The same is true of void elements. Because void elements cannot have anything nested inside of them. So, they can be Siblings or Children to other nodes, but it cannot be a Parent to a Child node.

## WHITESPACE NODES
==========================

The actual DOM representation of this:
```html
<html>
    <body>
        <p>Hello World</p>
    </body>
</html>
```
Looks like this:
![Whitespace Nodes](../../Week-1/images/whitespace-nodes.png?raw=true "Whitespace Nodes")

The whitespace that you see in the source code, which isn't shown in the browser become Text Nodes that are called **Whitespace** **Nodes**.

This includes line breaks, tabs, and any spaces that are not part of other text content.

The space in-between Hello and World does not count because it's part of the string(it's inside the \<p> element).

If it was written like this:
```html
<html>
<body><p>Hello World</p></body>
</html>
```
The output would not have any Whitespace Nodes:

![Whitespace Nodes](../../Week-1/images/whitespace-nodes-sans.png?raw=true "Whitespace Nodes")

When writing JavaScript and interacting with the DOM you need to be aware that Whitespace Nodes exist, to run into less errors. 

