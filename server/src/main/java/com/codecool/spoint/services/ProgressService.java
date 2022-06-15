package com.codecool.spoint.services;

import com.codecool.spoint.models.Progress;
import com.codecool.spoint.repositories.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProgressService {

    private final ProgressRepository progressRepository;

    @Autowired
    public ProgressService(ProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }

    public Optional<Progress> getProgressById(Long id) {
        return progressRepository.findById(id);
    }
}
