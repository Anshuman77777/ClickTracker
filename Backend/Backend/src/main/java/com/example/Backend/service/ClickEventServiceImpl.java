package com.example.Backend.service;

import com.example.Backend.entity.ClickEvent;
import com.example.Backend.repository.ClickEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClickEventServiceImpl implements  ClickEventService{
    @Autowired
    ClickEventRepository clickEventRepository;
    @Override
    public ClickEvent saveClickEvent(ClickEvent clickEvent)
    {
        return clickEventRepository.save(clickEvent);
    }
}
