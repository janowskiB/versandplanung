package com.example.backend.Employee;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeRepository {
    private final List<Employee> employees = List.of(
            new Employee(1, "John", "Doe", "Employee"),
            new Employee(2, "Jane", "Doe", "Employee"),
            new Employee(3, "Jack", "Doe", "Employee"),
            new Employee(4, "Jill", "Doe", "Employee"),
            new Employee(5, "Jim", "Doe", "Employee"),
            new Employee(6, "Jenny", "Doe", "Employee")
    );

    public List<Employee> getEmployees() {
        return employees;
    }
}
