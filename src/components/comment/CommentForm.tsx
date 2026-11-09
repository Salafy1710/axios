
import React from 'react';
import { useState } from 'react';

function CommentForm() {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://dummyjson.com/comments/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    body: comment,
                    postId: 5,
                }),
            });

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col w-96'>
                <label
                    htmlFor="comment"
                    className='text-sm'>
                    Comment
                </label>

                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='border'>
                    </textarea>

                <button type="submit" className='bg-blue-500 text-white py-2 rounded-md mt-3 hover:bg-blue-600 transition'>
                    Submit
                </button>
            </div>
        </form>
    );
}

export default CommentForm;
