import Review from './Review.jsx'




const Reviews = ({reviewsData}) => {
  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      {reviewsData.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          date={review.date}
          summary={review.summary}
        />
      ))}
    </div>
  );
};

export default Reviews;