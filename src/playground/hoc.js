// Higher Order Component (HOC) - A component (HOC) that renders other components
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
// const AdminInfo = (props) => {
//     return (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share</p>}
//             <props.WrappedComponent info = {props.info} />
//         </div>
//     );
// }

const requireAuthentication =  (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated || <p>Please log in</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    )
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {true} info = "These are the details"/>, document.getElementById('app'));