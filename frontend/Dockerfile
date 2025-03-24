# Usa uma imagem do Nginx como servidor web
FROM nginx:alpine

# Copia o arquivo index.html para a pasta do Nginx
COPY index.html /usr/share/nginx/html/index.html

# Expõe a porta 80 para acesso à página
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
