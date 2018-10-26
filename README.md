# JWT Spring Boot Security

## О проекте

Это демонстрация аутентификации на основе токена с использованием **JSON Web Token** и 
**CSRF**, **Spring Security**, **Spring Boot** и **Vue js**. Это решение частично основано на блогах
[Где хранить ваши JWT-файлы - Cookies vs HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage) 
и [Где хранить JWT в браузере? Как защитить от CSRF?](Https://stackoverflow.com/questions/27067251/where-to-store-jwt-in-browser-how-to-protect-against-csrf)

[![Build Status](https://travis-ci.org/szerhusenBC/jwt-spring-security-demo.svg?branch=master)](https://travis-ci.org/szerhusenBC/jwt-spring-security-demo)

## Стек Технологий
Компонент         | Технология
---               | ---
Frontend          | [Vue.js 2](https://github.com/vuejs/vue)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security, [JJWT](https://github.com/auth0/java-jwt), CSRF)
Client Build Tools| [vue-cli](https://github.com/vuejs/vue-cli), Webpack, npm
Server Build Tools| Gradle

## Безопасность (`Security`)

#### JWT token

Для генерации и проверки JWT я использую [JJWT](https://github.com/auth0/java-jwt).
**JJWT** - автономная библиотека Java, обеспечивающая создание и верификацию сквозных веб-токенов JSON.

#### JWT стратегия хранения
У нас есть несколько вариантов, где хранить маркер:

* **Веб-хранилище HTML5** (**`HTML5 Web Storage`**, а точнее `localStorage` или `sessionStorage`);
* **Cookies**.

##### Основная проблема веб-хранилища
Он доступен через JavaScript в том же домене. Это означает, что любой JavaScript, запущенный на вашем сайте, будет иметь 
доступ к веб-хранилищу, и из-за этого может быть уязвим для атак межсайтового скриптинга (**`XSS`**).

Таким образом, чтобы предотвратить [XSS](https://ru.wikipedia.org/wiki/Межсайтовый_скриптинг), я храню маркер `JWT` в 
`Http-Only/Secure` куки. Файлы куки, если они используются с флагом `HttpOnly`, недоступны через JavaScript и невосприимчивы к `XSS`.


##### CSRF атака

Тем не менее, файлы куки уязвимы для атаки другого типа: [межсайтовой подделки запроса (CSRF)](https://ru.wikipedia.org/wiki/Межсайтовая_подделка_запроса).
**Атака CSRF** - это тип атаки, которая возникает, когда вредоносный веб-сайт, электронная почта или блог заставляют 
веб-браузер пользователя выполнять нежелательные действия на доверенном сайте, на котором пользователь в настоящее время 
аутентифицирован.

Чтобы предотвратить атаки CSRF, мы должны создать дополнительный Javascript читаемый файл куки, который называется: 
**XSRF-TOKEN**. Этот файл куки должен быть создан, когда пользователь вошел в систему и должен содержать случайную, 
недопустимую строку. Каждый раз, когда JavaScript приложение хочет сделать запрос, ему нужно будет прочитать этот 
токен и отправить его в пользовательский HTTP-заголовок.

## Использование
#### Импорт проекта (_Intellij IDEA_)

1. `File` -> `New` -> `Project From Existing Source` -> укажите путь к проекту;
2. `CTRL + SHIFT + ALT + S` -> ` Modules` -> `+` -> ` Import Module` -> `Выберите backend папку, указав что это GRADLE проект`;
3. -//- то же самое для папки `frontend`, только не указывая что это gradle-проект, а выбрав `Create module from existing sources`.

### Запуск бэкэнда

`gradle Build` : Перейдите в корневую папку  `build.gradle` и выполните:

```sbtshell
gradle bootRun
```
или запустите из IDE класс `ru.steklopod.Application`.

_Приложение будет запущено на [http://localhost:8091](http://localhost:8091)._


### Запуск фронтэнда

Перейдите в корневую папку `frontend` (должен содержать `package.json`)

```npm
npm install

npm start
```
_Приложение будет запущено на  [http://localhost:8081](http://localhost:8081)._

___

_Чтобы убить процесс на порту 8081 (Windows)_:

```sbtshell
1. netstat -ano | findstr 8081
2. taskkill /pid ПОРТ /F
``` 
