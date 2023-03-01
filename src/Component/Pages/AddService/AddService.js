import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext)
    const handleAddService = event => {
        const imageHostKey = process.env.REACT_APP_imageKey;
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const email = form.email.value;
        const imageFile = form.image.files[0];
        const price = form.price.value;
        const rating = form.rating.value;
        const Info = form.Info.value;

        const formData = new FormData();
        formData.append('image', imageFile);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url
                const service = { serviceName, email, image, price, rating, Info }
                fetch(`https://prosplum.vercel.app/addService`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(service)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Added Service',
                                'You Service added Successfully!',
                                'success'
                            )
                            form.reset()
                        }
                    })
            })
    }
    return (

        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <div className="mt-8">
                            <a href="" className="text-2xl font-bold text-blue-600">
                                Add Your Service
                            </a>

                            <address className="mt-2 not-italic">
                                282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>
                        <p className="max-w-xl text-lg mt-5">
                            At the same time, the fact that we are wholly owned and totally
                            independent from manufacturer and other group control gives you
                            confidence that we will only recommend what is right for you.
                        </p>


                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleAddService} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">serviceName</label>
                                <input
                                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                    placeholder="serviceName"
                                    type="text"
                                    id="name"
                                    name='serviceName'
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only border-2" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name='email'
                                        required
                                        value={user.email}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="Image">Image</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Service Image"
                                        type="file"
                                        id="Image"
                                        name='image'
                                        accept='image/*'
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only border-2" htmlFor="price">price</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Price"
                                        type="number"
                                        id="price"
                                        name='price'
                                    />
                                </div>

                                <div>
                                    <select name="rating" id="" className='border border-gray-300 h-10 w-10 rounded'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>



                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                    placeholder="Description"
                                    rows="8"
                                    id="message"
                                    name='Info'
                                    required

                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block  text-sm  tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 px-5 py-3 font-medium  sm:w-auto"
                                >
                                    Add Service
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AddService;