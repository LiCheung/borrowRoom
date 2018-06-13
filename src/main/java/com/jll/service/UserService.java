package com.jll.service;

import com.jll.entity.User;
import com.jll.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by LES on 2018/6/13.
 */
@Service
public class UserService implements UserMapper {
    @Autowired
    private UserService usersMapper;

    @Override
    public void addUser(User user) {
        usersMapper.addUser(user);
    }

    @Override
    public void updateUserRole(User user) {
        usersMapper.updateUserRole(user);
    }

    @Override
    public void beManager(User user) {
        usersMapper.beManager(user);
    }
}
