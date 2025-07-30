package com.example.Backend.service;

import com.example.Backend.entity.Url;

import java.util.List;

public interface UrlService {
    Url saveUrl(Url url);
     List<Url> getUrls(Long id);
}
