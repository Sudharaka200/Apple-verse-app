package com.example.user.data;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    private int id;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_id")
    private String frist_name;
    @Column(name = "first_name")
    private String last_name;
    @Column(name = "last_name")
    private String email;
    @Column(name = "phonenumber")
    private int phonenumber;
    @Column(name = "password")
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFrist_name() {
        return frist_name;
    }

    public void setFrist_name(String frist_name) {
        this.frist_name = frist_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(int phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
