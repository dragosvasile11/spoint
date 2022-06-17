package com.codecool.spoint.controllers;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
    public boolean addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @PatchMapping("/update/{id}")
    public void updatePlayerById(@PathVariable("id") Long id, @RequestBody Map<String, Object> updates) {
        playerService.updatePlayer(id, updates);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePlayer(@PathVariable("id") Long id) {
        playerService.deletePlayer(id);
    }

    @PostMapping("/check-if-player-exists")
    public Optional<LoginToken> checkLogin(@RequestBody Player player) {
        return playerService.checkLogin(player);
    }
}
