# Usamos Node.js como base
FROM node:18-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todos los archivos de la aplicación
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# Iniciamos el servidor
CMD ["npm", "start"]