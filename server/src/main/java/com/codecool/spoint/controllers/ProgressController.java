package com.codecool.spoint.controllers;

import com.codecool.spoint.models.Progress;
import com.codecool.spoint.services.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/progress")
@CrossOrigin(origins = "http://localhost:3000")
public class ProgressController {

    private final ProgressService progressService;

    @Autowired
    public ProgressController(ProgressService progressService) {
        this.progressService = progressService;
    }

    @GetMapping("/{id}")
    public Optional<Progress> getProgressById(@PathVariable("id") Long id) {
        return progressService.getProgressById(id);
    }

}
