package com.thenetvalue.springbootAuthentication.controller;

import com.thenetvalue.springbootAuthentication.model.User;
import com.thenetvalue.springbootAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/utility")
public class RegistrationController {
    @Autowired
    private UserService userService;
    @PostMapping("/registrazione")
    public ResponseEntity<User> registrazioneUtente(@RequestBody User user)
    {
        return userService.registraUtente(user);
    }
}

