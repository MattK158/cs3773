import React from 'react';
import './Sidebar.css';
import { SidebarData } from '../../Data/Data';

const Sidebar = ({ selected, setSelected }) => {
    // const [selected, setSelected] = React.useState(0);
    return (
        <div className="Sidebar">
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