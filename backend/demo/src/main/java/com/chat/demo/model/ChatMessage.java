package com.chat.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {
    private String content;
    private String sender;

    public String toString(){
        return "sender: " + sender + ", content: " + content;
    }


}
