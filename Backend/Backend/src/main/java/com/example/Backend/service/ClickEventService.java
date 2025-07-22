package com.example.Backend.service;

import com.example.Backend.dto.ClickEventDTO;
import com.example.Backend.entity.ClickEvent;

import java.util.List;

public interface ClickEventService {
    ClickEvent saveClickEvent(ClickEvent clickEvent);
    List<ClickEventDTO> getClickEventsForURL(long urlId);
}
