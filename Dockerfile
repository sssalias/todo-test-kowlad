# Этап 1: Сборка приложения
FROM node:latest as build-stage
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

# Установка зависимостей
RUN yarn install
# Копирование остальных файлов
COPY . /app
# Сборка приложения
RUN yarn build

# Этап 2: Настройка Nginx для размещения приложения
FROM nginx:latest
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]