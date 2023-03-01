import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyService = ({ service, handleDelete }) => {
    const { email, image, price, serviceName, _id } = service

    const handleDeleteService = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You delete this service!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://prosplum.vercel.app/myService/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            alert('review deleted successfully')
                            handleDelete(id)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your service has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {serviceName}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{price}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src={image} alt="" />
            </td>
            <td className="whitespace-nowrap px-4 py-2">
                <Link
                    onClick={() => handleDeleteService(_id)}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default MyService;