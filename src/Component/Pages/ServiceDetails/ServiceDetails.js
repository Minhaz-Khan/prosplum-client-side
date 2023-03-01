import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, price, image, rating: avaregRating, serviceName, Info } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://prosplum.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id])

    const handleReview = (event) => {
        if (!user) {
            <Navigate to={'/login'}></Navigate>
        }
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedback.value;
        const rating = form.rating.value;
        console.log(feedback, rating);
        const date = new Date().toLocaleString();

        const review = {
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
            serviceId: _id,
            rating,
            feedback,
            date
        }

        fetch('https://prosplum.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('your review added');
                    form.reset();
                    setReviews([...reviews, review])
                }
            })

    }

    const handleDeletReview = (id) => {
        const upDateReview = reviews.map(review => review._id !== id);
        setReviews(upDateReview)
    }

    return (
        <section >
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src={image}
                            className="aspect-square w-full rounded-xl object-cover"
                        />


                    </div>

                    <div className="md:sticky top-0">

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">
                                    {serviceName}
                                </h1>

                                <p className="text-sm">Highest Rated Service</p>

                                <div className="-ml-0.5 flex items-center">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-gray-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <p className='text-slate-300 ml-2'>{avaregRating}</p>
                                </div>
                            </div>

                            <p className="text-lg font-bold">${price}</p>
                        </div>

                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p>
                                    {Info}
                                </p>
                            </div>

                        </div>
                        <button className="px-6 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            <div className='container mx-auto p-10 grid grid-cols-5 '>
                <div className="flex flex-col col-span-5 lg:col-span-2 max-w-lg p-5  rounded-xl lg:p-5 shadow-xl h-6/6 lg:h-80">
                    <div className="flex flex-col items-center w-full">
                        <span className="text-center text-3xl">How was your experience?</span>

                        <form onSubmit={handleReview} className="flex flex-col w-full">
                            <textarea rows="3" name='feedback' placeholder="Message..." className="p-4 mt-4 rounded-md resize-none bg-gray-100"></textarea>
                            <select name="rating" className='w-10 mt-4 border-2'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <button type="submit" className="py-4 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">{user ? 'Leave feedback' : 'please login first'}</button>
                        </form>
                    </div>

                </div>
                <div className='col-span-5 lg:col-span-3 p-5'>
                    <h1 className='uppercase text-xl text-center font-bold mb-4'>our castomer service feedback</h1>
                    {reviews.length > 0 ? reviews.map(review => <Review key={review._id} review={review} handleDeletReview={handleDeletReview}></Review>) : <h2 className='text-5xl '> No reviews ....</h2>}
                </div>
            </div>
        </section>

    );
};

export default ServiceDetails;