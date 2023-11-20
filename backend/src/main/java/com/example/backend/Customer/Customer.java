package com.example.backend.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Customer {
    private int id;
    private String firstname;
    private String lastname;
    private String type;
}
