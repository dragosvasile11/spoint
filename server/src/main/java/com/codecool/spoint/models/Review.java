package com.codecool.spoint.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.Instant;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Review")
@Table(name = "reviews")
public class Review {

    @Id
    @SequenceGenerator(
            name = "review_sequence",
            sequenceName = "review_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "review_sequence"
    )
    @Column(name = "id", updatable = false)
    private Long id;

    @OneToOne(mappedBy = "review")
    @JsonIgnore
    private Player player;

    @Column(name = "firstName", updatable = false, nullable = false)
    private String firstName;

    @Column(name = "message", updatable = false, nullable = false)
    private String message;

    @Column(name = "rating", updatable = false, nullable = false)
    private Long rating;

    @Column(name = "published_on", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp publishedOn;

    public Review(Player player, String message, Long rating) {
        this.player = player;
        this.message = message;
        this.rating = rating;
        this.firstName = player.getFirstName();
        this.publishedOn = Timestamp.from(Instant.now());
    }
}
