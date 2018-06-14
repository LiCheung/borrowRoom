package com.jll.mapper;

import com.jll.entity.Application;
import com.jll.entity.Classroom;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by LES on 2018/6/12.
 */
@Mapper
public interface ClassroomMapper {
    void addClassroom(Classroom classroom);

    List<Classroom> getClassroomList(Classroom classroom);

    /*void updateClassroomState(Classroom classroom);*/
}
