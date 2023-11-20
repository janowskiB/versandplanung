package com.example.backend.Fleet;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Fleet {
    private int id;
    private String name;
    private String type;
    private String status;
}
