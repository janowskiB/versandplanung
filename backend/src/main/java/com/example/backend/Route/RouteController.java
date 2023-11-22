package com.example.backend.Route;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/routes")
public class RouteController {
    private RouteServiceImpl routeService;

    @GetMapping
    public List<RouteDto> getAllRoutes() {
        return routeService.getAllRoutes();
    }
}
