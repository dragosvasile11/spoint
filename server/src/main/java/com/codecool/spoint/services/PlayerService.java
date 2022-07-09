package com.codecool.spoint.services;

import com.codecool.spoint.models.LoginToken;
import com.codecool.spoint.models.Player;
import com.codecool.spoint.models.Role;
import com.codecool.spoint.repositories.PlayerRepository;
import com.codecool.spoint.repositories.RoleRepository;
import lombok.AllArgsConstructor;
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
import java.text.MessageFormat;
import java.util.*;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class PlayerService implements UserDetailsService {

    private final PlayerRepository playerRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public void signUpUser(Player player) {

        final String encryptedPassword = passwordEncoder.encode(player.getPassword());

        player.setPassword(encryptedPassword);

        playerRepository.save(player);

    }

    public boolean checkUsernameExist(Player player) {
        return playerRepository.existsUserByUsername(player.getUsername());
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final Optional<Player> optionalUser = playerRepository.findByUsername(username);

        return (UserDetails) optionalUser.orElseThrow(() -> new UsernameNotFoundException(MessageFormat.format("User with username {0} cannot be found.", username)));
    }


    //    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Player player = playerRepository.findByEmail(email);
//        if(player == null) {
//            log.error("User not found in the database");
//            throw new UsernameNotFoundException("User not found in the database");
//        }
//        else {
//            log.info("User found in the database: {}", email);
//        }
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        player.getRoles().forEach(role -> {
//            authorities.add(new SimpleGrantedAuthority(role.getName()));
//        });
//        return new User(player.getEmail(), player.getPassword(), authorities);
//    }
//
    public List<Player> getAllPlayers() {
        return playerRepository.findAllByOrderByIdAsc();
    }
//
//    public Optional<Player> getPlayerById(Long id) {
//        return playerRepository.findById(id);
//    }
//
//    public Optional<LoginToken> addPlayer(Player player) {
//        try {
//            player.setPassword(passwordEncoder.encode(player.getPassword()));
//            playerRepository.save(player);
//        } catch (Throwable SqlExceptionHelper) {
//            return Optional.empty();
//        }
//        return Optional.of(new LoginToken(player.getId(), true));
//    }
//
//    public void deletePlayer(Long id) {
//        playerRepository.deleteById(id);
//    }
//
//    public void updatePlayer(Long id, Map<String, Object> updates) {
//        Optional<Player> playerToFind = playerRepository.findById(id);
//
//        if (playerToFind.isPresent()) {
//            Player playerToUpdate = playerToFind.get();
//
//            updates.forEach((key, value) -> {
//                Field field = ReflectionUtils.findField(Player.class, key);
//                    field.setAccessible(true);
//                    ReflectionUtils.setField(field, playerToUpdate, value);
//            });
//            playerRepository.save(playerToUpdate);
//        }
//    }
//
//    public Optional<LoginToken> checkLogin(Player player) {
//        List<Player> players = getAllPlayers();
//        for (Player checkPlayer : players) {
//            if (checkPlayer.getEmail().equals(player.getEmail()) &&
//                    checkPlayer.getPassword().equals(player.getPassword())) {
//
//                return Optional.of(new LoginToken(
//                        checkPlayer.getId(),
//                        checkPlayer.getFirstName(),
//                        checkPlayer.getLastName(),
//                        checkPlayer.getEmail(),
//                        checkPlayer.getAvatarImageURL()
//                ));
//            }
//        }
//        return Optional.empty();
//    }
//
//    public void addRoleToAppUser(String email, String roleName) {
//        log.info("Adding role {} to user {}", roleName, email);
//        Player player = playerRepository.findByEmail(email);
//        Role role = roleRepository.findByName(roleName);
//        player.getRoles().add(role);
//    }
}
