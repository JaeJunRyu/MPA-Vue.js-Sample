package com.example.vuecli2.webpack4.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@Profile(value="dev")
@PropertySource(value="classpath:manifestjs-dev.json", factory = JsonPropertySourceFactory.class)
public class DevJsonProperties {

  @Bean
  public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
    PropertySourcesPlaceholderConfigurer configurer = new PropertySourcesPlaceholderConfigurer();
    configurer.setIgnoreUnresolvablePlaceholders(true);
    configurer.setIgnoreResourceNotFound(true);
    return configurer;
  }

}
