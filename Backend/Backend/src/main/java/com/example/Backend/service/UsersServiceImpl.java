package com.example.Backend.service;

import com.example.Backend.entity.Users;
import com.example.Backend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements  UsersService {
    @Autowired
    private UsersRepository usersRepository;
    @Override
    public Users saveUser(Users user)
    {
        return usersRepository.save(user);
    }
}
