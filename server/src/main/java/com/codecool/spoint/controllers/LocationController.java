package com.codecool.spoint.controllers;

import com.codecool.spoint.models.Location;
import com.codecool.spoint.services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/locations")
@CrossOrigin(origins = "http://localhost:3000")
public class LocationController {

    private final LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("/{id}")
    public Optional<Location> getLocationById(@PathVariable("id") Long id) {
        return locationService.getLocationById(id);
    }
}
