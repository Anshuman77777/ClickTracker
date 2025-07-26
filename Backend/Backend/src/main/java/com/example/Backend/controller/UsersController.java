package com.example.Backend.controller;

import com.example.Backend.entity.Users;
import com.example.Backend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UsersController {
@Autowired private UsersService usersService;
//saving usee
    @PostMapping("/save")
    public Users saveUser(@RequestBody Users user)
    {
        return usersService.saveUser(user);
    }
    //check
    @GetMapping("/check")
    public ResponseEntity check()
    {
        return  ResponseEntity.ok("Hit");
    }
}
