import Footer from "./footer";
import { HiBellAlert } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Dashboard() {
    return (
        <>
            <div className='basis-full w-full mx-2 m-6'>
                <div className="flex justify-between">
                    <h1>Page / Dashboard</h1>
                    <div className="flex justify-center items-center"> <input type="search" /><FaUser /> Sign In <IoMdSettings /><HiBellAlert /></div>
                </div>
                <div>
                    <div>Hello world</div>
                </div>
                <div>this is about section</div>
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;