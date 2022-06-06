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

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "league")
    private Set<Player> players = new HashSet<>();

    @OneToOne()
    @JoinColumn(name = "created_by_player_id")
    private Player creator;

    @Column(name = "league_score")
    private Long league_score = 0L;


    public League(String name) {
        this.name = name;
    }

    public void addMember(Player player) {
        this.players.add(player);
    }

    public void updateScore(Long score) {
        this.league_score += score;
    }
}
