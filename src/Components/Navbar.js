import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TEA NEWS</a>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Business</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Entertainment</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">General</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Science</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Sports</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Technology</a></li>
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Health</a></li>

                    {/* <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classname="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a classname="dropdown-item" href="/">Action</a></li>
            <li><a classname="dropdown-item" href="/">Another action</a></li>
            <li><hr classname="dropdown-divider"/></li>
            <li><a classname="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
                    <li className="nav-item"><a className="nav-link " aria-current="page" href="/">About</a></li>

                </ul>
                </div>
            </div>
            </nav>
      </div>


//   <nav classname="navbar navbar-expand-lg navbar-light bg-light">
//   <div classname="container-fluid">
//     <a classname="navbar-brand" href="/">Navbar</a>
//     <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span classname="navbar-toggler-icon"></span>
//     </button>
//     <div classname="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
//         <li classname="nav-item">
//           <a classname="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li classname="nav-item">
//           <a classname="nav-link" href="/">Link</a>
//         </li>
//         <li classname="nav-item dropdown">
//           <a classname="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul classname="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a classname="dropdown-item" href="/">Action</a></li>
//             <li><a classname="dropdown-item" href="/">Another action</a></li>
//             <li><hr classname="dropdown-divider"/></li>
//             <li><a classname="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li classname="nav-item">
//           <a classname="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
    )
  }
}

export default Navbar
