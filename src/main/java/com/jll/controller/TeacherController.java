package com.jll.controller;

import com.jll.entity.Classroom;
import com.jll.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by LES on 2018/6/11.
 */
@Controller
public class TeacherController {
    @Autowired
    private ClassroomService classroomService;

    @RequestMapping("/teacher")
    public String teacher(){
        return "teacher";
    }

    @RequestMapping("/addClassroom")
    public void addClassroom(Classroom classroom){
        classroomService.addClassroom(classroom);
    }

    @RequestMapping("/getClassroomList")
    public List<Classroom> getClassroomList(){
        List<Classroom> classrooms = classroomService.getClassroomList();
        return classrooms;
    }
}
