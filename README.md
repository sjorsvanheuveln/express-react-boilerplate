# Express-React-Boilerplate #
* Express Backend
* React Frontend
* Hot Module Reloading!!!
* Webpack (Babel transpiling)
* Requirements: Node 16.1.0

## Description ##
The MERN setup with hot-reloading without needing webpack-dev-server.

## How to Run ##
1. Make sure to use Node 16.1.0 => ```nvm use stable```
  * Otherwise errors like: BigInt() Reference Error

## Required Implementations ##
* Social Media login
* Invite a friend
* Delete account
* Weekly mails

## Lessons Learned ##
1. Read the original documents for fixing HMR
  * https://github.com/webpack-contrib/webpack-hot-middleware
  * important: publicPath: '/javascripts/',

2. Success can be just around the corner!

3. Differense @use & @import in scss:
  * https://stackoverflow.com/questions/62757419/whats-the-difference-between-import-and-use-scss-rules

4. React Router:
  * exact path = '/' will only! render this component on this path
  * so /profile won't be e.g.

5. Css/Bootstrap
  * CSS is not being purged!
  * How to properly implement Bootstrap -> Read the Docs!

6. Passport
  * Local is a login strategy based on email & password from the local database.

7. Backend / Redux / createAsyncThunk / Error Handling:
  a. [auth.extraReducer.rejected] 
    * is triggered by: throw Error('your error message');
    * this will attach and error object into action.error
  b. response.ok = false can be triggered from the backend by:
    * es.status(400/401/etc);
  c. Basically the only thing that the backend does is returning objects!
  d. The function used inside Async Thunk is the "payloadCreator"!
    * Whatever is returned from that function is attached to action.payload
      - Which doesn't have to be an object. But preferably
  e. res.send(JSON.stringify({})) === res.json({})
    though the type is set to HTML/text in send
  f. Models 
    * model.find: -> returns an empty array with no results
    * model.findOne: -> returns null with no results



## To Do ##
* Expand Passport to Socials

## Questions ##
1. React now demands proptypes to check props. Is this necessary?
  a. https://www.youtube.com/watch?v=vqwAw9ByRUw
  b. Is anti-bug/testing kind of thing. Let's ignore it for now.
2. React Router can't reload pages where a nested route doesn't exist.
  -> /account/login won't be reloaded as /account doesn't exist.
3. How to combine Passport strategies.
4. So logging in basically just getting a user object from the database into the state.
  -> Can't the state be hacked in a way through insertion of some kind?


## Log ##

