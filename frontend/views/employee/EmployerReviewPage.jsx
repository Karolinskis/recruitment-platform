import React, { useState } from "react";
import Review from "../../components/Review";
import WriteReview from "../../components/ReviewForm"; // Import the WriteReview component
import { Button } from "react-bootstrap";

const EmployerReviews = () => {
  const [showWriteReview, setShowWriteReview] = useState(false); // State to manage the WriteReview component visibility

  const reviews = [
    { reviewerName: "John Doe", rating: 4, comment: "Great employer!" },
    { reviewerName: "Jane Smith", rating: 5, comment: "Excellent experience!" },
    // Add more reviews as needed
  ];

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <Review
          key={index}
          reviewerName={review.reviewerName}
          rating={review.rating}
          comment={review.comment}
        />
      ))}

      {/* Write Review Button */}
      <Button
        variant="primary"
        size="sm"
        className="mt-3"
        onClick={() => setShowWriteReview(true)}
      >
        Write Review
      </Button>

      {/* WriteReview component */}
      {showWriteReview && (
        <WriteReview onClose={() => setShowWriteReview(false)} />
      )}
    </div>
  );
};

export default EmployerReviews;
