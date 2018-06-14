package com.jll.service;

import com.jll.entity.Application;
import com.jll.mapper.ApplicationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by LES on 2018/6/11.
 */
@Service
public class ApplicationService implements ApplicationMapper {
    @Autowired
    private ApplicationMapper applicationMapper;

    @Override
    public void insertApplication(Application application) {
        applicationMapper.insertApplication(application);
        System.out.println(application);
    }

    @Override
    public List<Application> getApplicationList() {
        List<Application> applications = applicationMapper.getApplicationList();
        return applications;
    }

    @Override
    public void updateApplicationState(Application application) {
        applicationMapper.updateApplicationState(application);
    }

    @Override
    public List<Application> getApplicationListByRoom(String room) {
        /*System.out.println();*/
        return applicationMapper.getApplicationListByRoom(room);
    }
}
