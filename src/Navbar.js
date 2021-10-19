import './Navbar.css';
import React, { useState } from 'react';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import { IconContext } from 'react-icons';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar2"> 
            <Link to='#' className="menu-bars">
                <BiMenu className="BiMenu__nav" onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
                
        </nav>

  


        <div className="navbar1">
            <nav className="menu_horizontal">
                <ul className="horizontal">
                    <li className="submodule_1">File 
                        <ul className="submodule__1">
                            <li>Home</li>
                            <li>Update Password</li>
                            <hr/>
                            <li>Logout</li>
                            <br/>
                            <li>Quit</li>        
                        </ul>
                    </li>
                    <li className="submodule_2">Exams
                        <ul className="submodule__2">
                            <li>Show Schedule</li>
                            <li>Edit Exam Schedule</li>
                            <li>Replace Question</li>
                            <li>Custom Exam</li>
                            <li>Resit Exam</li>
                            <li>Schudle Resit Exam</li>
                            <li>Generate Resit Exam</li>
                            <hr/>
                            <li>Select Exam Questions</li>
                            <li>Assign Trainees</li>
                            <li>Preview Exams</li>
                            <li>Publish Exams</li>
                            <hr/>
                            <li>Exam Macro</li>
                            <hr/>
                            <li>Schudle Exam</li>
                            <li>Generate Exam</li>
                            <hr/>
                            <li>Compare Exams</li>
                            <hr/>
                            <li>Load GEMS Online Results</li>
                            <li>Load Manual Results</li>
                            <hr/>
                            <li>GEMS OMR</li>
                        </ul>
                    </li>
                    <li className="submodule_3">Records
                        <ul className="submodule__3">
                            <li>Multiple Choice Questions</li>
                            <li>Essay Questions</li>
                            <hr/>
                            <li>Trainee Accounts</li>
                        </ul>
                    </li>
                    <li className="submodule_4">Reports
                        <ul className="submodule__4">
                            <li>Individual Student - Single Exam</li>
                            <li>Individual Student - All Exam</li>
                            <li>Individual Student - Certificate</li> 
                            <hr/>
                            <li>Group Students - Single Exam (Summary)</li>
                            <li>Group Students - Single Exam (Question Analysis)</li>
                            <li>Group Students - Single Exam (Feedback)</li>
                            <li>Group Students - Single Exam (Detailed Analysis)</li>                            
                            <hr/>
                            <li>Anual Analysis</li>
                            <br/>
                            <li>Question Count</li>
                            <br/>
                            <li>Question Changes</li>
                            <br/>
                            <li>Question History</li>
                            <br/>
                            <li>Question Unchanged</li>
                            <hr/>
                            <li>Template Reports</li>
                            <br/>
                            <li>Exam Report</li>
                            <br/>
                            <li>PE Exam Report</li>
                            <hr/>
                            <li>Print MCQ Questions</li>
                            <br/>
                            <li>Print Essay Questions</li>
                        </ul>
                    </li>
                    <li className="submodule_5">Utilities
                        <ul className="submodule__5">
                            <li>Show Schedule</li>
                            <li>Edit Exam Schedule</li>
                            <li>Generate Resit Exam</li>
                            <hr/>
                            <li>Select Exam Questions</li>
                            <li>Assign Trainees</li>
                        </ul>
                    </li>
                    <li className="submodule_6">Help
                        <ul className="submodule__6">
                            <li>Help contents</li>
                            <li>About ASTech</li>
                        </ul>
                    </li>
                </ul>
            </nav>      
        </div>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;
