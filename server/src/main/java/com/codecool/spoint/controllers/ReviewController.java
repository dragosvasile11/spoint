package com.codecool.spoint.controllers;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.models.Review;
import com.codecool.spoint.services.PlayerService;
import com.codecool.spoint.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/{id}")
    public Optional<Review> getPlayerById(@PathVariable("id") Long id) {
        return reviewService.getReviewById(id);
    }

    @PostMapping("/add")
    public boolean addPlayer(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    @PatchMapping("/update/{id}")
    public void updateReviewById(@PathVariable("id") Long id, @RequestBody Map updates) {
        reviewService.updateReview(id, updates);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteReview(@PathVariable("id") Long id) {
            reviewService.deleteReview(id);
        }
}
