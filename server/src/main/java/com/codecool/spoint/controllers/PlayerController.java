package com.codecool.spoint.controllers;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.security.JwtRequest;
import com.codecool.spoint.security.JwtResponse;
import com.codecool.spoint.security.JwtTokenUtil;
import com.codecool.spoint.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping(path = "/")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {
    private final AuthenticationManager authenticationManager;

    private final JwtTokenUtil jwtTokenUtil;
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService, AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil) {
        this.playerService = playerService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Player player) {  // wildcard - player
        if (!playerService.checkUsernameExist(player)) {
            playerService.signUpUser(player);
            return ResponseEntity.ok(player);
        } else {
            return (ResponseEntity<?>) ResponseEntity.status(500);
        }
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> generateAuthenticationToken(@RequestBody JwtRequest authenticationRequest)
            throws Exception {
        System.out.println("***********************");
        System.out.println(authenticationRequest.getUsername());
        System.out.println(authenticationRequest.getPassword());
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = playerService
                .loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception {
        System.out.println(username);
        System.out.println(password);
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
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
