package com.codecool.spoint.services;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.models.Progress;
import com.codecool.spoint.models.Review;
import com.codecool.spoint.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ReviewService {

    public final ReviewRepository reviewRepository;

    @Autowired
    ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAllByOrderByIdAsc();
    }

    public Optional<Review> getReviewById(Long id) {
        return reviewRepository.findById(id);
    }

    public boolean addReview(Review review) {
        try {
            reviewRepository.save(review);
        } catch (Throwable SqlExceptionHelper) {
            return false;
        }
        return true;
    }

    public void updateReview(Long id, Map<String, Object> updates) {
        Optional<Review> reviewToFind = reviewRepository.findById(id);
        if (reviewToFind.isPresent()) {
            Review reviewToUpdate = reviewToFind.get();
            updates.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Review.class, key);
                field.setAccessible(true);
                ReflectionUtils.setField(field, reviewToUpdate, value);
            });

            reviewRepository.save(reviewToUpdate);
        }
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
