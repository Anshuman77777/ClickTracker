package com.example.Backend.controller;

import com.example.Backend.dto.UrlDTO;
import com.example.Backend.entity.Url;
import com.example.Backend.entity.Users;
import com.example.Backend.repository.UsersRepository;
import com.example.Backend.service.UrlService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/url")
public class UrlController {

    @Autowired
    UrlService urlService;
    @Autowired
    UsersRepository usersRepository;
    //save url
    @PostMapping("/save")
    public ResponseEntity<?> saveUrl(@RequestBody UrlDTO url, HttpServletRequest request)
    {   try {
        Long id = Long.valueOf(request.getAttribute("userId").toString());
        if (id != url.getUserId())return ResponseEntity.badRequest().body("Wrong uid");
        Users user = usersRepository.findById(url.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        ;
        // Build Url entity
        Url newUrl = Url.builder()
                .name(url.getName())
                .originalUrl(url.getOriginalUrl())
                .user(user)
                .build();

        return ResponseEntity.ok().body(urlService.saveUrl(newUrl));
    } catch (Exception e) {
        return  ResponseEntity.badRequest().body(e);
    }
    }
    @GetMapping("/fetchall/{id}")
    public ResponseEntity<?> fetchAll(@PathVariable long id, HttpServletRequest request)
    {
        if(id!=Long.valueOf(request.getAttribute("userId").toString()))return ResponseEntity.badRequest().body("Wrong uid");
        List<UrlDTO>ans=new ArrayList<>();
        List<Url>temp=urlService.getUrls(id);
        for(int i=0;i<temp.size();i++)
        {
            UrlDTO sam=new UrlDTO();
            sam.setName(temp.get(i).getName());
            sam.setOriginalUrl(temp.get(i).getOriginalUrl());
            sam.setCreatedAt(temp.get(i).getCreatedAt());
            ans.add(sam);
        }
        return ResponseEntity.ok().body(ans);
    }
}
