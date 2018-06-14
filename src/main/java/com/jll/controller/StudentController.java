package com.jll.controller;

import com.jll.entity.Application;
import com.jll.entity.Classroom;
import com.jll.entity.User;
import com.jll.service.ApplicationService;
import com.jll.service.ClassroomService;
import com.jll.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by LES on 2018/6/10.
 */
@Controller
public class StudentController {
    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private ClassroomService classroomService;

    @Autowired
    private UserService userService;

    @RequestMapping("/save")
    public String save(Application application){
        Date date = new Date();
        System.out.println(date);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String str = dateFormat.format(date);
        System.out.println(str);

        application.setDate(str);
        System.out.println(application.getDate());
        applicationService.insertApplication(application);

        /*Classroom classroom = new Classroom();
        classroom.setName(application.getClassroom());
        classroom.setState("已借出");
        classroomService.updateClassroomState(classroom);*/
        /*User user = new User();
        user.setName("敬丽丽");
        user.setYiban_id("8362339");
        userService.addUser(user);*/
        return "student";
    }

    @RequestMapping("/getClassroomList")
    @ResponseBody
    public List<Classroom> getClassroomList(Classroom classroom){
        List<Classroom> classrooms = classroomService.getClassroomList(classroom);
        System.out.println(classrooms);
        return classrooms;
    }

    @RequestMapping("/beManager")
    public void beManager(){
        User user = new User();
        userService.beManager(user);
    }

    @RequestMapping("/getApplicationListByRoom")
    @ResponseBody
    public List<Application> getApplicationListByRoom(String room){
        System.out.println(room);
        room = "明理楼A101";
        System.out.println(room);
        return applicationService.getApplicationListByRoom(room);
    }
}