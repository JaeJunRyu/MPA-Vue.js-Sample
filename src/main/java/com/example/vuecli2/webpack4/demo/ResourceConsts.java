package com.example.vuecli2.webpack4.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class ResourceConsts {

  @Value("${mticket.main.js}")
  public String mticketMainJs;

  @Value("${cp.user.name}")
  public String mticketMainJs2;

  //    @PostConstruct
//  public void init(){
//    System.out.println("init : " + mticketMainJs2);
//    System.out.println("init : " + mticketMainJs);
//  }


}
