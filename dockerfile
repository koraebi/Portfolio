# COPY Files
FROM node:18-alpine AS build-env
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Copy app and deps
FROM node:18-alpine
WORKDIR /app
COPY --from=build-env /app .
RUN rm -rf node_modules && npm install --only=production

# Run Next.js
CMD ["npm", "run", "start"]