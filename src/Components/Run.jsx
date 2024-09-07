import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { IoMdCloudUpload } from "react-icons/io";
import {Link} from "react-router-dom"


const Run = () => {
  return (
    <>
        <div className="runworkflow">
            <div className="header">
                <div className="side">
                <Link to='/'>
                <VscThreeBars />
                </Link>
                </div>
                <div className="mainheading">
                    <h2>Run Workflow Screen</h2>
                </div>
            </div>
            <div className="middle">
                <div className="upload">
                <IoMdCloudUpload />
                </div>
                <div className="content">
                    <h2>Drag and drop Files Here to Upload</h2>
                </div>
                <div className="fileupload">
                    <input type="file" name='Or Select Files to Upload' accept='image/*'/>
                </div>
            </div>
            <div className="selectid">
                <div className="workid">
                    <h3>Select WorkFlow Id</h3>
                </div>
                <div className="check">
                    <div className="checkbox">
                        <select name='dropdown'>
                            <option value='87aGywgfD'>87aGywgfD</option>
                        </select>
                    </div>
                        <div className="runbtn">
                            <Link to='/secondpage'>
                            <button>Run Workflow</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Run