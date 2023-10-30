import './Admin.css';
import Sidebar from '../components/Sidebar/Sidebar';
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RightSide/RightSide';
function Admin() {
    return (
        <div className="Admin">
            <div className="AdminGlass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    );
}

export default Admin;