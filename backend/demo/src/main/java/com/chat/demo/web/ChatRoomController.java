package com.chat.demo.web;

import com.chat.demo.model.SystemMessage;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.chat.demo.domain.ChatRoomRepository;
import com.chat.demo.domain.ChatRoom;

import java.awt.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ChatRoomController {
    @Autowired
    private ChatRoomRepository repository;

    @RequestMapping("/chatrooms")
    public Iterable<ChatRoom> getChatRooms() {
        return repository.findAll();
    }

    @PostMapping("/check")
    public Map<String, String> checkIfChatRoomExist(@RequestBody Map<String, String> room){
        String roomName = room.get("roomName");
        String password = room.get("password");
        List<ChatRoom> result = repository.findByRoomNameAndPassword(roomName, password);
        Map<String, String> response = new HashMap<>();
        if (result.isEmpty()){
            response.put("exist", "false");

        }else{
            response.put("exist", "true");
            response.put("id", (result.get(0).getId()).toString());
        }
        return response;

    }

}
