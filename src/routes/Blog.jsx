import React from "react";
import Banner from "../components/banner/Banner";

const Blog = () => {
    return (<div>
    <div className="page-title">
                <h2 className="text-center fw-bold">Some QnA</h2>
            </div>
    <div className="container mt-5 font-Helvetica">
    <h4>1. when should we use context api?</h4>
    <p><strong>Answer:</strong> Context API can solve many problems that modern applications face, related to state management. Many solutions can solve state management issues and props drilling, but they may increase your build size and compromise your app performance. Context API is a React built-in feature, so we don’t have to worry about performance overhead and library installing issues. 
    The props drilling problem occurs when you pass a prop somewhere down the tree. When a project develops, data passing through props becomes confusing, making the code more vulnerable and complex. To overcome from this problem, we use Context API.</p>
    <h4>2. what is a custom hook?</h4>
    <p><strong>Answer:</strong> React hooks are functions that let you use and interact with state in React function components. React comes with some built-in hooks, they are useState, useRef, and useEffect. The former two are used to store data across renders, while the latter is used to execute side effects when that data changes.

    We can also build our own hooks using the built-in hooks as building blocks. These are often referred to as “custom hooks” to differentiate them from the built-in hooks. In my experience, custom hooks are the most underused React abstraction.</p>
    <h4>3. what is useRef?</h4>
    <p><strong>Answer:</strong> The useRef is a React hook that allows you to directly create a reference to the DOM element and returns a ref object with a single current property initially set to the initial value you provided.The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>
    <h4>4. what is useMemo?</h4>
    <p><strong>Answer: </strong> The useMemo is a hook used in the functional component of react that returns a memoized value.whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application. We can wrap the expensive function call with useMemo. The useMemo hook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>
    </div>
    </div>);
};

export default Blog;
