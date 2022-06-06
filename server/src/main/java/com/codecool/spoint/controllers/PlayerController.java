package com.codecool.spoint.controllers;

import com.codecool.spoint.models.Player;
import com.codecool.spoint.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/players")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Optional<Player> getPlayerById(@PathVariable("id") Long id) {
        return playerService.getPlayerById(id);
    }

    @PostMapping("/add")
    public void addPlayer(@RequestBody Player player) {
        playerService.addPlayer(player);
    }

    @PutMapping("/update/{id}")
    public void updatePlayerById(@PathVariable("id") Long id, @RequestBody Player player) {
        playerService.updatePlayer(id, player);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePlayer(@PathVariable("id") Long id) {
        playerService.deletePlayer(id);
    }

    @PostMapping("/check-if-player-exists")
    public boolean checkLogin(@RequestBody Player player) {
        return playerService.checkLogin(player);
    }
}
