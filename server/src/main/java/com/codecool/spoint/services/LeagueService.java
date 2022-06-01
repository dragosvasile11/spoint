package com.codecool.spoint.services;

import com.codecool.spoint.models.League;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.repositories.LeagueRepository;
import com.codecool.spoint.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeagueService {

    private final LeagueRepository leagueRepository;
    private final PlayerRepository playerRepository;

    @Autowired
    public LeagueService(LeagueRepository leagueRepository, PlayerRepository playerRepository) {
        this.leagueRepository = leagueRepository;
        this.playerRepository = playerRepository;
    }

    public List<League> getAllLeagues() {
        return leagueRepository.findAllByOrderByIdAsc();
    }

    public Optional<League> getLeagueById(Long id) {
        return leagueRepository.findById(id);
    }

    public String addLeague(League league, Long player_id) {
        if (!checkIfLeagueExists(league)) {
            if (playerRepository.findById(player_id).isPresent()) {
                Player player = playerRepository.findById(player_id).get();

                player.setLeague(league);
                league.setCreator(player);
                league.addMember(player);
                leagueRepository.save(league);
                return "League created";
            }
        }
        return "League already exists";
    }

}

