package com.codecool.spoint.services;

import com.codecool.spoint.models.Location;
import com.codecool.spoint.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LocationService {

    private final LocationRepository locationRepository;

    @Autowired
    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public Optional<Location> getLocationById(Long id) {
        return locationRepository.findById(id);
    }
}
