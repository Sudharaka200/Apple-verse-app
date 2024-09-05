package com.example.apple_verse_backend.controller;

import com.example.apple_verse_backend.data.Product;
import com.example.apple_verse_backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping(path = "/product")
    public List<Product> findAllProduct(){
        return productService.getProduct();
    }
}
