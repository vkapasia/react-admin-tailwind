import {Link} from "react-router-dom";
function Footer() {
    return (
        <>
            <div className='flex justify-between m-2 mt-6'>
                <p>© 2024, made with  by Vivek kapasia for a better web.</p>
                <ul className='flex'>
                    <Link to="/"><li className='mx-2'>Vivek kapasia</li></Link>
                    <Link to="/about"><li className='mx-2'>About Us</li></Link>
                    <li className='mx-2'>Blog</li>
                    <li className='mx-2'>Licence</li>
                </ul>
            </div>
        </>
    );
}

export default Footer;