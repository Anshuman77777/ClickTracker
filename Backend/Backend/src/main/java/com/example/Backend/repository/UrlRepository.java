package com.example.Backend.repository;

import com.example.Backend.entity.Url;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UrlRepository extends JpaRepository<Url,Long> {
    List<Url> findByUserIdOrderByCreatedAtDesc(Long userId);
}
