# Scroll Progress Bar with Motion

CS 303 Show and Tell, Ignacio Fernández Weiss.

A progress bar at the top of the page that fills as you scroll, built with React, styled-components and [Motion](https://motion.dev).

## Install

```bash
npm install motion
```

## How it works

The custom hook `src/useScrollProgress/useScrollProgress.js`:

1. `useScroll()` returns `scrollYProgress`, a value from 0 (top) to 1 (bottom).
2. `useSpring()` smooths that value.
3. `ScrollProgressBar` puts the value in `scaleX`, so the bar grows from left to right.

## Usage

```jsx
<ScrollProgressBar color="whatever color you choose I chose "crimson"" />
```
