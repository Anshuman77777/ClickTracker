package com.example.Backend.config;

import com.example.Backend.filters.JwtAuthFilter;
import com.example.Backend.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {
@Autowired
    private JwtAuthFilter jwtAuthFilter;
@Autowired
    private CustomUserDetailsService userDetailsService;
@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception
{
    return  http
            .csrf(csrf->csrf.disable())
            .authorizeHttpRequests(auth->auth
                    .requestMatchers("/auth/**").permitAll()
                    .anyRequest().authenticated()
            ).sessionManagement(sess->sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();

}
@Bean
    public PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();//hashing passwords
}
@Bean
    public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception
{
    return config.getAuthenticationManager();
}
}
