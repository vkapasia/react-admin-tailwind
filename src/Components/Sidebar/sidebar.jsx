import './sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='basis-1/5 md:basis-1/5 rounded-2xl mx-2 text-center lg:block hidden sticky top-0 h-screen overflow-scroll'>
      <h1 className='p-2'><a href='/#'>Logo</a></h1>
      <hr className='bold' />
      <ul className=''>
        <Link to="/"><li className='flex justify-center items-center p-2 hover:bg-slate-700'><svg className="h-8 w-8 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 21v-13l9-4l9 4v13" />  <path d="M13 13h4v8h-10v-6h6" />  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg><span>Dashboard</span></li></Link>
        <Link to="/dashboard"><li className='flex justify-center items-center p-2 hover:bg-slate-700'><svg className="h-8 w-8 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 21v-13l9-4l9 4v13" />  <path d="M13 13h4v8h-10v-6h6" />  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg><span>Dashboard</span></li></Link>
        <Link to="/about"><li className='flex justify-center items-center p-2 hover:bg-slate-700'><svg className="h-8 w-8 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 21v-13l9-4l9 4v13" />  <path d="M13 13h4v8h-10v-6h6" />  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg><span>About</span></li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;