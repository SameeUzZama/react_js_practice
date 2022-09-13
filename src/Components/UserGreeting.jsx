import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome React</div>;
  }
}

// Conditional Rendering with ternary operator
//   render() {
//     return this.state.isLoggedIn ? (
//       <div>Welcome React</div>
//     ) : (
//       <div>Welcome Guest</div>
//     );
//   }
// }

// Conditional Rendering With If Else
//   render() {
//     let message;
//     if (this.state.isLoggedIn) {
//       message = <div>Welcome React</div>;
//     } else {
//       message = <div>Welcome Guest</div>;
//     }

//     return (
//       <div>
//         <h1>{message}</h1>
//       </div>
//     );
//   }
// }

//Conditional Rendering
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Welcome React</div>;
//     } else {
//       return <div>Welcome Guest</div>;
//     }

// return (
//   <div>
//     <h1>Welcome React</h1>
//     <h1>Welcome Guest</h1>
//   </div>
// );
//   }
// }

export default UserGreeting;
