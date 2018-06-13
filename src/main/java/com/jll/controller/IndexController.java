package com.jll.controller;

import com.jll.entity.User;
import com.jll.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by LES on 2018/6/13.
 */
@Controller
public class IndexController {
    @Autowired
    private UserService usersService;

    @RequestMapping("/index")
    public String view(){
        System.out.println("yeah");
        /*User user = new User();
        usersService.addUser(user);*/
        return "student";
    }
}
