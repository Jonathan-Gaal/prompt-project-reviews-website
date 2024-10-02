import React, { useState } from 'react';
import './NewReviewForm.css';

const NewReviewForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, date, summary };
    addReview(newReview);
    setName('');
    setDate('');
    setSummary('');
  };

  return (
    <div className="new-review-container">
      <h2 className="new-review-title">Add New Review</h2>
      <form onSubmit={handleSubmit} className="new-review-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="form-input form-textarea"
          />
        </div>
        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
};

export default NewReviewForm;