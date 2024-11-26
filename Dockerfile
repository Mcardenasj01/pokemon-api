# Usa la imagen de Node.js
FROM node:16

# Define el directorio de trabajo
WORKDIR /app

# Copia el archivo de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Dockerfile
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que correrá el backend
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["npm", "start"]
