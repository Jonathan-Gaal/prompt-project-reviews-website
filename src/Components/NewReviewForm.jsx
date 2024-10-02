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
    // Clear the form
    setName('');
    setDate('');
    setSummary('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Review</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default NewReviewForm;