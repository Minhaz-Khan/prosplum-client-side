import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyService from './MyService';

const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [myServices, setMyService] = useState([]);

    useEffect(() => {
        fetch(`https://prosplum.vercel.app/myService?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyService(data))
    }, [user.email])
    console.log(myServices);

    const handleDelete = (id) => {
        const updateService = myServices.map(service => service._id !== id)
        setMyService(updateService)
    }

    return (
        <div className='container mx-auto p-10 h-screen'>
            <h2 className='text-center font-bold text-5xl my-6'>My Services</h2>
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Service Name
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Email
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Price
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Image
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            myServices.map(service => <MyService key={service._id} handleDelete={handleDelete} service={service}></MyService>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyServices;