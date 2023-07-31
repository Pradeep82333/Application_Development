package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.ContactMessage;
import com.example.demo.service.ContactMessageService;



@RestController
@CrossOrigin
public class ContactMessageController {
    ContactMessageService contactMessageService;

    @Autowired
    public ContactMessageController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    @PostMapping("/submit")
    public ContactMessage submitContactForm(@RequestBody ContactMessage contactMessage) {
        // You can perform additional validation or processing here if needed
        return contactMessageService.saveContactMessage(contactMessage);
    }
}
