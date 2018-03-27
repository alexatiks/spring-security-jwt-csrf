# JWT Spring Security Demo


## About
This is a demonstration of stateless token-based authentication using **JSON Web Token** and **CSRF** protection, **Spring Security**, **Spring Boot** and **Vue js**. This solution is partially based on the blog entries
[Where to Store your JWTs – Cookies vs HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage) and [Where to store JWT in browser? How to protect against CSRF?
](https://stackoverflow.com/questions/27067251/where-to-store-jwt-in-browser-how-to-protect-against-csrf)

[![Build Status](https://travis-ci.org/szerhusenBC/jwt-spring-security-demo.svg?branch=master)](https://travis-ci.org/szerhusenBC/jwt-spring-security-demo)

## Technology Stack
Component         | Technology
---               | ---
Frontend          | [Vue.js 2](https://github.com/vuejs/vue)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security, [JJWT](https://github.com/auth0/java-jwt), CSRF)
Client Build Tools| [vue-cli](https://github.com/vuejs/vue-cli), Webpack, npm
Server Build Tools| Gradle

## Security

#### JWT token

To generating and verifying JWT I use [JJWT](https://github.com/auth0/java-jwt). JJWT – a self-contained Java library providing end-to-end JSON Web Tokens creation and verification.

#### JWT storing strategy
We have a couple of options where to store the token:

* HTML5 Web Storage (localStorage or sessionStorage)
* Cookies

###### Main problem of Web Storage
It is accessible through JavaScript on the same domain. This means that any JavaScript running on your site will have access to web storage, and because of this can be vulnerable to cross-site scripting (XSS) attacks.

So, to prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) I store the JWT token in a Http-Only/Secure cookie. Cookies, when used with the HttpOnly cookie flag, are not accessible through JavaScript, and are immune to XSS.

###### CSRF attack
However, cookies are vulnerable to a different type of attack: cross-site request forgery (CSRF). A [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attack is a type of attack that occurs when a malicious web site, email, or blog causes a user’s web browser to perform an unwanted action on a trusted site on which the user is currently authenticated.

To prevent CSRF attacks, we must create an extra Javascript readable cookie which is called: XSRF-TOKEN. This cookie must be created when the user is logged in and should contain a random, un-guessable string. Every time the JavaScript application wants to make a request, it will need to read this token and send it along in a custom HTTP header.



## Usage
#### Import the project (Intellij IDEA)

1. Create project from existing source
2. From the Project Structure dialog: Modules | new | Import Module | Select backend folder | Import module from external model
3. From the Project Structure dialog: Modules | new | Import Module | Select frontend folder | Create module from existing sources

#### Build/Run Backend (SpringBoot Java)

```
# Gradle Build : Navigate to the root folder where build.gradle is present
gradle bootRun

# or

# run bootRun task from IDE
```
Application will be running at [http://localhost:8091](http://localhost:8091).

#### Build/Run Frontend (optional step)

```
# Navigate to frontend folder (should contain package.json )
npm install

npm start

# or

# run start command from IDE
```
Application will be running at [http://localhost:8080](http://localhost:8080).


## Copyright and license

The code is released under the [MIT license](LICENSE?raw=true).


