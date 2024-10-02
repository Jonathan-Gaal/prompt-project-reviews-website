import React from 'react';
import './Reviews.css';

const Review = ({ name, date, summary }) => (
  <div className="review">
    <h3 className="review-name">{name}</h3>
    <p className="review-date">{date}</p>
    <p className="review-summary">{summary}</p>
  </div>
);

const Reviews = ({ reviewsData }) => {
  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      <div className="reviews-list">
        {reviewsData.map((review, index) => (
          <Review
            key={index}
            name={review.name}
            date={review.date}
            summary={review.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;