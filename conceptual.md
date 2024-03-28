### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JS library that allows us to create more composable code. We would use it to create apps with a lot of reusable parts.
- What is Babel?
Babel is a JS compiler, it transforms JSX code into JS.
JSX is the syntax used in react, it allows us to write HTML like code direclty into JS
- How is a Component created in React?
We create a jsx file for each component, and export that function from the file. 
- What are some difference between state and props?
Props are passed from a parent component to a child component, state is managed internally in the component. 
- What does "downward data flow" refer to in React?
The parent passing data down to its children. 
- What is a controlled component?
A component whose behavior is controlled by react state. 
- What is an uncontrolled component?
A component where the elements are maintained internally with their own state instead of being managed by react. 
- What is the purpose of the `key` prop when rendering a list of components?
The key is used to identify the components across renders.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Its not stable, it can change when items are removed or added. 
- Describe useEffect.  What use cases is it used for in React components?
useEffect is used for handling external functions, such as API requests. 
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
Provides a way to create mutable references to DOM elements. 
- When would you use a ref? When wouldn't you use one?
You would use a ref when you need to interact with DOM elements directly but you wouldn't use it if you can achieve the same functionality with state or props. 
- What is a custom hook in React? When would you want to write one?
Used to cappture and share complex logiuc, you may want to use this when duplicating logic across multiple components. 