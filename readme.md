# YARB - Yet Another React Boilerplate 🎉

<p align="center">
  <img src="https://user-images.githubusercontent.com/563451/62238724-90aeeb80-b3a1-11e9-9256-733adb2ee4dd.png" width="320px" height="320px">
</p>

[![](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://houndci.com)
[![](https://img.shields.io/github/issues/yarbjs/yarb)](https://github.com/yarbjs/yarb/issues)

Probably one of the biggest challenges in learning React is setting up the right tooling. There are lots of ways to do this like [create-react-app](https://github.com/facebook/create-react-app) and [Glitch](https://www.glitch.com). But none of them were quite right for me. I want flexibility and control, sure, but coming from Rails I also appreciate opinions and conventions. Enter YARB! (🎶Metallica guitars play🤘)

YARB ships with all the basic tooling you need to start playing with React and React Router. It also includes application bundling courtesy of [Parcel](https://parceljs.org), a neat zero-configuration bundler. YARB also includes out of the box SCSS/SASS support (because SASS is incredibly useful and basically necessary, even if create-react-app disagrees).

### TL;DR YARB includes:
- React, React Router
- Parcel to bundle your app
- SCSS/SASS support
- Opinionated directory structure
- [Create React Component Folder](https://www.npmjs.com/package/create-react-component-folder) support, to make component creation quick and easy


## Installation/Use
You'll need [Yarn](https://github.com/yarnpkg/yarn) and [Node](https://github.com/nodejs/node) to build and develop with YARB

```bash
git clone git@github.com:nickmjones/yarb.git
cd path/to/project
yarn install
yarn start
```
- Make cool things inside `/src`. There are some basic styles and routes included to give you a place to start.
- `yarn build` makes a static site ready to deploy on your webserver of choice for the world to see
- `yarn deploy` will build your site and attempt to push it to [Netlify](https://www.netlify.com). Before you do that, you'll need a Netlify [account](https://app.netlify.com/signup)

## About Parcel
Why not just use Webpack? Mostly because it's complicated. Getting Webpack working properly can be really touchy (even in v4, which is closer to 'zeroconf' than 3 was). I'm using Parcel because it's really, truly zero configuration. In YARB, when you run

`yarn start`

you're really running

`parcel public/index.html --open --no-cache`

under the hood. This tells Parcel to start, with `public/index.html` as its input. This also bundles all your SCSS and JS/JSX files automagically, and runs the built-in Parcel webserver at `http://localhost:1234`. Neat!

## Todo
Take a look at the [project issues](https://github.com/yarbjs/yarb/issues).

## Contribute
- Fork this repo.
- Make changes in a branch.
- Make a pull request.


## See Also
- [Nick Jones](https://www.nickmjones.me) (I made this 👋)
- Learn more about [Parcel](https://parceljs.org)
