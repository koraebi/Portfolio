# COPY Files
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci --omit=dev
RUN npm run build

# Run Next.js
CMD ["npm", "start"]