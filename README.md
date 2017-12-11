# create-react-app
Create React apps by egghead courses
[start learning React](https://egghead.io/courses/start-learning-react) and
[React testing cookbook](https://egghead.io/courses/react-testing-cookbook)

React current version is 16.02 (on 10.12.17)

## React is a js library for building user interfaces.

### Benefits:
Declarative:
React makes it painless to create interactive UIs.

Component-Based:
Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in js instead of


Questions:
- redux
- flux
- declarative and imperative approach
- component? container?
- virtual DOM ?
- diff algorithm: setState, dirty, Re-rendered
- data flow

- state depends how to create component
- when diff algorithm: jsx is faster? jsx faster then without?
- setState? what does it mean the props is not changed?


## [start learning react](https://egghead.io/courses/start-learning-react) (21 lessons)

React is a "javascript library for building user interfaces" from the fine folks at Facebook & Instagram.
This series will explore the basic fundamentals of React to get you started.


### Lesson 1: use [create-react-repo](https://github.com/facebookincubator/create-react-app) to setup a simple React app.
React requires some initial setup before we can get going with the app.
```
yarn global add create-react-app
create-react-app my-app
cd my-app
yarn start
```

react

react-dom


### Lesson 2: write a react Component.
Create a React component by ES6 class and by stateless function component (no render, no state)

JSX html like syntax - is a preprocessor step that adds XML syntax to JavaScript.
You can definitely use React without JSX but it makes React a lot more elegant.
Just like XML (extensible markup language), JSX tags have a tag name, attributes, and children. An attribute value is enclosed in quotes, the value is a string.

Attribute ClassName (class reserved in HTML)

Custom components with a capital letter, native HTML DOM element - by lowercase.

Props are how we pass data around React.


### Lesson 3: display output in React with a render method.
How to structure JSX in a React component.
ReactDOM.render() method return DOM representation of component.


### Lesson 4: set properties on React Components.
We can pass data into component by using props.

typechecking with propTypes

defaultProps


### Lesson 5: manage React Component state with setState.
State is used for properties on a component that will change, versus static properties that are passed in.


### Lesson 6: use React Components as children for other Components.
React Component can output other React Component.


### Lesson 7: access nested data with React props.children.
When you're building your React Components, you'll probably want to access child properties of the markup. This.props.children accesses the innerHTML or nested components of another component.


### Lesson 8: add custom propType validation to React Components.
In addition to the types built into PropTypes, we can also define our own custom propType validator.


### Lesson 9: normalize events with React synthetic event system.
Event handlers are passed an instance of SyntheticEvent in React: take a look at the wide range of events available to us, including Touch events.


### Lesson 10: use React ref to get a references to specific components.
Refs are a way to reference a node, or an instance of a component in application.

Ref - returns the node that we are referencing.

The ref attribute or prop can also take a callback.

ReactDOM


### Lesson 11: understand the React Component lifecycle methods.
"Mounting" - component is added to the DOM
"Unmounting" - component is removed from the DOM

componentWillMount () -
componentDidMount() is going to fire off once our component has actually been mounted to the DOM


### Lesson 12: manage React Component state with Lifecycle methods.
In component willMount, we have access to our state and our props, but we do not have access to the DOM representation of our component, because it has not been placed into the DOM yet.
In component didMount, we have access to our component in the DOM. We could log out, reactDOM.findDOMNode.


### Lesson 13: control React Component updates when new props are received.
The React component lifecycle will allow you to update your components at runtime.

componentWillReceiveProps gives us an opportunity to update state by reaching to a prop transition before the render() call is made.

shouldComponentUpdate allows us to set conditions on when we should update a component, so that we are not rendering constantly.

componentDidUpdate lets us React to a Component updating.


### Lesson 14: use map to create React Component from arrays of data.
unique props key


### Lesson 15: compose React Component behaviour with higher order components (HOC).
inheritance

The purpose of a higher order component is to share common functionality or information between multiple components


### Lesson 16: build a JSX Live Compiler as a React Component.


### Lesson 17: understand JSX at a deeper level.
```
const App = (props) => {
  return (
    <div>
       <span></span>
       <App />
    </div>
  )
}
```


### Lesson 18: understand React.Children utilities.
The data contained in this.props.children is not always what you might expect.
React provides React.children to allow for a more consistent development experience.

React.Children.map()
React.Children.toArray()
React.Children.forEach()
React.Children.only()


### Lesson 19: use React.cloneElement to extend functionality of children components.
We can utilize React.cloneElement in order to create new components with extended data or functionality.


### Lesson 20: write more reusable React Components with composable APIs.
To make more composable React components, you can define common APIs for similar component types.


### Lesson 21: debug React Components with developer tools in Chrome.
React Development Tools is a Chrome plugin that provides handy ways to inspect and debug your React components.


## [React testing cookbook](https://egghead.io/courses/react-testing-cookbook) (13 lessons)

The definition of "legacy code" can be described simply as "code that doesn't have tests."
Code you just wrote, 5 minutes ago? Legacy code. Code that can't be refactored, but only changed.
How do we prevent the mountain of legacy code that most projects become?
A solid testing strategy.
React apps are no different, and can be tested simply if you know some core principles.
In this course we will take a look at testing React applications. From getting setup and running tests, all the way through testing Redux enabled React applications.

### Lesson 1: React testing: setting up dependencies.

