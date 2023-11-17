package com.example.backend.Customer;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerRepository {
    private final List<Customer> customers = List.of(
            new Customer(1, "John", "Doe"),
            new Customer(2, "Jane", "Doe"),
            new Customer(3, "Jack", "Doe"),
            new Customer(4, "Jill", "Doe"),
            new Customer(5, "Jim", "Doe"),
            new Customer(6, "Jenny", "Doe")
    );

    public List<Customer> getCustomers() {
        return customers;
    }
}
