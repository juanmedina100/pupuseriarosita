# Web pupuseria Rosita

# 1. Clonar el repositorio
git clone https://github.com/juanmedina100/pupuseriarosita.git
cd pupuseriarosita

# 2. Construir la imagen
docker build -t pupuseriarosita:latest .

# 3. Ejecutar con volúmenes en el puerto 8080
docker run -d \
  -p 8080:80 \
  -v $(pwd):/usr/share/nginx/html \
  --name pupuseria \
  pupuseriarosita:latest

#  Puertos para usar el Claudfleare:
80
8080
8880
2052
2082
2086
2095