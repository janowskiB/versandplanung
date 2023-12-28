package com.example.backend.Fleet;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/fleets")
public class FleetController {
    private final FleetService fleetService;

    @GetMapping
    public List<FleetDto> getAllFleets() {
        return fleetService.getAllFleets();
    }
}
