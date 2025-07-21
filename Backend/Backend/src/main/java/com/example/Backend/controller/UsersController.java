package com.example.Backend.controller;

import com.example.Backend.entity.Users;
import com.example.Backend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {
@Autowired private UsersService usersService;
//saving user
    @PostMapping("/save")
    public Users saveUser(@RequestBody Users user)
    {
        return usersService.saveUser(user);
    }
}
