import './Admin.css';
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RightSide/RightSide';
import Orders from '../components/Orders/Orders'; // Import other components
import Customers from '../components/Customers/Customers';
import Products from '../components/Products/Products';

function Admin() {
    const [selected, setSelected] = React.useState(0);
    const menuComponentMap = {
        0: <MainDash />,
        1: <Orders />,
        2: <Customers />,
        3: <Products />
    }
    return (
        <div className="Admin">
            <div className="AdminGlass">
                <Sidebar selected={selected} setSelected={setSelected}/>
                {menuComponentMap[selected]}
                <RightSide />
            </div>
        </div>
    );
}

export default Admin;