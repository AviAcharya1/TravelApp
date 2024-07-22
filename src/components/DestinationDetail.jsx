// src/components/DestinationDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import destinations from '../Destinations.js';
import MapComponent from './MapComponent';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
`;

const DetailImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const DetailButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const ReviewContainer = styled.div`
  margin-top: 20px;
`;

const Review = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const DestinationDetail = () => {
    const { id } = useParams();
    const destination = destinations.find(dest => dest.id === parseInt(id));
    const [userReview, setUserReview] = useState({ comment: '', rating: 5 });
  
    if (!destination) {
      return <div>Destination not found</div>;
    }
  
    const handleReviewSubmit = (e) => {
      e.preventDefault();
      console.log('Review submitted:', userReview);
      // Here you would typically send the review to a server
      alert('Thank you for your review!');
      setUserReview({ comment: '', rating: 5 });
    };
  
    return (
      <DetailContainer>
        <h2>{destination.name}</h2>
        <DetailImage src={destination.image} alt={destination.name} />
        <p>{destination.longDescription}</p>
        <p>Rating: {destination.rating}</p>
        <p>Best time to visit: {destination.bestTime}</p>
        
        <h3>Location</h3>
        <MapComponent destinations={[destination]} />
  
        <h3>Reviews</h3>
        <ReviewContainer>
          {destination.reviews.map((review, index) => (
            <Review key={index}>
              <p>{review.user}: {review.comment}</p>
              <p>Rating: {review.rating}/5</p>
            </Review>
          ))}
        </ReviewContainer>
  
        <h4>Add Your Review</h4>
        <form onSubmit={handleReviewSubmit}>
          <textarea 
            value={userReview.comment}
            onChange={(e) => setUserReview({...userReview, comment: e.target.value})}
            placeholder="Your review"
            required
          />
          <select 
            value={userReview.rating}
            onChange={(e) => setUserReview({...userReview, rating: parseInt(e.target.value)})}
          >
            {[1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button type="submit">Submit Review</button>
        </form>
  
        <DetailButton>Book Now</DetailButton>
      </DetailContainer>
    );
  };
  
  export default DestinationDetail;