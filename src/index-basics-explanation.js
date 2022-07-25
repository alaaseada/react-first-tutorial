// import React from "react";
const React = require("react");
const ReactDOM = require("react-dom");

/* JSX Rules
  - Returns a single element
  - div / section / article or fragment (Best to follow HTML semantics)
  - Use camelCase for html attributes
  - className instead of class
  - Close every element
  - Formtting 
*/
// Stateless functional component (Has no state) - Always need to return something
// Name has to be capitalized to be recognized as a component to be rendered
// Components returns JSX
// Using ES6 - return JSX- is cleaner and easier - can return a very complex html structure
function Index() {
  return (
    // Fragment = <React.Fragment></React.Fragment> = <> </>Used to wrap all elements without creating a wrapping element in the HTML
    <>
      {/* Nested component */}
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h2>Hello World, this is Alaa!</h2>;
const Message = () => {
  return <p>My message is from heart.</p>;
};

// This type of code gets messier rapidly
// const Index = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!'));
// }

// Rendering a component in the root element
ReactDOM.render(<Index />, document.getElementById("root"));
