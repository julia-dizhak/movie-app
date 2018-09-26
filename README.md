React 16.02

# Learning basic React

by egghead courses: [start learning React (21 lessons)](https://egghead.io/courses/start-learning-react) and [React testing cookbook](https://egghead.io/courses/react-testing-cookbook)

```
$ git tag -a v1.0 -m "version 1.0"
$ git tag
v1.0
v1.2
v1.3
```

## React is a JS library for building user interfaces.
React is from the fine folks at Facebook & Instagram. 

#### Benefits:
* Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your app, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.

* Component-Based:
build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

* Learn once, write anywhere:
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

*  React can also render on the server using Node and power mobile apps using React Native.


### Lesson 0: use [create-react-repo](https://github.com/facebookincubator/create-react-app) to setup a simple React app
React requires some initial setup before we can get going with the app.
```
yarn global add create-react-app
create-react-app my-app
cd my-app
yarn start
```

open browser to http://localhost:3000


### Lesson 1: display output with a render method
Create a React component by ES6 class and by `stateless` (no render, no state).

`JSX` html like syntax - is a preprocessor step that adds XML syntax to JS.
You can definitely use React without JSX but it makes React a lot more elegant.

Just like XML, JSX tags have a tag name, attributes and children.

* attribute `className` (class reserved in HTML)
* custom components with a capital letter, native DOM elements - by lowercase.
* props are how we pass data around React.

ReactDOM.render() method return DOM representation of Component.


### Lesson 3: set properties
Pass data into Component by using props. Typechecking with propTypes and `defaultProps`.


### Lesson 4: manage Component's state with `setState`

### Lesson 5: use React Components as children for other Components

### Lesson 7: React props.children.
This.props.children accesses the innerHTML or nested components of another Component. 
```
React.Children.map()
React.Children.toArray()
React.Children.forEach()
React.Children.only()
```

### Lesson 8: passing method references between Components and adding two way binding


### Lesson 9: rendering content using conditions
JSX and conditions


### Lesson 10: outputting lists
by .map() method

### Lesson ?: React Component lifecycle methods
The React component lifecycle will allow you to update your components at runtime.
```
Mounting - component is added to the DOM
Unmounting - component is removed from the DOM
componentWillMount () 
componentDidMount() is going to fire off once our component has actually been mounted to the DOM;
componentWillReceiveProps gives us an opportunity to update state by reaching to a prop transition before the render() call is made;
shouldComponentUpdate allows us to set conditions on when we should update a component, so that we are not rendering constantly;
componentDidUpdate() 
```

### Lesson ?: use map to create React Component from arrays of data
unique props key


### Lesson ?: (HOC)
The purpose of a higher order component is to share common functionality or information between multiple components.

### Lesson ?: debug React Components with developer tools in Chrome.
React Development Tools is a Chrome plugin that provides handy ways to inspect and debug your React components.


## Questions:
- react
- react-dom
- redux / flux
- declarative and imperative approach
- component? container?
- virtual DOM 
- data flow

### Assignament
* create 2 components: UserInput and UserOutput
* UserInput should hold an input element, UserOutput two paragraphs
* output multiple UserOutput components in the App component (any paragraph texts of your choice)
* pass a username (of your choice) to UserOutput via props and display it there
* add state to the App component (=> the username) and pass the username to the UserOutput component
* add a method to manipulate the state (=> an event-handler method)
* pass the event-handler method reference to the UserInput component and bind it to the input-change event
* ensure that the new input entered by the user overwrites the old username passed to UserOutput
* add two-way-binding to your input (in UserInput) to also display the starting username
* add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets



## [React testing cookbook](https://egghead.io/courses/react-testing-cookbook) (13 lessons)

The definition of "legacy code" can be described simply as "code that doesn't have tests."
Code you just wrote, 5 minutes ago? Legacy code. Code that can't be refactored, but only changed.
How do we prevent the mountain of legacy code that most projects become?
A solid testing strategy.
React apps are no different, and can be tested simply if you know some core principles.
In this course we will take a look at testing React applications. From getting setup and running tests, all the way through testing Redux enabled React applications.


### Lesson 1: set up dependencies
To write tests for our React code, we need to first install some libraries for running tests and writing assertions.
In this lesson we walk through setting up Mocha as our test runner and Expect as our assertion library.
We will also set up some React and JSX specific test tools (React Test Utils) to make writing our tests easier.

```
yarn add mocha --dev
yarn add expect --dev
yarn add react-addons-test-utils --dev
```

### Lesson 2: running tests

```
yarn add babel-core --dev
yarn add babel-preset-es2015 --dev
yarn add babel-preset-react --dev
yarn add babel-preset-stage-2 --dev

###

to be continued ...
