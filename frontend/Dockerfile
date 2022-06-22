FROM node

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --force
RUN yarn install --force

COPY . ./

CMD [ "npm", "start"]

#docker run --name spoint_front --rm -dp 3000:3000 spoint_front

