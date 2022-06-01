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

    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "members", nullable = true, columnDefinition = "TEXT")
    private List<Player> members;

    @Column(name = "league_creator", nullable = false, columnDefinition = "TEXT")
    private Player creator;

    @Column(name = "league_score")
    private Long league_score = 0L;

    public League(String name, Player creator) {
        this.name = name;
        this.members = new ArrayList<>();
        this.creator = creator;
        this.league_score = 0;
    }
}
