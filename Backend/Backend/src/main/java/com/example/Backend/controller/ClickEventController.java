package com.example.Backend.controller;

import com.example.Backend.dto.ClickEventDTO;
import com.example.Backend.entity.ClickEvent;
import com.example.Backend.entity.Url;
import com.example.Backend.repository.UrlRepository;
import com.example.Backend.service.ClickEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/click-event")
public class ClickEventController {
 @Autowired
    ClickEventService clickEventService;
 @Autowired
    UrlRepository urlRepository;
    @PostMapping("/save")
    ClickEventDTO saveClickEvent(@RequestBody  ClickEventDTO clickEvent)
    {
        Url url = urlRepository.getById(clickEvent.getUrlID());
        //build clickevent entity
        ClickEvent clickEvent1 = ClickEvent.builder()
                .referrer(clickEvent.getReferrer())
                .url(url)
                .ip(clickEvent.getIp())
                .device(clickEvent.getDevice())
                .build();
        clickEvent1= clickEventService.saveClickEvent(clickEvent1);
        clickEvent.setCreatedAt(clickEvent1.getCreatedAt());
        return clickEvent;
    }
    @GetMapping("getbyid/{urlId}")
    List<ClickEventDTO> getClickEventsForUrl(@PathVariable Long urlId)
    {
        return clickEventService.getClickEventsForURL(urlId);
    }
}
