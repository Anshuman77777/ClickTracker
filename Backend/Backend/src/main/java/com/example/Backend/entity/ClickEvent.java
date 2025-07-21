package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClickEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
    @ManyToOne
    @JoinColumn(name = "urlId",nullable = false)
   Url url;
   private String referrer ;
   private String ip;
   private String device;
    @CreationTimestamp
    private LocalDateTime createdAt;
}
