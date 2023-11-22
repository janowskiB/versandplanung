package com.example.backend.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {
    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String address;
    private Integer phone;
}
