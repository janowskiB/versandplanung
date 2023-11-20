package com.example.backend.Fleet;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FleetRepository {
    private final List<Fleet> fleets = List.of(
            new Fleet(1, "Vehicle 1", "MAN", "On Tour"),
            new Fleet(2, "Vehicle 2", "Mercedes", "On Tour"),
            new Fleet(3, "Vehicle 3", "Mercedes", "Garage"),
            new Fleet(4, "Vehicle 4", "MAN", "Free"),
            new Fleet(5, "Vehicle 5", "Iveco", "Free"),
            new Fleet(6, "Vehicle 6", "Iveco", "Garage")
    );

    public List<Fleet> getFleets() {
        return fleets;
    }
}
