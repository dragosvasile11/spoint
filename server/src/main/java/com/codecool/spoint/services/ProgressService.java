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

    public void addProgress(Progress progress) {
        progressRepository.save(progress);
    }

    public void updateProgress(Long id, Progress progress) {
        Optional<Progress> progressToFind = progressRepository.findById(id);
        if (progressToFind.isPresent()) {
            Progress progressToUpdate = progressToFind.get();
            progressToUpdate.setFamousPlaceStage(progress.getFamousPlaceStage());
//            progressToUpdate.setRomaniaStage(progress.getRomaniaStage());
//            progressToUpdate.setWorldStage(progress.getWorldStage());

            progressRepository.save(progressToUpdate);
        }
    }

    public Optional<Progress> getUpdatedProgressById(Long id) {
        Optional<Progress> progressToFind = progressRepository.findById(id);
        if (progressToFind.isPresent()) {
            Progress progressToUpdate = progressToFind.get();
            progressToUpdate.setFamousPlaceStage(progressToUpdate.getFamousPlaceStage() + 1);
            progressRepository.save(progressToUpdate);
        }
        return progressRepository.findById(id);
    }
}
