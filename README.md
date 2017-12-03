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


## Lesson 2: write a react component
Create a React component by ES6 class
ReactDOM.render() method return DOM representation of component

JSX html like syntax - is a preprocessor step that adds XML syntax to JavaScript.
You can definitely use React without JSX but it makes React a lot more elegant.
Just like XML (extensible markup language), JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string.

attribute ClassName (reserved in HTML)

Custom components with a capital letter, native HTML DOM element - by lowercase

props are how we pass data around React

Create a React component by stateless function component (no render, no state)


## Lesson 3: display output in React with a components render Method
How to structure JSX in a React component.


## Lesson 4: set properties on React Components
we can pass data into component by using props

typechecking with propTypes

defaultProps


## Lesson 5: manage React Component State with setState
State is used for properties on a component that will change, versus static properties that are passed in.


## Lesson 6: Use React Components as Children for other Components
React Component can output other React Component
