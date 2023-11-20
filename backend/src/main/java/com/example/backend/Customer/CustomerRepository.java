package com.example.backend.Customer;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerRepository {
    private final List<Customer> customers = List.of(
            new Customer(1, "John", "Doe", "Customer"),
            new Customer(2, "Jane", "Doe", "Customer"),
            new Customer(3, "Jack", "Doe", "Customer"),
            new Customer(4, "Jill", "Doe", "Customer"),
            new Customer(5, "Jim", "Doe", "Customer"),
            new Customer(6, "Jenny", "Doe", "Customer")
    );

    public List<Customer> getCustomers() {
        return customers;
    }
}
