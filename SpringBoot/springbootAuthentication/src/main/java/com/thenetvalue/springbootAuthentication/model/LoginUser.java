package com.thenetvalue.springbootAuthentication.model;

public class LoginUser {
    public LoginUser(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String password;
}
