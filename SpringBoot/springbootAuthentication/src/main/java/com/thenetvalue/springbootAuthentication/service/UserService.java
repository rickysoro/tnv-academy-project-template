package com.thenetvalue.springbootAuthentication.service;

import com.thenetvalue.springbootAuthentication.dao.UserRepositoryDAO;
import com.thenetvalue.springbootAuthentication.model.LoginUser;
import com.thenetvalue.springbootAuthentication.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    UserRepositoryDAO userDAO;
    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    public String addUser (User user) {
        User resultUser = userDAO.save(user);
        if (resultUser != null) {
            return "Utente salvato correttamente";
        } else {
            return "Errore nel salvataggio dell utente";
        }
    }

    public User getUser(int id) {
        return userDAO.findById(id).orElseGet(null);
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();
    }

    /*public String updateUser(int id, User user) {
        user.setId(id);
        User resultUser = userDAO.save(user);
        if (resultUser != null) {
            return "Utente aggiornato correttamente";
        } else {
            return "Errore nell aggiornamento dell utente";
        }
    }*/

    /*public String deleteUser(int id) {
        User resultUser = userDAO.findById(id).get();
        if (resultUser == null) {
            return "Utente non trovato";
        } else {
            userDAO.delete(resultUser);
            return "Utente cancellato correttamente";
        }
    }*/
    public ResponseEntity<User> registraUtente (User user) {
        User userDB = userDAO.findUserByUsername(user.getUsername());
        if (userDB != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        User resultUser = userDAO.save(user);
        if (resultUser != null) {
            return ResponseEntity.status(HttpStatus.OK).body(resultUser);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    public User loginUser (LoginUser loginUser) {
        User userDB = userDAO.findUserByUsernameAndPassword(loginUser.getUsername(),loginUser.getPassword());
        return userDB;
    }

    public List<User> findByUsernameContains(String username) {
        return userDAO.findByUsernameContains(username);
    }
}


