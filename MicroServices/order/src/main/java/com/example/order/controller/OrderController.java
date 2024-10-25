package com.example.order.controller;

import com.example.order.data.Order;
import com.example.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/order")
    public ResponseEntity<List<Order>> findAllOrders() {
        List<Order> orders = orderService.getOrder();
        return ResponseEntity.ok(orders);
    }

    @PostMapping("/order")
    public ResponseEntity<String> createOrder(@RequestBody Order order) {
        try {
            orderService.createOrder(order);
            return new ResponseEntity<>("Order created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Print stack trace to server logs
            return new ResponseEntity<>("Error creating order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
