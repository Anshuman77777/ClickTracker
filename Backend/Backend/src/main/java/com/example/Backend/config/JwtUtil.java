package com.example.Backend.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
    private static final String SECRET="x29Fh!83zP$eMc7@LdWqV9*BnR#4HaKm";


    public String generateToken(String email, String role,String id) {
        return Jwts.builder()
                .setSubject(email)
                .claim("id",id)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 3600000*24)) // 1 day
                .signWith(SignatureAlgorithm.HS256,SECRET.getBytes())
                .compact();
    }
    // ✅ Common method to parse claims
    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET.getBytes()) // required in 0.11.5+
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    public  String extractEmail(String token)
    {
        return  getClaims(token).getSubject();
    }
    public String extractRole(String token)
    {
        return getClaims(token).get("role",String.class);
    }
    public  Long extractId(String token)
    {
        return getClaims(token).get("id", Long.class);
    }
    // ✅ Validate token
    public boolean isTokenValid(String token, String email) {
        return extractEmail(token).equals(email) && !isTokenExpired(token);
    }

    // ✅ Check expiry
    private boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

}
