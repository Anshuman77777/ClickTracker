package com.example.Backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/url")
public class UrlController {
    @GetMapping("/findall")
    void findAllUrls()
    {
        System.out.println("Findall hitted");
    }
//    @PostMapping("/submit")
//    public ResponseEntity<String> submitData(@RequestBody ) {
//        // Handle POST data
//        return ResponseEntity.ok("Received: " );
//    }

}
