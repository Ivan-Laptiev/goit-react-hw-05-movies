import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../servises/API';

export default function Reviews() {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesReviews(movieId).then(data => {
      setReview(data.results);
    });
  }, [movieId]);

  return (
    <ul>
      {review && review.length ? (
        review.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li>No reviews</li>
      )}
    </ul>
  );
}