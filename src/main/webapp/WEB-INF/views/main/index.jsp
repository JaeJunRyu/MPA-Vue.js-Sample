<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>

<%@ page import="com.example.vuecli2.webpack4.demo.ResourceConsts" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
  <title>demovue</title>
</head>
<body>
<div id="vueapp1"> <!-- 컴포넌트1 -->
  <!-- 스와이프 영역 -->
</div>
<div id="vueapp2"> <!-- 컴포넌트2 -->
  <!-- 버튼 4개가 그려질 영역 -->
</div>
<div id="vueapp3"> <!-- 컴포넌트3 -->
  <!-- New! 공연 영역 -->
</div>
<%--  <spring:eval var="js_url1" expression="@environment['mticket.main.js']"/>--%>
  <spring:eval var="js_url1" expression="@environment.getProperty('mticket.main.js')"/>
<script src="/resource${js_url1}"></script>
</body>
</html>
