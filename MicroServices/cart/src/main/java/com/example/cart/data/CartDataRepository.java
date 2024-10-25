package com.example.cart.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartDataRepository extends JpaRepository<Cart, Integer> {
}
