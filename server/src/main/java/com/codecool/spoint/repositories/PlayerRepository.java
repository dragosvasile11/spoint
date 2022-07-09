package com.codecool.spoint.repositories;

import com.codecool.spoint.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findAllByOrderByIdAsc();
    //    Player findByEmail(String email);
    Optional<Player> findByUsername(String username);
    List<Player> findAllBy();
    boolean existsUserByUsername(String username);
}
