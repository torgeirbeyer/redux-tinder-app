## containers
- make the most parent component that cares about the data the container
- containers are also called smart containers because they have a direct connection with redux
- we only create containers out of components that care about a particaular state
- only the most parent component that uses a particular piece of state needs to be connected to redux
 - container is a normal react component
 - gets bonded to the application state 
 - when application state changes the container will rerender aswell

 ## redux
 - redux is in charge of managing our applications state and that state is a single plain javascript object
 - application state is completly different from a component state
 - there are absolutley no tie between application state and component state
 - reducers form the application state
 - thy get tied together with the combineReducers function 
 - our reducers are in charge of changing application state over time
 - they to that with actions.
 - when actions are dispatched they flow through all the different reducers.
 - reducers then have the option to return a different state, or not, based on the type property of the action.


