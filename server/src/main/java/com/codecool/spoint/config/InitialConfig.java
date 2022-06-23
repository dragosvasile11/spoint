package com.codecool.spoint.config;

import com.codecool.spoint.models.*;
import com.codecool.spoint.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class InitialConfig {

    @Bean
    CommandLineRunner commandLineRunnerStudent (PlayerRepository playerRepository, ReviewRepository reviewRepository) {
        return args -> {
            Player player1 = new Player("John", "Doe", "john.doe@mail.com", "1234", true, "3.jpg");
            Player player2 = new Player("George", "Bush", "bush@mail.com", "1234", false, "4.jpg");
            Player player3 = new Player("Steve", "Jobs", "jobs@mail.com", "1234", false, "2.jpg");
            playerRepository.saveAll(List.of(player1, player2, player3));

            Review review1 = new Review(player1, "Really fun and interesting, love the community and the game in general. country streak mode is super fun and the learning world map is great too :)" , 3L);
            Review review2 = new Review(player2, "The app is rapidly getting new features and improvements! It's on its way to become amazing! Love it!" , 5L);
            Review review3 = new Review(player3, "Great fun game that is also educational." , 3L);

            reviewRepository.saveAll(List.of(review1, review2, review3));
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
            Progress progress1 = new Progress(1, 0, 0);
            Progress progress2 = new Progress(1, 0, 0);
            progressRepository.saveAll(List.of(progress1, progress2));
        };
    }

    @Bean
    CommandLineRunner commandLineRunnerLocation (LocationRepository locationRepository) {
        return args -> {
            Location location1 = new Location(41.88681699884825, 12.489867356141033);
            Location location2 = new Location(51.5016002435697, -0.1261057896943814);
            Location location3 = new Location(41.401493377336934, 2.172874982126398);
            Location location4 = new Location(40.70560573166003, -74.00791460008375);
            Location location5 = new Location(44.39029978067226, 26.07444242736911);
            locationRepository.saveAll(List.of(location1, location2, location3, location4, location5));
        };
    }
}
