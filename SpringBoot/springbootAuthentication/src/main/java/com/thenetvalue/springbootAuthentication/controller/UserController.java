package com.thenetvalue.springbootAuthentication.controller;

import com.thenetvalue.springbootAuthentication.model.LoginUser;
import com.thenetvalue.springbootAuthentication.model.User;
import com.thenetvalue.springbootAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")
    public String addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUser(id);
    }

    @GetMapping("/")
    public Iterable<User> allUsers() {
        return userService.allUsers();
    }

    @GetMapping("/username/{username}")
    public List<User> findByUsernameContains(@PathVariable("username") String username) {
        return userService.findByUsernameContains(username);
    }

    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<User> login(@PathVariable("username") String username, @PathVariable("password") String password) {
        User user = userService.loginUser(new LoginUser(username, password));
        System.out.println("user " + user);
        if (user != null) {
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND.value()).body(user);
        }
    }
}

