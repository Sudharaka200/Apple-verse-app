package com.example.order.data;

import jakarta.persistence.*;

@Entity
@Table(name = "orderdetails")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid")
    private int userid;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "company")
    private String company;

    @Column(name = "streetaddress")
    private String streetaddress;

    @Column(name = "addressline2")
    private String addressline2;

    @Column(name = "city")
    private String city;

    @Column(name = "province")
    private String province;

    @Column(name = "email")
    private String email;

    @Column(name = "phonenumber")
    private int phonenumber;

    @Column(name = "ordernote")
    private String ordernote;

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getStreetaddress() {
        return streetaddress;
    }

    public void setStreetaddress(String streetaddress) {
        this.streetaddress = streetaddress;
    }

    public String getAddressline2() {
        return addressline2;
    }

    public void setAddressline2(String addressline2) {
        this.addressline2 = addressline2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
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

    public String getOdernote() {
        return ordernote;
    }

    public void setOdernote(String odernote) {
        this.ordernote = odernote;
    }
}
