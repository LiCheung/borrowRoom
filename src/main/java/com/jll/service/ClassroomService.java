package com.jll.service;

import com.jll.entity.Classroom;
import com.jll.mapper.ClassroomMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by LES on 2018/6/12.
 */
@Service
public class ClassroomService implements ClassroomMapper {
    @Autowired
    private ClassroomMapper classroomMapper;

    @Override
    public void addClassroom(Classroom classroom) {
        classroomMapper.addClassroom(classroom);
        System.out.println(classroom);
    }

    @Override
    public List<Classroom> getClassroomList() {
        List<Classroom> classrooms = classroomMapper.getClassroomList();
        return classrooms;
    }

    @Override
    public void updateClassroomState(Classroom classroom) {
        classroomMapper.updateClassroomState(classroom);
    }
}
