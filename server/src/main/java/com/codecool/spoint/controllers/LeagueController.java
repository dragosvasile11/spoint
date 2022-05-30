package com.codecool.spoint.controllers;

import com.codecool.spoint.models.League;
import com.codecool.spoint.services.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/leagues")
public class LeagueController {

    private final LeagueService leagueService;

    @Autowired
    public LeagueController(LeagueService leagueService) {
        this.leagueService = leagueService;
    }

    @GetMapping
    public List<League> getAllLeagues() {
        return leagueService.getAllLeagues();
    }

    @GetMapping("/{id}")
    public Optional<League> getLeagueById(@PathVariable("id") Long id) {
        return leagueService.getLeagueById(id);
    }
}

