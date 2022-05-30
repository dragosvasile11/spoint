package com.codecool.spoint.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "User")
public class User {

    @Id
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
