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

    public String deleteLeague(Long id) {
        if (getLeagueById(id).isPresent()) {
            League league = getLeagueById(id).get();
            Set<Player> players = league.getPlayers();

            for (Player player : players) {
                player.setLeague(null);
                player.setCreatedBy(null);
                playerRepository.save(player);
            }
            league.setCreator(null);
            league.setPlayers(null);
            leagueRepository.save(league);

            leagueRepository.delete(league);
            return "League deleted";
        }
        return "League not found";
    }

    public String updateLeagueName(Long id, League league) {
        Optional<League> leagueToFind = leagueRepository.findById(id);
        if (leagueToFind.isPresent()) {
            List<League> leaguesToCheck = getAllLeagues();
            for (League leagueToCheck : leaguesToCheck) {
                if (leagueToCheck.getName().equals(league.getName())) {
                    return "League name already taken";
                }
            }
            League leagueToUpdate = leagueToFind.get();
            leagueToUpdate.setName(league.getName() != null ? league.getName() : leagueToUpdate.getName());

            leagueRepository.save(leagueToUpdate);
            return "League name updated";
        }
        return "League not found";
    }

    public String addLeagueMember(Long leagueId, Long player_id) {
        if (getLeagueById(leagueId).isPresent()) {

            if (playerRepository.findById(player_id).isPresent()) {
                League league = getLeagueById(leagueId).get();
                Player player = playerRepository.findById(player_id).get();

                player.addLeague(league);
                playerRepository.save(player);
                return "Member added";
            }
            return "Player not found";
        }
        return "League not found";
    }

    public void deleteLeagueMember(Long leagueId, Long player_id) {
        if (getLeagueById(leagueId).isPresent()) {

            if (playerRepository.findById(player_id).isPresent()) {
                Player player = playerRepository.findById(player_id).get();
                player.setLeague(null);
                player.setCreatedBy(null);
                playerRepository.save(player);
            }
        }
    }

    public void updateScore(Long leagueId, Long score) {
        if (getLeagueById(leagueId).isPresent()) {

            League league = getLeagueById(leagueId).get();
            league.updateScore(score);
            leagueRepository.save(league);
        }
    }

}

