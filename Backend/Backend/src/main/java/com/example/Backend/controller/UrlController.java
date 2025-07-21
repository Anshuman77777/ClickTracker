package com.example.Backend.controller;

import com.example.Backend.dto.UrlDTO;
import com.example.Backend.entity.Url;
import com.example.Backend.entity.Users;
import com.example.Backend.repository.UsersRepository;
import com.example.Backend.service.UrlService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/url")
public class UrlController {
    @Autowired
    UrlService urlService;
    @Autowired
    UsersRepository usersRepository;
    //save url
    @PostMapping("/save")
    public Url saveUser(@RequestBody UrlDTO url)
    {
        Users user = usersRepository.findById(url.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));;
        // Build Url entity
        Url newUrl = Url.builder()
                .name(url.getName())
                .originalUrl(url.getOriginalUrl())
                .user(user)
                .build();

        return urlService.saveUrl(newUrl);
    }
}
