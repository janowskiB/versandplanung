package com.example.backend.Fleet;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fleets")
@RequiredArgsConstructor
public class FleetController {
    private final FleetService fleetService;

    @GetMapping
    List<Fleet> getFleets() {
        return fleetService.getFleets();
    }
}
