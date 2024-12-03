# Etapa de desarrollo
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que el servidor de desarrollo escuchará (puerto 3000)
EXPOSE 3000

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "start"]
