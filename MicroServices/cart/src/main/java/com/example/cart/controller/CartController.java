package com.example.cart.controller;

import com.example.cart.data.Cart;
import com.example.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping(path = "/cart")
    public List<Cart> findAllCart(){
        return cartService.getCart();
    }

    @GetMapping("/cart/{id}")
    public Cart findCartById(@PathVariable int id){
        return cartService.getCartById(id);
    }

    @PostMapping("/cart")
    public void createCart(@RequestBody Cart cart){
        cartService.createCart(cart);
    }

    @DeleteMapping(path = "/delete")
    public ResponseEntity<String> deleteAll(){
        cartService.deleteAll();
        return ResponseEntity.ok("Cart Clear Succesfully");
    }
}
