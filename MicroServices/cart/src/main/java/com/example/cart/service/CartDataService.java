package com.example.cart.service;

import com.example.cart.data.Cart;
import com.example.cart.data.CartDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDataService {
    @Autowired
    private CartDataRepository cartDataRepository;

    public List<Cart> getCart(){
        return cartDataRepository.findAll();
    }

    public void createCart(Cart cart){
        cartDataRepository.save(cart);
    }

    public void deleteCart(){
        cartDataRepository.deleteAll();
    }
}
