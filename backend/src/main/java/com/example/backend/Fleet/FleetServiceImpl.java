package com.example.backend.Fleet;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FleetServiceImpl implements FleetService {
    private FleetRepository fleetRepository;

    @Override
    public List<FleetDto> getAllFleets() {
        return fleetRepository.findAll()
                .stream()
                .map(fleet -> new FleetDto(
                        fleet.getId(),
                        fleet.getName(),
                        fleet.getType(),
                        fleet.getStatus()
                ))
                .collect(java.util.stream.Collectors.toList());
    }
}
