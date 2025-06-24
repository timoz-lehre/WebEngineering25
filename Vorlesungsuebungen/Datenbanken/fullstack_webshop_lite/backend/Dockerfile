FROM node:18-alpine

RUN apk add --no-cache openssl

WORKDIR /app
COPY . .

RUN npm install
RUN npm install bcryptjs

EXPOSE 3000

CMD npx prisma db pull && npx prisma generate && npm run dev