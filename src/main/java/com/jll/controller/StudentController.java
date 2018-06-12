package com.jll.controller;

import com.jll.entity.Application;
import com.jll.entity.Classroom;
import com.jll.service.ApplicationService;
import com.jll.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;

/**
 * Created by LES on 2018/6/10.
 */
@Controller
public class StudentController {
    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private ClassroomService classroomService;

    @RequestMapping("/")
    public String view(){
        System.out.println("yeah");
        return "student";
    }

    @RequestMapping("/save")
    public String save(Application application){
        System.out.println(application);
        Date date = new Date();
        application.setDate(new java.sql.Date(date.getTime()));
        System.out.println(application.getDate());
        applicationService.insertApplication(application);

        Classroom classroom = new Classroom();
        classroom.setName(application.getClassroom());
        classroom.setState("已借出");
        classroomService.updateClassroomState(classroom);
        return "student";
    }
}
