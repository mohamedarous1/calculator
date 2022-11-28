package com.calculator.calculator.controller;

import org.springframework.core.serializer.Serializer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;

@RestController


public class calculator_controller implements Serializable {
    @CrossOrigin
    @GetMapping("/hello")
    public String hello(){
        System.out.println("ghhfghfh");
        return "ghsdlfk";
    }
}
