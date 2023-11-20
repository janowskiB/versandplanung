package com.example.backend.Employee;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    List<Employee> getEmployees() {
        return employeeRepository.getEmployees();
    }
}
