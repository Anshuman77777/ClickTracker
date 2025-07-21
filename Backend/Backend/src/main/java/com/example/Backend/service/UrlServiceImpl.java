package com.example.Backend.service;

import com.example.Backend.entity.Url;
import com.example.Backend.repository.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UrlServiceImpl implements  UrlService{
    @Autowired
    UrlRepository urlRepository;
    @Override
   public Url saveUrl(Url url)
    {
       return urlRepository.save(url);
    }
}
