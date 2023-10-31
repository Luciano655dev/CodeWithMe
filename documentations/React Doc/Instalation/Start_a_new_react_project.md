# Start a New React Project
If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.

## Production-grade React frameworks 
### Next.js 
Next.js is a full-stack React framework. It’s versatile and lets you create React apps of any size—from a mostly static blog to a complex dynamic application. To create a new Next.js project, run in your terminal:
```
npx create-next-app@latest
```
If you’re new to Next.js, check out the Next.js tutorial.

Next.js is maintained by Vercel. You can deploy a Next.js app to any Node.js or serverless hosting, or to your own server. Next.js also supports a static export which doesn’t require a server.

## Remix 
Remix is a full-stack React framework with nested routing. It lets you break your app into nested parts that can load data in parallel and refresh in response to the user actions. To create a new Remix project, run:
```
npx create-remix
```
If you’re new to Remix, check out the Remix blog tutorial (short) and app tutorial (long).

Remix is maintained by Shopify. When you create a Remix project, you need to pick your deployment target. You can deploy a Remix app to any Node.js or serverless hosting by using or writing an adapter.

## Gatsby 
Gatsby is a React framework for fast CMS-backed websites. Its rich plugin ecosystem and its GraphQL data layer simplify integrating content, APIs, and services into one website. To create a new Gatsby project, run:
```
npx create-gatsby
```
If you’re new to Gatsby, check out the Gatsby tutorial.

Gatsby is maintained by Netlify. You can deploy a fully static Gatsby site to any static hosting. If you opt into using server-only features, make sure your hosting provider supports them for Gatsby.

## Expo (for native apps) 
Expo is a React framework that lets you create universal Android, iOS, and web apps with truly native UIs. It provides an SDK for React Native that makes the native parts easier to use. To create a new Expo project, run:
```
npx create-expo-app
```
If you’re new to Expo, check out the Expo tutorial.

Expo is maintained by Expo (the company). Building apps with Expo is free, and you can submit them to the Google and Apple app stores without restrictions. Expo additionally provides opt-in paid cloud services.

## Bleeding-edge React frameworks 
As we’ve explored how to continue improving React, we realized that integrating React more closely with frameworks (specifically, with routing, bundling, and server technologies) is our biggest opportunity to help React users build better apps. The Next.js team has agreed to collaborate with us in researching, developing, integrating, and testing framework-agnostic bleeding-edge React features like React Server Components.

These features are getting closer to being production-ready every day, and we’ve been in talks with other bundler and framework developers about integrating them. Our hope is that in a year or two, all frameworks listed on this page will have full support for these features. (If you’re a framework author interested in partnering with us to experiment with these features, please let us know!)