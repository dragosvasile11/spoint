package com.codecool.spoint.repositories;

import com.codecool.spoint.models.League;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeagueRepository extends JpaRepository<League, Long> {
}
