package com.example.vuecli2.webpack4.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@Profile(value="release")
@PropertySource(value="classpath:manifestjs-release.json", factory = JsonPropertySourceFactory.class)
public class ReleaseJsonProperties {


}
