package com.lab06.projectmanagement.service;

import com.lab06.projectmanagement.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    User addUser(User user);
    List<User> getUsers();
    User getUserByEmail(String email);
    boolean deleteUserById(Long id);
    User updateUserById(Long id, User user);
}
