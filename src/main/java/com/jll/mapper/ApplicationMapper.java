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
}
