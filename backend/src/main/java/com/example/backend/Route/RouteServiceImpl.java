package com.example.backend.Route;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RouteServiceImpl implements RouteService {
    private RouteRepository routeRepository;

    @Override
    public List<RouteDto> getAllRoutes() {
        return routeRepository.findAll()
                .stream()
                .map(route -> new RouteDto(
                        route.getId(),
                        route.getStart(),
                        route.getFinish(),
                        route.getDistance()
                ))
                .collect(Collectors.toList());
    }
}
