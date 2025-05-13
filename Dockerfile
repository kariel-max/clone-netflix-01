FROM node:20
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
