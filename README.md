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
4. React Router:
  a. exact path = '/' will only! render this component on this path
  b. so /profile won't be e.g.
5. Css/Bootstrap
  a. CSS is not being purged!
  b. How to properly implement Bootstrap
  c. 

## To Do ##
* React Routing
* How to setup Redux@latest

## Questions ##
1. What is the right scss setup?
2. React now demands proptypes to check props. Is this necessary?
  a. https://www.youtube.com/watch?v=vqwAw9ByRUw
  b. Is anti-bug/testing kind of thing. Let's ignore it for now.

## Log ##

### 13 May: HMR Breakthrough ###
My goodness we did it. The hardest part for now is over!
I just read the documents for webpack-hot-middleware and that was enough.
I try to strip it to its bare bones setup. It's not too much code to get it working.

Haha, and then it got immediately broken after css building, but fixed it 2 hours later.
Now, all good and integrated scss and postcss building!

### 14 May: ... ###
ESlint is showing some annoying errors only on the desktop this morning.
Fixed it 5 minutes later.
Disabled HMR for production.
Updated Dekstop npm
  -> New major version of npm available! 6.14.12 → 7.13.0 
  -> npm -v (check version)


## Epiphanies ##
Being angry or in an angry position is just an excuse for not facing uncertainty/insecurity. It stops the creativity.
