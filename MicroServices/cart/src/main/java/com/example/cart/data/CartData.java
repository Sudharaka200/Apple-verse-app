package com.example.cart.data;

import jakarta.persistence.*;

@Entity
@Table(name = "cartdata")
public class CartData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartid")
    private int cartid;

    @Column(name = "productname")
    private String productname;

    @Column(name = "price")
    private int price;

    @Column(name = "subtotal")
    private int subtotal;

    @Column(name = "shippingcost")
    private int shippingcost;

    @Column(name = "total")
    private int total;

    @Column(name = "imglink")
    private String imglink;

    public int getCartid() {
        return cartid;
    }

    public void setCartid(int cartid) {
        this.cartid = cartid;
    }

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(int subtotal) {
        this.subtotal = subtotal;
    }

    public int getShippingcost() {
        return shippingcost;
    }

    public void setShippingcost(int shippingcost) {
        this.shippingcost = shippingcost;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public String getImglink() {
        return imglink;
    }

    public void setImglink(String imglink) {
        this.imglink = imglink;
    }
}
