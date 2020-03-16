package com.example.vuecli2.webpack4.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/main")
public class MainController {

  @Autowired
  private Environment env;

  @Autowired
  private ResourceConsts resourceConsts;

  //http api 통신을 통한 화면 구성
  //단일파일 컴포넌트 사용
  @GetMapping("index")
  public ModelAndView index(){

    System.out.println(resourceConsts.mticketMainJs);
    System.out.println(resourceConsts.mticketMainJs2);
    System.out.println(env.getProperty("mticket.main.js"));

    ModelAndView modelAndView = new ModelAndView();
    modelAndView.setViewName("/main/index");
    return modelAndView;
  }




}
