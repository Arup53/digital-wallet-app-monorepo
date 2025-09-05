FROM node:20.12.0-alpine3.19

WORKDIR /user/src/app

COPY package.json package-lock.json turbo.json ./

COPY apps/user-app ./apps/user-app
COPY packages ./packages

RUN npm install
RUN cd packages/db && npx prisma generate

RUN npm run build

EXPOSE 3005

CMD ["npm", "run", "start-user-app"]
