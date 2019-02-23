package com.alexatiks.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping(value = "homepage")
    public ResponseEntity getHome() {
        return ResponseEntity.ok("Welcome to Your home page");
    }

    @GetMapping(value = "onlyforadmin/welcome")
    public ResponseEntity getSecuredAdmin() {
        return ResponseEntity.ok("Welcome to the secured page. Only for Admin");
    }

    @GetMapping(value = "secured/welcome")
    public ResponseEntity getSecured() {
        return ResponseEntity.ok("Welcome to the secured page");
    }

    @PostMapping(value = "secured/postdata")
    public ResponseEntity postData() {
        return ResponseEntity.ok("Data is saved");
    }
}