package com.codecool.spoint.utils;
import org.mindrot.jbcrypt.BCrypt;

public class EncryptData {

    public static String hash(String data) {
        return BCrypt.hashpw(data, BCrypt.gensalt(10));
    }

    public static boolean verifiyHash(String data, String hash) {
        return BCrypt.checkpw(data, hash);
    }
}
