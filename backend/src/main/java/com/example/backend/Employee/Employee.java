package com.example.backend.Employee;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Employee {
    private int id;
    private String firstname;
    private String lastname;
    private String type;
}
