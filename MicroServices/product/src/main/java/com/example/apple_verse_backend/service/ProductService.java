package com.example.apple_verse_backend.service;

import com.example.apple_verse_backend.data.Product;
import com.example.apple_verse_backend.data.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    public List<Product> getProduct(){
        return productRepository.findAll();
    }
}
