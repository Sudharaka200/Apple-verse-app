package com.example.cart.controller;

import com.example.cart.data.Cart;
import com.example.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CartDataController {
    @Autowired
    private CartService cartService;

    @GetMapping(path = "/cartData")
    public List<Cart> findAllCart(){
        return cartService.getCart();
    }

    @PostMapping("/cartData")
    public void createCart(@RequestBody Cart cart){
        cartService.createCart(cart);
    }

    @DeleteMapping("/cartData")
    public ResponseEntity<String> deleteAll(){
        cartService.deleteAll();
        return ResponseEntity.ok("Cart Cleared");
    }

}
