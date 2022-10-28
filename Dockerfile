#FROM node as build
#WORKDIR /app
#COPY package.json .
#COPY tsconfig.json .
#RUN npm install
#COPY . .
#RUN npm run build
#
#FROM nginx
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/build /usr/share/nginx/html

FROM node:12.4.0-alpine as react_build
#also say
WORKDIR /app
#copy the react app to the container
COPY . /app/

# #prepare the contiainer for building react
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm run build

##prepare nginx
#FROM nginx:1.16.0-alpine
#
#COPY --from=react_build /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/app.conf /etc/nginx/conf.d
#
#

#fire up nginx
#EXPOSE 80
#CMD ["nginx","-g","daemon off;"]