package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClickEventDTO {

    private String referrer ;
    private String ip;
    private String device;
    private Long urlID;
    private LocalDateTime createdAt;
}
