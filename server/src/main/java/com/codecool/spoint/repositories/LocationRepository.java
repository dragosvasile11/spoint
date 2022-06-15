package com.codecool.spoint.repositories;

import com.codecool.spoint.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
