# Этап 1: Сборка приложения
FROM node:20.17 as build-stage
WORKDIR /app
COPY frontend/package.json /app
COPY frontend/yarn.lock /app

# Установка зависимостей
RUN yarn install
# Копирование остальных файлов
COPY frontend /app
# Сборка приложения
RUN yarn build

# Этап 2: Настройка Nginx для размещения приложения
FROM nginx:latest
# Копирование сборки приложения в папку, где Nginx ищет файлы для обслуживания
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Очистка конфигурации по умолчанию
RUN rm /etc/nginx/conf.d/default.conf
# Копирование пользовательского конфигурационного файла nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/

# Открытие порта 80 для входящих подключений
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]