package com.example.cart.service;

import com.example.cart.data.Cart;
import com.example.cart.data.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getCart(){
        return cartRepository.findAll();
    }

    public Cart getCartById(int id){
        Optional<Cart> cart = cartRepository.findById(id);
        if (cart.isPresent()){
            return cart.get();
        }
        return null;
    }

    public void createCart(Cart cart){
        cartRepository.save(cart);
    }

    public void updateCartById(Cart cart){
        cartRepository.save(cart);
    }

    public void deleteAll(){
        cartRepository.deleteAll();
    }
}
