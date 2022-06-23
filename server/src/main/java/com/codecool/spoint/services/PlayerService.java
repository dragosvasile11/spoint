package com.codecool.spoint.services;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.repositories.PlayerRepository;
import com.codecool.spoint.repositories.RoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import javax.transaction.Transactional;
import java.lang.reflect.Field;
import java.util.*;

@Service
@Transactional
@Slf4j
public class PlayerService implements UserDetailsService {

    private final PlayerRepository playerRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public PlayerService(PlayerRepository playerRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.playerRepository = playerRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Player player = playerRepository.findByUsername(username);
        if(player == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        }
        else {
            log.info("User found in the database: {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        player.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new User(player.getEmail(), player.getPassword(), authorities);
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAllByOrderByIdAsc();
    }

    public Optional<Player> getPlayerById(Long id) {
        return playerRepository.findById(id);
    }

    public Optional<LoginToken> addPlayer(Player player) {
        try {
            playerRepository.save(player);
        } catch (Throwable SqlExceptionHelper) {
            return Optional.empty();
        }
        return Optional.of(new LoginToken(player.getId(), true));
    }

    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }

    public void updatePlayer(Long id, Map<String, Object> updates) {
        Optional<Player> playerToFind = playerRepository.findById(id);

        if (playerToFind.isPresent()) {
            Player playerToUpdate = playerToFind.get();

            updates.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Player.class, key);
                    field.setAccessible(true);
                    ReflectionUtils.setField(field, playerToUpdate, value);
            });
            playerRepository.save(playerToUpdate);
        }
    }

    public Optional<LoginToken> checkLogin(Player player) {
        List<Player> players = getAllPlayers();

        for (Player checkPlayer : players) {
            if (checkPlayer.getEmail().equals(player.getEmail()) &&
                    checkPlayer.getPassword().equals(player.getPassword())) {

                return Optional.of(new LoginToken(
                        checkPlayer.getId(),
                        checkPlayer.getFirstName(),
                        checkPlayer.getLastName(),
                        checkPlayer.getEmail(),
                        checkPlayer.getAvatarImageURL()
                ));
            }
        }
        return Optional.empty();
    }
}
