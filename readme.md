# Getting Started

A basic and lightweight react starter kit / boilerplate with the goal of providing the bare minium needed to start
an application, with a focus on both developer experience (fast and reliable feedback loop) and user experience.

## Quick Start

```
git clone https://github.com/iominh/react-basic
cd react-basic

# please use Node 6 or later
npm install # or 'yarn install' if you have [Yarn](https://yarnpkg.com/)

# start server for development
npm start

```

# Commands

## npm start

Runs application in development mode with live-reload of JS, hot-reload of CSS via the style-loader, and source-maps

## npm start:prod

Runs application in production mode with no live-reload, no hot-reload, and no source-maps

## npm run build

Creates a development build with sourcemaps

## npm run build:prod

Creates a production build with uglified JS and minified CSS bundles and no sourcemaps

## npm test

Runs test cases

## npm run stats

Generates Webpack stats to stats.json

# Demos

## Hello world

TODO

# Tech Stack

A minimal tech stack just to get things started:

* webpack
* react
* eslint

However, optional forks provide opinionated stack choices:

## Styling

## Animation

## Testing

## Inspiration

Lots of inspiration taken from [react-boilerplate](https://github.com/mxstbr/react-boilerplate)

# Development Tips and Tricks

## EditorConfig

## Eslint

## SublimeText

Some recommended plugins when using SublimeText

* https://github.com/sindresorhus/editorconfig-sublime
* https://github.com/victorporof/Sublime-HTMLPrettify

# Build Performance

Benchmarks taken on a Mid 2015 Macbook Pro Retina on macOS Sierra and Node 6.8.1

## time npm run build

```
Hash: d77620e0bdb6e10fa5f6
Version: webpack 2.1.0-beta.25
Time: 2013ms
     Asset       Size  Chunks             Chunk Names
 bundle.js     792 kB       0  [emitted]  main
index.html  286 bytes          [emitted]
    + 177 hidden modules
Child html-webpack-plugin for "index.html":
        + 4 hidden modules

real  0m3.769s
user  0m3.014s
sys 0m0.260s
```

## time npm run build:prod

```
Hash: 909e9b625a6d2e0e2b72
Version: webpack 2.1.0-beta.25
Time: 3187ms
                                    Asset       Size  Chunks             Chunk Names
                                bundle.js     149 kB       0  [emitted]  main
main.db20cde6412fd47b8116dbc5520d5386.css  637 bytes       0  [emitted]  main
                               index.html  359 bytes          [emitted]
    + 166 hidden modules
Child html-webpack-plugin for "index.html":
        + 4 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules

real  0m4.644s
user  0m4.433s
sys 0m0.259s
```
