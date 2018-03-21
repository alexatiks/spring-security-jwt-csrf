package com.alexatiks.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/")
    public ResponseEntity getHome() {
        return ResponseEntity.ok("Welcome to Your home page");
    }

    @RequestMapping(value = "secured")
    public ResponseEntity getSecured() {
        return ResponseEntity.ok("Welcome to the secured page");
    }

}