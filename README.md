# Express-React-Boilerplate #
* Express Backend
* React Frontend
* Hot Module Reloading!!!
* Webpack (Babel transpiling)
* Requirements: Node 16.1.0

## Description ##
The MERN setup with hot-reloading without needing webpack-dev-server.

## Required Implementations ##
* Social Media login
* Invite a friend
* Delete account
* Weekly mails

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
  b. How to properly implement Bootstrap -> Read the Docs!
6. Passport
  -> Local is a login strategy based on email & password from the local database.

## To Do ##
* How to setup Redux@latest
* Passport setup tutorial

## Questions ##
1. React now demands proptypes to check props. Is this necessary?
  a. https://www.youtube.com/watch?v=vqwAw9ByRUw
  b. Is anti-bug/testing kind of thing. Let's ignore it for now.
2. React Router can't reload pages where a nested route doesn't exist.
  -> /account/login won't be reloaded as /account doesn't exist.

## Log ##
### 13 May: HMR Breakthrough ###
My goodness we did it. The hardest part for now is over!
I just read the documents for webpack-hot-middleware and that was enough.
I try to strip it to its bare bones setup. It's not too much code to get it working.

Haha, and then it got immediately broken after css building, but fixed it 2 hours later.
Now, all good and integrated scss and postcss building!

### 14 May: CSS ###
ESlint is showing some annoying errors only on the desktop this morning.
Fixed it 5 minutes later.
Disabled HMR for production.
Updated Dekstop npm
  -> New major version of npm available! 6.14.12 → 7.13.0 
  -> npm -v (check version)

### 15 May: How to Develop? ###
1. Doe tutorials over Bootstrap/SASS/purging
  a. Check closebrace.
  b. What is the best way to include BS (during dev)
    i. Maybe just include it in the view index for dev.
    ii. I guess reactstrap one uses just to build the functionality
      and the transitions to doing the css later.
  c. What is the best way to develop... -> css/functionality???

### 17 May: Lazy ###
Hard to start today. Don't know how to proceed? I don't have the css
purging figured out yet. But perhaps I don't need to know that now.
1. Basically it is already sort of purging, but not yet fully optimal.
  -> Let's move on!

### 20 May: Continued after Lazy ###
1. Fixed bootstrap/css hotreloading + found a workable quick setup for dev and css quick compiling
2. Reactstrap only works with bootstrap 4. -> not bad, just for dev purposes!
3. Added 2FA for github. Now need to use personal access tokens.

## Epiphanies ##
Being angry or in an angry position is just an excuse for not facing uncertainty/insecurity. It stops the creativity.
