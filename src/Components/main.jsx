import './main.css';
import profileImage from '../imges/bruce-mars.jpg';
import cardImage from '../imges/home-decor-1.jpg';
import Footer from './footer';

function Main() {
    return (
        <>
            <div className='basis-full w-full mx-2 m-6'>
                <div>
                    <div className='rounded-2xl border-2 h-64 topbar'>Profile
                        <span className='mask'></span>
                    </div>
                    <div className='flex shadow-blur flex-row border-2 rounded-2xl innerbox p-3 z-10 mx-6'>
                        <div className='basis-auto'>
                            <img src={profileImage} alt='profile' className='avtar' />
                        </div>
                        <div className='basis-auto'>
                            <h1>Vivek kapasia</h1>
                            <h1>CEO / Co-Founder</h1>
                        </div>
                        <div className='basis-4/5 text-right flex flex-col sm:flex-row justify-end'>
                            <button>App</button>
                            <button>Messages</button>
                            <button>Settings</button>
                        </div>
                    </div>
                </div>
                <div className='lg:flex flex-row'>
                    <div className='basis-1/3 md:basis-1/3 rounded-2xl border-2 p-4 m-2'>
                        <h2>Platform Settings</h2>
                        <p>ACCOUNT</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                        </label>
                        <p>APPLICATION</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email me when someone follows me</span>
                        </label>
                    </div>
                    <div className='basis-1/3 md:basis-1/3 rounded-2xl border-2 p-4 m-2'>
                        <h2>Profile Information</h2>
                        <p>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                        <ul>
                            <li><strong>Full Name: </strong> Vivek kapasia</li>
                            <li><strong>Mobile: </strong> 7291053541</li>
                            <li><strong>Email: </strong> vkapasia10@gmail.com</li>
                            <li><strong>Location: </strong> India</li>
                            <li className='flex'><strong>Social: </strong><span className='flex'><svg className="h-8 w-8 text-sky-900" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg><svg className="h-8 w-8 text-sky-900" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg><svg className="h-8 w-8 text-sky-900" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg></span></li>
                        </ul>
                    </div>
                    <div className='basis-1/3 md:basis-1/3 rounded-2xl border-2 p-4 m-2'>
                        <h2>Conversations</h2>
                        <ul>
                            <li className="py-2 sm:py-2">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-lg" src={profileImage} alt="neil" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Hi! I need more information..
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <a href='/#'>REPLY</a>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2 sm:py-2">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-lg" src={profileImage} alt="Neil" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Hi! I need more information..
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <a href='/#'>REPLY</a>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2 sm:py-2">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-lg" src={profileImage} alt="Neil" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Hi! I need more information..
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <a href='/#'>REPLY</a>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2 sm:py-2">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-lg" src={profileImage} alt="Neil" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Hi! I need more information..
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <a href='/#'>REPLY</a>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2 sm:py-2">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-lg" src={profileImage} alt="Neil" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Hi! I need more information..
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <a href='/#'>REPLY</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-2 rounded-2xl p-4 m-2'>
                    <h1>Projects</h1>
                    <p>Architects design houses</p>
                    <div className='sm:flex content-center items-center'>
                        <div className="m-2 max-w-sm">
                            <a href="/#">
                                <img className="rounded-lg" src={cardImage} alt="cardImage" />
                            </a>
                            <div className="">
                                <a href="/#">
                                    <h5 className="my-2 text-lg tracking-tight text-gray-900 dark:text-white">Project #1</h5>
                                </a>
                                <a href="/#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 border-2">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="m-2 max-w-sm">
                            <a href="/#">
                                <img className="rounded-lg" src={cardImage} alt="cardImage" />
                            </a>
                            <div className="">
                                <a href="/#">
                                    <h5 className="my-2 text-lg tracking-tight text-gray-900 dark:text-white">Project #1</h5>
                                </a>
                                <a href="/#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 border-2">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="m-2 max-w-sm">
                            <a href="/#">
                                <img className="rounded-lg" src={cardImage} alt="cardImage" />
                            </a>
                            <div className="">
                                <a href="/#">
                                    <h5 className="my-2 text-lg tracking-tight text-gray-900 dark:text-white">Project #1</h5>
                                </a>
                                <a href="/#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 border-2">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="m-2 max-w-sm">
                            <a href="/#">
                                <img className="rounded-lg" src={cardImage} alt="cardImage" />
                            </a>
                            <div className="">
                                <a href="/#">
                                    <h5 className="my-2 text-lg tracking-tight text-gray-900 dark:text-white">Project #1</h5>
                                </a>
                                <a href="/#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 border-2">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Main;