import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl font-extrabold md:m-10 p-10'>Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 md:m-10'>
                <div className=' shadow-lg m-5 rounded-xl bg-fuchsia-200 p-5'>
                    <h1 className=' text-3xl font-bold md:p-2 my-8'>What is react router?</h1>
                    <p className=' text-lg p-2 md:p-6 md:m-6'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br />

                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. <br />
                        React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
                </div>
                <div className=' shadow-lg m-5 rounded-xl bg-fuchsia-200 p-5'>
                    <h1 className=' text-3xl font-bold md:p-2 my-8'>How does context api works?</h1>
                    <p className=' text-lg p-2 md:p-6 md:m-6'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. Context is also touted as an easier, lighter approach to state management using Redux. <br />
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        <br />
                        While not meant as a replacement for state management libraries like Redux or MobX, the context API allows for an easy way to share global data between multiple components without having to pass it as props. It solves a common problem known as the prop-drilling problem where props would need to be passed down to multiple components in the tree to reach the component that needs it.

                        The new API is especially useful to provide data that’s needed by a high percentage of the components in the tree. Global preferences like the selected theme or selected locale option are two good examples. </p>
                </div>
                <div className=' shadow-lg m-5 rounded-xl bg-fuchsia-200 p-5'>
                    <h1 className=' text-3xl font-bold md:p-2 my-8'>Write some sentenses about useRef hook.</h1>
                    <p className=' text-lg p-2 md:p-6 md:m-6'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called <b>.current</b>. The value is persisted in the <b>refContainer.current</b> property. These values are accessed from the current property of the returned object. The <b>.current</b> property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;