package com.example.Backend.service;

import com.example.Backend.dto.ClickEventDTO;
import com.example.Backend.dto.DaywiseClickDTO;
import com.example.Backend.dto.DeviceCountDTO;
import com.example.Backend.dto.ReferrerCountDTO;
import com.example.Backend.entity.ClickEvent;

import java.util.List;

public interface ClickEventService {
    ClickEvent saveClickEvent(ClickEvent clickEvent);
    List<ClickEventDTO> getClickEventsForURL(long urlId);
    List<ReferrerCountDTO> groupByReferrers(long urlId);
    List<DeviceCountDTO> groupByDevices(long urlId);
    List<DaywiseClickDTO> groupByDays(long urlId);
}
