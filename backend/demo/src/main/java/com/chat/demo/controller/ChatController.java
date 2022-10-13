package com.chat.demo.controller;

import com.chat.demo.model.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpleMessagingTemplate;

    @MessageMapping("/message/{id}")
    @SendTo("/chatroom/{id}")
    public ChatMessage receiveMessage(@Payload ChatMessage message){
        System.out.println(message);
        return message;
    }
}
