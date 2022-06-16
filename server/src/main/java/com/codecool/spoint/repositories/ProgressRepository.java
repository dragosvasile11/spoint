package com.codecool.spoint.repositories;

import com.codecool.spoint.models.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgressRepository extends JpaRepository<Progress, Long> {
}
