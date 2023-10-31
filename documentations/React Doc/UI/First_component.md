# Your First Component
Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!

## You will learn
-> What a component is
-> What role components play in a React application
-> How to write your first React component

## Components: UI building blocks 
On the Web, HTML lets us create rich structured documents with its built-in set of tags like <h1> and <li>:
```
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>
```
This markup represents this article <article>, its heading <h1>, and an (abbreviated) table of contents as an ordered list <ol>. Markup like this, combined with CSS for style, and JavaScript for interactivity, lies behind every sidebar, avatar, modal, dropdown—every piece of UI you see on the Web.

React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app. The table of contents code you saw above could be turned into a <TableOfContents /> component you could render on every page. Under the hood, it still uses the same HTML tags like <article>, <h1>, etc.