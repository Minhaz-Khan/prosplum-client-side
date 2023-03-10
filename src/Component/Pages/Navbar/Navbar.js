import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../../Image/plumber_logo2-removebg-preview.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Log Out!',
                    'Log Out SuccessFully!',
                    'success'
                )
            })
    }
    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className='flex items-center'>
                        <img className="w-auto h-10 mr-2 sm:h-7" src={logo} alt="" />
                        <h4 className='text-2xl font-medium bg-blue-500 text-white shadow-2xl rounded-tl-lg rounded-br-lg px-3 py-1'>PROSPLUM</h4>
                    </Link>
                    <div className="flex lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {isOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>}
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={`${isOpen ? 'translate-x-0 opacity-95 ' : 'opacity-0 -translate-x-full '}absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                    <div className="flex flex-col md:flex-row justify-items-center md:mx-6">
                        <Link className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to={'/'}>Home</Link>
                        <Link className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to={'/services'}>Services</Link>
                        {
                            user ?
                                <>
                                    <Link className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to={'/myServices'}>My Services</Link>
                                    <Link className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to={'/addService'}>Add Service</Link>
                                    <Link onClick={handleLogOut} className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" >Log Out</Link></> :
                                <Link className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to={'/login'}>Login</Link>
                        }
                    </div>

                    <div className="flex justify-center md:block">
                        {user && <Link className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                            <div className="relative">
                                {user.photoURL ? <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src={user.photoURL} alt="" /> :
                                    <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" />
                                }
                            </div>
                        </Link>}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;