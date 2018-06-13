package com.jll.entity;

import lombok.Data;

/**
 * Created by LES on 2018/6/13.
 */
@Data
public class User {
    private Integer id;
    private String name;
    private String yiban_id;
    private String role;
    private String manager_application;
}
