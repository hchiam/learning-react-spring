# Learning react-spring

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://www.react-spring.io>

<https://www.react-spring.io/docs/hooks/examples>

CSS transitions _are_ performant and good enough for common one-off tasks, but react-spring has some special properties:

- not time-based
- fluid interactivity
- interruptibility
- concurrency
- and apparently things like easy [time-travel and slow-motion](https://www.youtube.com/embed/1tavDv5hXpo?controls=1&start=370)?

[Think in terms of springs instead of durations. Get natural realistic interactive fluidity.](https://github.com/react-spring/react-spring#why-springs-and-not-durations)

```bash
npm install react-spring
```

## demo from scratch

I set up `/my-app` from scratch (<https://github.com/hchiam/learning-reactjs> and <https://react-spring.io>)

```bash
npx create-react-app my-app
cd my-app
yarn add react-spring
```

```bash
yarn start
# http://localhost:3000/
```

Edit App.js

And look in the "`/src/LOOKHERE`" folder.

## demo using this repo

If you just want to run the demo that I've already built:

```bash
# gh repo clone hchiam/learning-react-spring
# cd hchiam/learning-react-spring
cd my-app
yarn
yarn start
# http://localhost:3000/
```
