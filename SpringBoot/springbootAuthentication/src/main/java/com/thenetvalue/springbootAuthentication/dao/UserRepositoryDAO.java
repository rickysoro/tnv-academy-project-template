package com.thenetvalue.springbootAuthentication.dao;

import com.thenetvalue.springbootAuthentication.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {

    List<User> findByUsernameContains(String username);

    User findUserByUsername (String username);

    User findUserByUsernameAndPassword (String username, String password);



}
