package com.example.Backend.service;

import com.example.Backend.dto.ClickEventDTO;
import com.example.Backend.dto.DaywiseClickDTO;
import com.example.Backend.dto.DeviceCountDTO;
import com.example.Backend.dto.ReferrerCountDTO;
import com.example.Backend.entity.ClickEvent;
import com.example.Backend.repository.ClickEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClickEventServiceImpl implements  ClickEventService{
    @Autowired
    ClickEventRepository clickEventRepository;

    @Override
    public ClickEvent saveClickEvent(ClickEvent clickEvent)
    {
        return clickEventRepository.save(clickEvent);
    }
    @Override
   public List<ClickEventDTO> getClickEventsForURL(long urlId)
    { List<ClickEventDTO>ans=new ArrayList<>();
        clickEventRepository.findByUrl_Id(urlId).forEach(data->
        {
            ClickEventDTO clickEventDTO = new ClickEventDTO(
                    data.getReferrer(),
                    data.getIp(),
                    data.getDevice(),
                    data.getUrl().getId(),         // extract URL ID from Url entity
                    data.getCreatedAt()
            );
            ans.add(clickEventDTO);
        });
       return ans;
    }
    @Override
    public  List<ReferrerCountDTO> groupByReferrers(long urlId)
    {
        return clickEventRepository.countReferrersByUrl(urlId);
    }
    @Override
    public  List<DeviceCountDTO> groupByDevices(long urlId)
    {
        return clickEventRepository.countReferrersByDevice(urlId);
    }
    @Override
    public List<DaywiseClickDTO> groupByDays(long urlId)
    {
    return clickEventRepository.getLast7DaysClickCountByDay(urlId);
    }
}
