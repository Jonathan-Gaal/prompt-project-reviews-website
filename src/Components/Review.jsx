const Review = ({ name, date, summary }) => (
  <div className="review">
    <h3>{name}</h3>
    <p className="date">{date}</p>
    <p className="summary">{summary}</p>
  </div>
);

export default Review;
