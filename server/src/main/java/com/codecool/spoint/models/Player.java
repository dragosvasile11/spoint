package com.codecool.spoint.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name = "league_id")
    @JsonIgnore
    private League league;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "creator")
    @JsonIgnore
    private League createdBy;

    public Player(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
