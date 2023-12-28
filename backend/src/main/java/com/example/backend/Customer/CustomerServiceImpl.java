package com.example.backend.Customer;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerDto> getAllCustomers() {
        return customerRepository.findAll()
                .stream()
                .map(customer -> new CustomerDto(
                        customer.getId(),
                        customer.getFirstname(),
                        customer.getLastname(),
                        customer.getEmail(),
                        customer.getAddress(),
                        customer.getPhone()
                ))
                .collect(Collectors.toList());
    }
}
