package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ContactMessage;



@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    // You can add custom query methods here if needed
}
