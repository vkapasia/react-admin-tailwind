import Sidebar from './Sidebar/sidebar';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className='flex flex-row'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;