package com.codecool.spoint.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Player")
@Table(name = "players")
public class Player {

    @Id
    @SequenceGenerator(
            name = "player_sequence",
            sequenceName = "player_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "player_sequence"
    )
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false, columnDefinition = "TEXT", unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "score")
    private Long score = 0L;

    @Column(name = "allow_emails")
    private boolean allowEmails;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name = "league_id")
    @JsonIgnore
    private League league;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "creator")
    @JsonIgnore
    private League createdBy;

    @OneToOne
    @JoinColumn(name = "progress_id")
    private Progress progress;

    @Column(name = "avatarImage_URL")
    private String avatarImageURL;

    @ManyToMany(fetch = EAGER)
    private Collection<Role> roles = new ArrayList<>();

    public Player(String firstName, String lastName, String email, String password, boolean allowEmails, String avatarImageURL) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.allowEmails = allowEmails;
        this.avatarImageURL = avatarImageURL;
    }
}
