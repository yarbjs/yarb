# YARB - Yet Another React Boilerplate 🎉

[![](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://houndci.com)
[![](https://img.shields.io/github/issues/nickmjones/yarb)](https://github.com/nickmjones/yarb/issues)

Probably one of the biggest challenges in learning React is setting up the right tooling. There are lots of ways to do this like [create-react-app](https://github.com/facebook/create-react-app) and [Glitch](www.glitch.com). But none of them were quite right for me. I want flexibility and control, sure, but coming from Rails I also appreciate opinions and conventions. Enter YARB! (🎶Metallica guitars play🤘)

YARB ships with all the basic tooling you need to start playing with React and React Router. It also includes application bundling courtesy of [Parcel](https://parceljs.org), a neat zero-configuration bundler. YARB also includes out of the box SCSS/SASS support (because SASS is incredibly useful and basically necessary, even if create-react-app disagrees).

### TL;DR YARB includes:
- React, React Router
- Parcel to bundle your app
- SCSS/SASS support
- Opinionated directory structure
- [Create React Component Folder](https://www.npmjs.com/package/create-react-component-folder) support, to make component creation quick and easy


## Installation/Use
You'll need [Yarn](https://github.com/yarnpkg/yarn) and [Node](https://github.com/nodejs/node) to build and develop with YARB

- Clone or fork this repo
- `cd yarb` (or whatever you renamed it to)
- `yarn install` (or `npm install`)
- `yarn start`. This will kick off Parcel and a web server. It will reload your site automatically for you as you work 🙌
- Make cool things inside `/src`. There are some basic styles and routes included to give you a place to start.
- `yarn build` makes a static site ready to deploy on your webserver of choice for the world to see

## About Parcel
Why not just use Webpack? Mostly because it's complicated. Getting Webpack working properly can be really touchy (even in v4, which is closer to 'zeroconf' than 3 was). I'm using Parcel because it's really, truly zero configuration. In YARB, when you run

`yarn start`

you're really running

`parcel public/index.html --open`

under the hood. This tells Parcel to start, with `public/index.html` as its input. This also transpiles all your SCSS and JSX files automagically, and runs the built-in Parcel webserver at `http://localhost:1234`. Neat!

## Todo
- [x] YARB uses `HashRouter` due to some weirdness with `BrowserRouter`, which puts (as you might expect) hashes in your URLs. I'll fix this in a future release.

## See Also
- [Nick Jones](https://www.nickmjones.me) (I made this 👋)
- Learn more about [Parcel](https://parceljs.org)
