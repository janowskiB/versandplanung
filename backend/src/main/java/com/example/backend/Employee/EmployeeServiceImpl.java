package com.example.backend.Employee;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeDto> getAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(employee -> new EmployeeDto(
                        employee.getId(),
                        employee.getFirstname(),
                        employee.getLastname(),
                        employee.getBirthdate(),
                        employee.getPosition()
                ))
                .collect(Collectors.toList());
    }
}
