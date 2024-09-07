import React from 'react'
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="navbar-sec">
        <div className="sidebar">
        <VscThreeBars />
        </div>
        <div className="heading">
            <h2>Workflow Builder Screen</h2>
        </div>
        <div className="work-details">
            <div className="id">
                <h2>WorkFlow Id:87aGywgfD</h2>
            </div>
            <div className="save">
                <button>Save Workflow</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar