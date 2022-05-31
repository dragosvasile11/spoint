package com.codecool.spoint.models;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "League")
@Table(name = "leagues")
public class League {

    @Id
    @SequenceGenerator(
            name = "league_sequence",
            sequenceName = "league_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "league_sequence"
    )

    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name", nullable = false, columnDefinition = "TEXT")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "league")
    private Set<Player> members;

    @Column(name = "league_score", nullable = true, columnDefinition = "INTEGER")
    private int league_score;

    public League(String name) {
        this.name = name;
        this.members = new HashSet<>();
        this.league_score = 0;
    }
}
