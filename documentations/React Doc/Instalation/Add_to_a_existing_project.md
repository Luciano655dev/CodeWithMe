# Add React to an Existing Project
If you want to add some interactivity to your existing project, you don’t have to rewrite it in React. Add React to your existing stack, and render interactive React components anywhere.

## Using React for an entire subroute of your existing website 
Let’s say you have an existing web app at example.com built with another server technology (like Rails), and you want to implement all routes starting with example.com/some-app/ fully with React.

### Here’s how we recommend to set it up:
-> Build the React part of your app using one of the React-based frameworks.
-> Specify /some-app as the base path in your framework’s configuration (here’s how: Next.js, Gatsby).
-> Configure your server or a proxy so that all requests under /some-app/ are handled by your React app.
This ensures the React part of your app can benefit from the best practices baked into those frameworks.

## Using React for a part of your existing page 
Let’s say you have an existing page built with another technology (either a server one like Rails, or a client one like Backbone), and you want to render interactive React components somewhere on that page. That’s a common way to integrate React—in fact, it’s how most React usage looked at Meta for many years!

### You can do this in two steps:
1 -> Set up a JavaScript environment that lets you use the JSX syntax, split your code into modules with the import / export syntax, and use packages (for example, React) from the npm package registry.
2 -> Render your React components where you want to see them on the page.
The exact approach depends on your existing page setup, so let’s walk through some details.