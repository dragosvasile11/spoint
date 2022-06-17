package com.codecool.spoint.models;
import com.codecool.spoint.utils.EncryptData;

import lombok.Data;

@Data
public class LoginToken {

    private Long id;
    private String firstName;
    private String lastName;
    private String userEmail;
    private String hash;
    private boolean userValidated;
    private String avatarImage;

    public LoginToken(Long id, String firstName, String lastName, String userEmail, String avatarImage) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
        this.hash = EncryptData.hash(userEmail);
        userValidated = true;
        this.avatarImage = avatarImage;
    }
}
