package com.example.Backend.repository;

import com.example.Backend.dto.DaywiseClickDTO;
import com.example.Backend.dto.DeviceCountDTO;
import com.example.Backend.dto.ReferrerCountDTO;
import com.example.Backend.entity.ClickEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent,Long> {
    List<ClickEvent> findByUrl_Id(Long urlId);
    @Query(value = "SELECT referrer,COUNT(*) AS people FROM click_event WHERE url_id=:urlId GROUP BY referrer",nativeQuery = true)
    List<ReferrerCountDTO>countReferrersByUrl(@Param("urlId") Long urlId);
    @Query(value = "SELECT device,COUNT(*) AS people FROM click_event WHERE url_id=:urlId GROUP BY device",nativeQuery = true)
    List<DeviceCountDTO>countReferrersByDevice(@Param("urlId") Long urlId);
    @Query(value = "SELECT DAYNAME(created_at) AS day, COUNT(*) AS totalClicks " +
            "FROM click_event " +
            "WHERE url_id = :urlId AND created_at >= CURDATE() - INTERVAL 7 DAY " +
            "GROUP BY DAYNAME(created_at)", nativeQuery = true)
    List<DaywiseClickDTO> getLast7DaysClickCountByDay(@Param("urlId") Long urlId);


}
