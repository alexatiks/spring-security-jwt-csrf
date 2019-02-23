package com.alexatiks.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;

public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter {

    public JWTLoginFilter(String url, AuthenticationManager authManager) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) throws IOException {

        AccountCredentials creds = new ObjectMapper().readValue(req.getInputStream(), AccountCredentials.class);
        return getAuthenticationManager().authenticate(
                new UsernamePasswordAuthenticationToken(
                        creds.getUsername(),
                        creds.getPassword(),
                        creds.getAuthorities()
                )
        );
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication auth) {
        TokenAuthenticationHelper.addAuthentication(res, auth);
    }

    static class AccountCredentials {
        private String username;
        private String password;
        private Collection<GrantedAuthority> authorities;

        String getUsername() {
            return username;
        }

        void setUsername(String username) {
            this.username = username;
        }

        String getPassword() {
            return password;
        }

        void setPassword(String password) {
            this.password = password;
        }

        Collection<GrantedAuthority> getAuthorities() {
            return authorities;
        }

        void setAuthorities(Collection<GrantedAuthority> authorities) {
            this.authorities = authorities;
        }
    }
}