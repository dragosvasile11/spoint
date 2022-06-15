package com.codecool.spoint.config;

import com.codecool.spoint.models.League;
import com.codecool.spoint.models.Location;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.models.Progress;
import com.codecool.spoint.repositories.LeagueRepository;
import com.codecool.spoint.repositories.LocationRepository;
import com.codecool.spoint.repositories.PlayerRepository;
import com.codecool.spoint.repositories.ProgressRepository;
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

    @Bean
    CommandLineRunner commandLineRunnerProgress (ProgressRepository progressRepository) {
        return args -> {
            Progress progress1 = new Progress(0, 0, 0);
            Progress progress2 = new Progress(1, 0, 0);
            progressRepository.saveAll(List.of(progress1, progress2));
        };
    }

    @Bean
    CommandLineRunner commandLineRunnerLocation (LocationRepository locationRepository) {
        return args -> {
            Location location1 = new Location(41.88681699884825, 12.489867356141033);
            Location location2 = new Location(51.500232577452806, -0.1280190147592774);
            Location location3 = new Location(41.401493377336934, 2.172874982126398);
            Location location4 = new Location(40.70560573166003, -74.00791460008375);
            Location location5 = new Location(44.39029978067226, 26.07444242736911);
            locationRepository.saveAll(List.of(location1, location2, location3, location4, location5));
        };
    }
}
