import React from 'react'
import { LuMoveDown } from "react-icons/lu";


const Nodes = () => {
  return (
    <>
        <div className="Nodes">
            <div className="worknodes">
                <table bgcolor='black'>
                    <tr>
                        <th bgcolor='white'>
                            Workflow Nodes
                        </th>
                    </tr>
                    <tr className='singlenode'>
                        <td>Start</td>
                    </tr >
                    <tr className='singlenode'>
                        <td>Filter Data</td>
                    </tr>
                    <tr className='singlenode'>
                        <td>Wait</td>
                    </tr>
                    <tr className='singlenode'>
                    <td>Convert Format</td>
                    </tr>
                    <tr className='singlenode'>
                    <td>Send POST Request</td>
                    </tr>
                    <tr className='singlenode'>
                    <td>End</td>
                    </tr>
                </table>
            </div>
            <div className="i-Nodes">
                <div className="ind-nodes">
                    <div className="indnode">
                        <h4 className='ind'>Start</h4>
                    </div>
                    <LuMoveDown className='down' />
                </div>
                <div className="ind-nodes">
                    <div className="indnode">
                    <h4 className='ind'>Filter Data</h4>
                    </div>
                    <LuMoveDown className='down' />
                </div>
                <div className="ind-nodes">
                    <div className="indnode">
                    <h4 className='ind'>Wait</h4>
                    </div>
                    <LuMoveDown className='down' />
                </div>
                <div className="ind-nodes">
                    <div className="indnode">
                    <h4 className='ind'>Conver Format</h4>
                    </div>
                    <LuMoveDown className='down' />
                </div>
                <div className="ind-nodes">
                    <div className="indnode">
                    <h4 className='ind'>Send POST Request</h4>
                    </div>
                    <LuMoveDown className='down' />
                </div>
                <div className="ind-nodes">
                    <div className="indnode">
                    <h4 className='ind'>End</h4>
                    </div>
                    <LuMoveDown className='down' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Nodes