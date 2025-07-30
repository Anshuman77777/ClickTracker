package com.example.Backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UrlDTO {
  private  String name;
  private  String originalUrl;
  private  Long userId;
  private LocalDateTime createdAt;
}
