import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.png';
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons'


const Sidebar = () => {
    const [selected, setSelected] = React.useState(0);




    return (
        <div className="Sidebar">

            {/* logo */}
            <div className="logo">
                <span>CodeCart</span>
            </div>

            {/* menu items */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                        key={index}
                        onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

            
            </div>


        </div>
    )
}

export default Sidebar;