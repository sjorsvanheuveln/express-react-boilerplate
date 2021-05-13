# Express-React-Boilerplate #
* Express Backend
* React Frontend
* Hot Module Reloading!!!
* Webpack (Babel transpiling)
* Requirements: Node 16.1.0

## Description ##
The MERN setup with hot-reloading without needing webpack-dev-server.

## Lessons Learned ##
1. Read the original documents for fixing HMR
  i. https://github.com/webpack-contrib/webpack-hot-middleware
  ii. important: publicPath: '/javascripts/',
2. Success can be just around the corner!
3. Differense @use & @import in scss:
    a. https://stackoverflow.com/questions/62757419/whats-the-difference-between-import-and-use-scss-rules

## To Do ##
* Make sure hot reloading is only running in dev mode!
* React Routing
* SCSS file hierarchies

## Questions ##
1. What is the right scss setup?

## Log ##

### 13 May: HMR Breakthrough ###
My goodness we did it. The hardest part for now is over!
I just read the documents for webpack-hot-middleware and that was enough.
I try to strip it to its bare bones setup. It's not too much code to get it working.

Haha, and then it got immediately broken after css building, but fixed it 2 hours later.
Now, all good and integrated scss and postcss building!

### 14 May: ... ###