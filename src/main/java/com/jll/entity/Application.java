package com.jll.entity;

import lombok.Data;

import java.sql.Date;

/**
 * Created by LES on 2018/6/11.
 */
@Data
public class Application {
     private Integer id;
     private String faculty;
     private String teacher;
     private String phone;
     private String participant;
     private String classroom;
     private Integer count;
     private String reason;
     private String time_start;
     private String time_end;

     private String state;
     private Date date;
     private String application_id;
}
