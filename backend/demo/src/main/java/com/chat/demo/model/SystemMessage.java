package com.chat.demo.model;

public class SystemMessage {
    private boolean exist;
    private Integer Id;

    public SystemMessage(boolean exist){
        super();
        this.exist = exist;
        this.Id = null;
    }

    public SystemMessage(boolean exist, Integer Id){
        super();
        this.exist = exist;
        this.Id = Id;
    }

    public SystemMessage(){
        super();
        this.exist = false;
        this.Id = null;
    }
}
