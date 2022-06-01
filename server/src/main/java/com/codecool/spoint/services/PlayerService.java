package com.codecool.spoint.services;

import com.codecool.spoint.models.Player;
import com.codecool.spoint.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAllByOrderByIdAsc();
    }

    public Optional<Player> getPlayerById(Long id) {
        return playerRepository.findById(id);
    }

    public void addPlayer(Player player) {
        playerRepository.save(player);
    }

    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }

    public void updatePlayer(Long id, Player player) {
        Optional<Player> playerToFind = playerRepository.findById(id);
        if (playerToFind.isPresent()) {
            Player playerToUpdate = playerToFind.get();
            playerToUpdate.setFirstName(player.getFirstName() != null ? player.getFirstName() : playerToUpdate.getFirstName());
            playerToUpdate.setLastName(player.getLastName() != null ? player.getLastName() : playerToUpdate.getLastName());
            playerToUpdate.setEmail(player.getEmail() != null ? player.getEmail() : playerToUpdate.getEmail());
//            playerToUpdate.setLeague(player.getLeague() != null ? player.getLeague() : playerToUpdate.getLeague());

            playerRepository.save(playerToUpdate);
        }
    }

}
