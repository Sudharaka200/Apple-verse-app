package com.example.order.service;

import com.example.order.data.Order;
import com.example.order.data.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrder(){
        return orderRepository.findAll();
    }

    public void createOrder(Order order){
        orderRepository.save(order);
    }
}
