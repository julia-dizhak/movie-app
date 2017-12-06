# create-react-app
Create React apps by egghead course [start learning react](https://egghead.io/courses/start-learning-react)
React version is 16.02


## Lesson 1: use [create-react-repo](https://github.com/facebookincubator/create-react-app) to setup a simple react app
React requires some initial setup before we can get going with the app.
```
yarn global add create-react-app
create-react-app my-app
cd my-app
yarn start
```

react
react-dom


## Lesson 2: write a react Component
Create a React component by ES6 class and by stateless function component (no render, no state)

JSX html like syntax - is a preprocessor step that adds XML syntax to JavaScript.
You can definitely use React without JSX but it makes React a lot more elegant.
Just like XML (extensible markup language), JSX tags have a tag name, attributes, and children. An attribute value is enclosed in quotes, the value is a string.

Attribute ClassName (class reserved in HTML)

Custom components with a capital letter, native HTML DOM element - by lowercase.

Props are how we pass data around React.


## Lesson 3: display output in React with a render method
How to structure JSX in a React component.
ReactDOM.render() method return DOM representation of component.


## Lesson 4: set properties on React Components
We can pass data into component by using props.

typechecking with propTypes

defaultProps


## Lesson 5: manage React Component state with setState
State is used for properties on a component that will change, versus static properties that are passed in.


## Lesson 6: use React Components as children for other Components.
React Component can output other React Component.


## Lesson 7: access nested data with React props.children.
When you're building your React Components, you'll probably want to access child properties of the markup. This.props.children accesses the innerHTML or nested components of another component.


## Lesson 8: add custom propType validation to React Components.
In addition to the types built into PropTypes, we can also define our own custom propType validator.


## Lesson 9: normalize events with React synthetic event system.
Event handlers are passed an instance of SyntheticEvent in React: take a look at the wide range of events available to us, including Touch events.


## Lesson 10: use React ref to get a references to specific components.
Refs are a way to reference a node, or an instance of a component in application.

Ref - returns the node that we are referencing.

The ref attribute or prop can also take a callback.

ReactDOM


## Lesson 11: understand the React Component lifecycle methods
"Mounting" - component is added to the DOM
"Unmounting" - component is removed from the DOM

componentWillMount () -
componentDidMount() is going to fire off once our component has actually been mounted to the DOM


## Lesson 12: manage React Component state with Lifecycle methods.
In component willMount, we have access to our state and our props, but we do not have access to the DOM representation of our component, because it has not been placed into the DOM yet.
In component didMount, we have access to our component in the DOM. We could log out, reactDOM.findDOMNode.


## Lesson 13: control React Component updates when new props are received.
The React component lifecycle will allow you to update your components at runtime.
componentWillReceiveProps gives us an opportunity to update state by reacting to a prop transition before the render() call is made.
shouldComponentUpdate allows us to set conditions on when we should update a component so that we are not rendering constantly.
componentDidUpdate lets us react to a component updating.
