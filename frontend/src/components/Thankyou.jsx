import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Thankyou(){
    const location = useLocation();
    const { feedback } = location.state || { feedback: [] };
    const [previousFeedback, setPreviousFeedback] = useState([]);

    useEffect(() => {
        const storedFeedback = JSON.parse(localStorage.getItem('feedbackList')) || [];
        setPreviousFeedback(storedFeedback);
    }, []);

    return (
    <div className="fixed h-[100vh] w-[100vw] bg-violet-200 flex justify-center items-center">
        <div className="max-w-lg mx-auto p-8 bg-violet-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-violet-950 mb-6">Thank You!</h2>
            <p className="text-center text-green-500 mb-4">Your feedback has been submitted successfully!</p>
            <h3 className="text-xl font-semibold mt-6 text-violet-950">Submitted Feedback</h3>
            <ul className="mt-2">
                {feedback.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 py-2">
                        <strong>{item.name} ({item.email}):</strong> {item.message}
                    </li>
                ))}
            </ul>
            <h3 className="text-xl font-semibold mt-6 text-violet-950">Previous Feedbacks</h3>
            <ul className="mt-2">
                {previousFeedback.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 py-2">
                        <strong>{item.name} ({item.email}):</strong> {item.message}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};
