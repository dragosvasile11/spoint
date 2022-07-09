package com.codecool.spoint.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import static javax.persistence.FetchType.EAGER;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Player")
@Table(name = "players")
public class Player implements UserDetails {

    @Id
    @SequenceGenerator(
            name = "player_sequence",
            sequenceName = "player_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "player_sequence"
    )
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false, columnDefinition = "TEXT", unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "score")
    private Long score = 0L;

    @Column(name = "allow_emails")
    private boolean allowEmails;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name = "league_id")
    @JsonIgnore
    private League league;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "creator")
    @JsonIgnore
    private League createdBy;

    @OneToOne
    @JoinColumn(name = "progress_id")
    private Progress progress;

    @OneToOne
    @JoinColumn(name = "review_id")
    private Review review;

    @Column(name = "avatarImage_URL")
    private String avatarImageURL;

    @ManyToMany(fetch = EAGER)
    private Collection<Role> roles = new ArrayList<>();

    public Player(String firstName, String lastName, String email, String password, boolean allowEmails, String avatarImageURL) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = email;
        this.password = password;
        this.allowEmails = allowEmails;
        this.avatarImageURL = avatarImageURL;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        final SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority("ROLE_USER");
        return Collections.singletonList(simpleGrantedAuthority);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
