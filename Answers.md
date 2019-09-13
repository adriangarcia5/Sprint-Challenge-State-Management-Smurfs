1. What problem does the context API help solve?
Context API helps us avoid prop drilling by allowing us to pass props directly where they're needed

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions - actions are objects with a type property.
reducers - reducers are functions which take in two arguments(currentState, action) and return a new copy of state based on the changes your action makes to the current state.
store - The store is an object which holds our state in Redux.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is held at the top level and can be connected or passed to anything via a number of different state management methods (ex: the store). Component state is more specific; it exists inside of a component and is harder to pass around.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk is middleWare; it acts like a 'bouncer' for our action-creators; it checks what we pass through them, does something based on what it finds, and can then pass the data on if needed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
at the moment, I'm not completely sure what my favorite state managemnet system is, but I found to be able to wrap my head around context more than redux. Both will be better soon so I'm excited to see what I'll be able to do soon.

