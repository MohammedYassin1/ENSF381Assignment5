import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import reviews from './data/reviews.js';
import './HomeMainSection.css';

const HomeMainSection = () => {
    const [selectedReviews, setSelectedReviews] = useState([]);

    useEffect(() => {
        const randomReviews = [];
        const tempReviews = [...reviews]; 
    
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * tempReviews.length);
            randomReviews.push(tempReviews[randomIndex]);
            tempReviews.splice(randomIndex, 1); 
        }
    
        setSelectedReviews(randomReviews);
    }, []);

    return (
        <main>
            <section>
                <h2>About Us</h2>
                <p className="vision-mission">Our mission is to deliver exceptional products/services that exceed expectations
                    and drive sustainable progress through integrity, collaboration, and continuous improvement.</p>
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </section>
            <section>
                <h2>Customer Reviews</h2>
                {selectedReviews.map((review, index) => (
                    <div key={index}>
                        <h3>{review.customerName}</h3>
                        <p>{review.reviewContent}</p>
                        <p className="stars">{'⭐'.repeat(review.stars)}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default HomeMainSection;