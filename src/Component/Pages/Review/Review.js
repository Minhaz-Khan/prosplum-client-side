import React, { useState } from 'react';

const Review = ({ review, handleDeletReview }) => {
    const { email, name, data, feedback, rating, serviceId, _id, image } = review
    const [isDisabled, setIsLoading] = useState(true);

    const handleReviewEdit = event => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        console.log(feedback);
    }

    const handleDeletButton = (id) => {
        console.log(id);
        const isDelete = window.confirm('are you sure delete this review')
        if (isDelete) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('review deleted successfully')
                        handleDeletReview(id)
                    }
                })
        }
    }
    return (
        <div>
            {review &&
                <div className='my-5'>

                    <div className='flex justify-between items-center'>
                        <div class="flex items-center gap-x-2">
                            <img class="object-cover w-12 h-12 rounded-full" src={image} alt="" />

                            <div>
                                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

                                <p class="text-sm text-gray-500 dark:text-gray-400">{data}</p>
                            </div>
                        </div>
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
                            <p className='text-slate-300 ml-2'>{rating}</p>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <form onSubmit={handleReviewEdit} className='flex justify-between'>
                        <input type="text" name='feedback' value={feedback} disabled={isDisabled} className={`${isDisabled ? 'border-0' : 'border-2'} bg-white`} />
                        <div>
                            <button onClick={() => setIsLoading(!isDisabled)} className={`py-1 px-2 ring-2 hover:bg-blue-600 hover:text-white ring-blue-500 rounded-xl `}> {isDisabled ? 'Edit' : 'Close'}</button>
                        </div>
                    </form>
                    {isDisabled ? <button OnClick={() => handleDeletButton(_id)} className='py-1 px-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl ml-2'> Delete</button> :
                        <button type='submit' className='py-1 px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl ml-2'>submit</button>}

                </div>}
        </div>
    );
};

export default Review;