package com.chat.demo.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
public interface ChatRoomRepository extends CrudRepository <ChatRoom, Integer> {
    List<ChatRoom> findByRoomName(@Param("roomName") String roomName);

    List<ChatRoom> findByRoomNameAndPassword(@Param("roomName") String roomName,
                                             @Param("password") String password);

}
