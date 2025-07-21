package com.example.Backend.controller;

import com.example.Backend.entity.ClickEvent;
import com.example.Backend.service.ClickEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/click-event")
public class ClickEventController {
 @Autowired
    ClickEventService clickEventService;
    @PostMapping("/save")
    ClickEvent saveClickEvent(ClickEvent clickEvent)
    {
        return clickEventService.saveClickEvent(clickEvent);
    }
}
