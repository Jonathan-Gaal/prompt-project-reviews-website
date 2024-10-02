import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx'
import Reviews from './Components/Reviews.jsx';
import NewReviewForm from './Components/NewReviewForm.jsx';
import Footer from './Components/Footer.jsx';
import reviewsData from './mockData/reviewsData.js';

const App = () => {
  const [reviews, setReviews] = useState(reviewsData);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        
        <Reviews reviewsData={reviews} />
        <NewReviewForm addReview={addReview} />
      </main>
      <Footer />
    </div>
  )
}

export default App
