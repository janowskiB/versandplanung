package com.example.backend.Customer;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    List<Customer> getCustomers() {
        return customerRepository.getCustomers();
    }
}
