FROM node:18-alpine AS base

FROM base AS deps

WORKDIR /app

COPY . .

RUN npm ci --only=production
RUN npm run build

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "npm", "start" ]