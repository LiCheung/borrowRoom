package com.jll.mapper;

import com.jll.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by LES on 2018/6/13.
 */
@Mapper
public interface UserMapper {
    void addUser(User user);

    void updateUserRole(User user);

    void beManager(User user);

    String getRoleByName(String username);

    User selectByYBId(String yiban_id);
}
