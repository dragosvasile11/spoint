package com.codecool.spoint.repositories;

import com.codecool.spoint.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findAllByOrderByIdAsc();
    Player findByEmail(String email);
}
