package com.codecool.spoint.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Progress")
@Table(name = "progress")
public class Progress {

    @Id
    @SequenceGenerator(
            name = "progress_sequence",
            sequenceName = "progress_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "progress_sequence"
    )
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "famous_place_stage", nullable = false)
    private int famousPlaceStage;

    @Column(name = "romania_stage", nullable = false)
    private int romaniaStage;

    @Column(name = "world_stage", nullable = false)
    private int worldStage;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "progress")
    @JsonIgnore
    private Player player;

    public Progress(int famousPlaceStage, int romaniaStage, int worldStage) {
        this.famousPlaceStage = famousPlaceStage;
        this.romaniaStage = romaniaStage;
        this.worldStage = worldStage;
    }
}
