package com.jll.mapper;

import com.jll.entity.Application;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by LES on 2018/6/11.
 */
@Mapper
public interface ApplicationMapper {
    void insertApplication(Application application);

    List<Application> getApplicationList();

    void updateApplicationState(Application application);

    List<Application> getApplicationListByRoom(String room);

    List<Application> getApplicationListByApplicator(String application_id);

    Application getApplicationListById(Integer id);

    void deleteApplication(Application application);
}
