package com.jll.controller;

import com.jll.entity.Application;
import com.jll.entity.Classroom;
import com.jll.entity.User;
import com.jll.entity.YBUser;
import com.jll.service.ApplicationService;
import com.jll.service.ClassroomService;
import com.jll.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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

    @Autowired
    private AuthController authController;

    @RequestMapping("/save")
    public String save(Application application,HttpServletRequest request){
        String token = (String) request.getSession().getAttribute("token");
        YBUser ybUser = authController.getUserInfo(token);
        application.setApplication_id(ybUser.getUserId());

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        application.setDate(dateFormat.format(date));
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

    //已完成
    @RequestMapping("/getClassroomList")
    @ResponseBody
    public List<Classroom> getClassroomList(Classroom classroom){
        System.out.println(classroom);
        List<Classroom> classrooms = classroomService.getClassroomList(classroom);
        System.out.println(classrooms);
        return classrooms;
    }

    @RequestMapping("/beManager")
    public void beManager(){
        User user = new User();
        userService.beManager(user);
    }

    //已完成
    @RequestMapping("/getApplicationListByRoom")
    @ResponseBody
    public List<Application> getApplicationListByRoom(String room){
        System.out.println(room);
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        List<Application> applicationList = applicationService.getApplicationListByRoom(room);
        List<Application> applications = new ArrayList<>();
        for(Application application:applicationList){
            try {
                //使用SimpleDateFormat的parse()方法生成Date
                if(sf.parse(application.getTime_end()).after(new Date())){
                    applications.add(application);
                }
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        return applications;
    }

    //已完成
    @RequestMapping("/getApplicationListByApplicator")
    @ResponseBody
    public List<Application> getApplicationListByApplicator(HttpServletRequest request){
        String token = (String) request.getSession().getAttribute("token");
        YBUser ybUser = authController.getUserInfo(token);
        return applicationService.getApplicationListByApplicator(ybUser.getUserId());
    }
}