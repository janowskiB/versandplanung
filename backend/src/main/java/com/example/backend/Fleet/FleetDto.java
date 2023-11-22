package com.example.backend.Fleet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FleetDto {
    private int id;
    private String name;
    private String type;
    private String status;
}
