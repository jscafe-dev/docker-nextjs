FROM node
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]