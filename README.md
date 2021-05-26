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
* Expand Passport to Socials
* Finally remove redux-logger?
* Fix database duplicates and security.

## Questions ##
1. React now demands proptypes to check props. Is this necessary?
  a. https://www.youtube.com/watch?v=vqwAw9ByRUw
  b. Is anti-bug/testing kind of thing. Let's ignore it for now.
2. React Router can't reload pages where a nested route doesn't exist.
  -> /account/login won't be reloaded as /account doesn't exist.
3. How to combine Passport strategies.
4. 

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
  -> No password required no more.
4. Implemented login stuff.
5. Error Page handling.

### 22 May: Work = Great ###
Just start and it will flow!
Did a lot of login stuff and most of it I understand.

### 24 May: ... ###
1. Is it ok to return salts and hashes?
  a. Why is the password not send back by default (what controls that?)
2. Session needs to persist a log in user.

### 25 May: PUSH ###
I always think I'm not gonna figure it out. But I should assume things are possible and I could understand them. Today I was able to apply my own login-redux setup through redux-thunks. Took a while, but now it's working the way I want it. I continue the road for understandable, readable DRY code.

1. Check and experiment with the error handlers.
2. Refactor logout to the slice file!
3. Are React.components refactorable to useState functionalities?

### 25 May: Natural Resistance ###
Always takes me time to start. But once I start it's good.
Build Registration Succes Page
Checksession non-user login problem fixed.

to do:
1. Registration error handling!
  a. Incomplete data
  b. Duplicates
  c. Already registered -> otherwise we have a bug now


## Epiphanies ##
Being angry or in an angry position is just an excuse for not facing uncertainty/insecurity. It stops the creativity.

