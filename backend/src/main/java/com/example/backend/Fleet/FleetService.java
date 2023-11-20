package com.example.backend.Fleet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FleetService {
    private final FleetRepository fleetRepository;

    List<Fleet> getFleets() {
        return fleetRepository.getFleets();
    }
}
