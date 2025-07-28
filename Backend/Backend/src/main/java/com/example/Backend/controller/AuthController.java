package com.example.Backend.controller;

import com.example.Backend.config.JwtUtil;
import com.example.Backend.dto.LoginRequestDTO;
import com.example.Backend.entity.Users;
import com.example.Backend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
   private UsersRepository usersRepo;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authManager;
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Users users)
    {
        users.setPassword(encoder.encode(users.getPassword()));
        usersRepo.save(users);
        return  ResponseEntity.ok(("User Registered"));
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO login)
    {
        String email=login.getEmail();
        String password=login.getPassword();
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(email,password)
        );
        Users user=usersRepo.findByEmail(email).orElseThrow();
        String token = jwtUtil.generateToken(
                user.getEmail(),user.getRole(),String.valueOf(user.getId())
        );
        Map<String,Object>response=new HashMap<>();
        response.put("token",token);
        response.put("id",user.getId());
        response.put("role",user.getRole());
        response.put("email",user.getEmail());
        return ResponseEntity.ok(response);
    }
}
