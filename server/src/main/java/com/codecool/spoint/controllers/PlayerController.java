package com.codecool.spoint.controllers;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/players")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {

    private final PlayerService playerService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public PlayerController(PlayerService playerService, PasswordEncoder passwordEncoder) {
        this.playerService = playerService;
        this.passwordEncoder = passwordEncoder;
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
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public Optional<LoginToken> addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @PatchMapping("/update/{id}")
    public void updatePlayerById(@PathVariable("id") Long id, @RequestBody Map updates) {
        playerService.updatePlayer(id, updates);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePlayer(@PathVariable("id") Long id) {
        playerService.deletePlayer(id);
    }

    @PostMapping("/check-if-player-exists")
    public Optional<LoginToken> checkLogin(@RequestBody Player player) {
        System.out.println(player.getPassword());
        player.setPassword(passwordEncoder.encode(player.getPassword()));
        return playerService.checkLogin(player);
    }

    @GetMapping("/allow")
    public String allow() {
        return "You have entered allow route";
    }
}
