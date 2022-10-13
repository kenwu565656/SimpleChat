package com.chat.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    private String roomName, password;

    public ChatRoom(){};
    public ChatRoom(String roomName, String password){
        super();
        this.roomName = roomName;
        this.password = password;
    }
}
