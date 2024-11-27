﻿# Задание 1: "Получение данных о пользователе"

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.



# Задание 2: "Отправка данных на сервер"

Реализуйте функцию для отправки данных о пользователе на сервер:
Функция saveUserData
● Описание:
○ Функция принимает объект с данными о пользователе и использует
fetch для отправки данных на удаленный сервер.
○ Функция возвращает промис, который разрешается, если данные
успешно отправлены.
○ Если запрос неуспешен, промис должен быть отклонен с
соответствующим сообщением об ошибке.
● Подсказка:
○ Используйте метод POST и задайте заголовок Content-Type как
application/json.
○ Объект с данными о пользователе необходимо сериализовать в
JSON-строку с помощью JSON.stringify().



# Задание 3: "Изменение стиля элемента через заданное время"
Реализуйте функцию, которая изменяет стиль элемента с задержкой:
Функция changeStyleDelayed
● Описание:
○ Функция принимает идентификатор элемента (id) и время задержки в
миллисекундах (delay).
○ После истечения времени задержки, функция должна изменить стиль
элемента.