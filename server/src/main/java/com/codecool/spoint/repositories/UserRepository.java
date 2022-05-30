package com.codecool.spoint.repositories;

import com.codecool.spoint.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
