package com.codecool.spoint.config;

import com.codecool.spoint.models.League;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.repositories.LeagueRepository;
import com.codecool.spoint.repositories.PlayerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class InitialConfig {

    @Bean
    CommandLineRunner commandLineRunnerStudent (PlayerRepository playerRepository) {
        return args -> {
            Player player1 = new Player("John", "Doe", "john.doe@mail.com", "1234");
            Player player2 = new Player("George", "Bush", "bush@mail.com", "1234");
            playerRepository.saveAll(List.of(player1, player2));
        };
    }

    @Bean
    CommandLineRunner commandLineRunnerLeague (LeagueRepository leagueRepository) {
        return args -> {
            League league1 = new League("Snow Flaskes");
            League league2 = new League("Reality Checkers");
            leagueRepository.saveAll(List.of(league1, league2));
        };
    }
}
