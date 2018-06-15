package com.jll.controller;

import com.jll.entity.Application;
import com.jll.entity.Classroom;
import com.jll.service.ApplicationService;
import com.jll.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by LES on 2018/6/11.
 */
@Controller
public class TeacherController {
    @Autowired
    private ClassroomService classroomService;

    @Autowired
    private ApplicationService applicationService;

    @RequestMapping("/manage")
    public String manage(){
        return "teacher";
    }

    @RequestMapping("/addClassroom")
    public String addClassroom(Classroom classroom){
        classroomService.addClassroom(classroom);
        return "teacher";
    }

    @RequestMapping("/deleteClassroom")
    public void deleteClassroom(Classroom classroom){
        classroomService.deleteClassroom(classroom);
    }

    @RequestMapping("/getApplicationList")
    @ResponseBody
    public List<Application> getApplicationList(){
        System.out.println(applicationService.getApplicationList());
        return applicationService.getApplicationList();
    }

    @RequestMapping("/getApplicationListById")
    @ResponseBody
    public Application getApplicationListById(Integer id){
        System.out.println(applicationService.getApplicationListById(id));
        return applicationService.getApplicationListById(id);
    }

    @RequestMapping("/updateApplicationState")
    public String updateApplicationState(Application application){
        applicationService.updateApplicationState(application);
        return "teacher";
    }

    @RequestMapping("/deleteApplication")
    public String deleteApplication(Application application){
        applicationService.deleteApplication(application);
        return "teacher";
    }
}
